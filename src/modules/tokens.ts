import { fetch } from "~/fetch";

import type {
  CreateTokenParams,
  CreateTokenResponse,
  DeleteTokenResponse,
  UpdateTokenParams,
  UpdateTokenResponse,
} from "~/types/modules";

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
