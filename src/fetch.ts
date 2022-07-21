import nodeFetch from "node-fetch";

import type { Response } from "node-fetch";

import type { RequestOptions } from "~/types";

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
  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.append(key, value)
  );

  const response = await nodeFetch(url.href, {
    method,
    headers: {
      ...headers,
      Authorization: `Bearer ${apiKey}`,
    },
    ...(body !== undefined
      ? {
          body: typeof body === "string" ? body : JSON.stringify(body),
        }
      : {}),
  });

  if (!json) return response as any as T;

  return (await response.json()) as T;
}
