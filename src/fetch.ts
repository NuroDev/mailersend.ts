import nodeFetch from "node-fetch";

import type { Response } from "node-fetch";

import type { RequestOptions } from "~/types";

export async function fetch<TResponse = Record<string, any>>({
  apiVersion = "v1",
  apiKey,
  basePath = "https://api.mailersend.com",
  body = undefined,
  endpoint,
  headers = {},
  method = "GET",
  params = {},
}: RequestOptions): Promise<TResponse> {
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

  const json = (await response.json()) as TResponse;

  return json;
}

export async function fetch2({
  apiVersion = "v1",
  apiKey,
  basePath = "https://api.mailersend.com",
  body = undefined,
  endpoint,
  headers = {},
  method = "GET",
  params = {},
}: RequestOptions): Promise<Response> {
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

  if (!response.ok) throw await response.json();

  return response;
}
