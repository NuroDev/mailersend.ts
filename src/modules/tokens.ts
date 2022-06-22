import { fetch } from "~/util";

export interface CreateTokenParams extends Record<string, any> {
  domain_id: string;
  name: string;
  scopes: Array<
    | "email_full"
    | "domains_read"
    | "domains_full"
    | "activity_read"
    | "activity_full"
    | "analytics_read"
    | "analytics_full"
    | "tokens_full"
    | "webhooks_full"
    | "templates_full"
  >;
}

/**
 * Create Token
 *
 * @description Create an API token
 *
 * @see https://developers.mailersend.com/api/v1/tokens.html#create-a-token
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Create token options
 */
export async function createToken<TResponse = Response>(
  apiKey: string,
  options: CreateTokenParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/token",
    method: "POST",
    params: options,
  });
}

export interface UpdateTokenParams extends Record<string, any> {
  status: "pause" | "unpause";
  tokenId: string;
}

/**
 * Update Token
 *
 * @description Update an API token
 *
 * @see https://developers.mailersend.com/api/v1/tokens.html#update-a-token
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Update token options
 */
export async function updateToken<TResponse = Response>(
  apiKey: string,
  { tokenId, ...options }: UpdateTokenParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/token/${tokenId}/settings`,
    method: "PUT",
    params: options,
  });
}

/**
 * Delete Token
 *
 * @description Delete an API token
 *
 * @see https://developers.mailersend.com/api/v1/tokens.html#delete-a-token
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} tokenId - Unique token identifier
 */
export async function deleteToken<TResponse = Response>(
  apiKey: string,
  tokenId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/token/${tokenId}`,
    method: "DELETE",
  });
}
