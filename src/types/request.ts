export type HttpMethod =
  | "CONNECT"
  | "DELETE"
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "PATCH"
  | "POST"
  | "PUT"
  | "TRACE";

export interface BaseReponse<TData = Record<string, any>> {
  data: TData;
}

export interface RequestOptions {
  apiKey: string;
  apiVersion?: string;
  basePath?: string;
  body?: string | Record<string, any>;
  endpoint: string;
  headers?: Record<string, string>;
  method?: HttpMethod;
  params?: Record<string, string>;
}
