import nodeFetch from "node-fetch";

import type { HttpMethod } from "~/types";

interface RequestOptions {
  apiKey: string;
  basePath?: string;
  body?: string | Record<string, any>;
  endpoint: string;
  headers?: Record<string, string>;
  method?: HttpMethod;
  params?: Record<string, string>;
}

export async function fetch<TResponse = Record<string, any>>({
  apiKey,
  basePath = "https://api.mailersend.com/v1",
  body = undefined,
  endpoint,
  headers = {},
  method = "GET",
  params = {},
}: RequestOptions) {
  const url = new URL(endpoint, basePath);
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
