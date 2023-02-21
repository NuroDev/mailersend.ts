import { fetch as coreFetch } from "undici";

import type { RequestOptions } from "~/types/request";

export async function fetch<TResponse>(
  options: RequestOptions<true>
): Promise<TResponse>;
export async function fetch(options: RequestOptions<false>): Promise<Response>;
export async function fetch<
  T extends RequestOptions<true> | RequestOptions<false>
>({
  apiKey,
  apiVersion = "v1",
  basePath = "https://api.mailersend.com",
  body = undefined,
  endpoint,
  headers = {},
  json = true,
  method = "GET",
  params = {},
}: T): Promise<T> {
  const url = new URL(`${apiVersion}${endpoint}`, basePath);
  Object.entries(params).forEach(([key, value]) => {
    // Note: MailerSend requires a weird / stupid format for passing an array of query params rather than comma separated values
    if (Array.isArray(value))
      return value.forEach((v) =>
        url.searchParams.append(`${key}[]`, v.toString())
      );

    if (typeof value === "boolean")
      return url.searchParams.append(key, value ? "1" : "0");

    return url.searchParams.append(key, value.toString());
  });

  const response = await coreFetch(url.href, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      ...headers,
    },
    ...(body !== undefined
      ? {
          body: typeof body === "string" ? body : JSON.stringify(body),
        }
      : {}),
  });

  if (!response.status.toString().startsWith("20")) {
    const json = (await response.json()) as Record<string, any>;
    throw {
      status: response.status,
      ...json,
    };
  }

  if (!json) return response as any as T;

  return (await response.json()) as T;
}
