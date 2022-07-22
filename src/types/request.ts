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

export interface BaseResponse<TData = Record<string, any>> {
  data: TData;
}

export interface RequestOptions<TJson extends boolean = false> {
  apiKey: string;
  apiVersion?: string;
  basePath?: string;
  body?: string | Record<string, any>;
  endpoint: string;
  headers?: Record<string, string>;
  json: TJson;
  method?: HttpMethod;
  params?: Record<string, string | number>;
}
