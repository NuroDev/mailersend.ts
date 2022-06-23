import { fetch } from "~/fetch";

import type { BaseReponse } from "~/types";

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

export interface CreateTokenData {
  accessToken: string;
  created_at: string;
  id: string;
  name: string;
}

export type CreateTokenResponse = BaseReponse<CreateTokenData>;

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
export async function createToken<TResponse = CreateTokenResponse>(
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

export interface UpdateTokenData {
  created_at: string;
  id: string;
  name: string;
  status: string;
}

export type UpdateTokenResponse = BaseReponse<UpdateTokenData>;

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
export async function updateToken<TResponse = UpdateTokenResponse>(
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

export interface DeleteTokenResponse {
  success: boolean;
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
export async function deleteToken<TResponse = DeleteTokenResponse>(
  apiKey: string,
  tokenId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/token/${tokenId}`,
    method: "DELETE",
  });
}
