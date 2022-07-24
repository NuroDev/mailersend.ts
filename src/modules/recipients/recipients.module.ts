import { fetch } from "~/fetch";

import type {
  AddToSuppressionListParams,
  AddToSuppressionListResponse,
  DeleteFromSuppressionListParams,
  DeleteFromSuppressionListResponse,
  DeleteRecipientResponse,
  ListRecipientsParams,
  ListRecipientsResponse,
  ListSuppressionsResponse,
  RecipientByIdResponse,
  SuppressionListParams,
} from ".";

/**
 * List Recipients
 *
 * @description Retrieve the email addresses of recipients
 *
 * @see https://developers.mailersend.com/api/v1/recipients.html#get-recipients
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - All recipients options
 */
export async function listRecipients<TResponse = ListRecipientsResponse>(
  apiKey: string,
  options: ListRecipientsParams = {}
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/recipients",
    json: true,
    method: "GET",
    params: options,
  });
}

/**
 * Recipient by ID
 *
 * @description Retrieve the information of a single recipient and its domain
 *
 * @see https://developers.mailersend.com/api/v1/recipients.html#get-a-single-recipient
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} recipientId - Unique recipient identifier
 */
export async function recipientById<TResponse = RecipientByIdResponse>(
  apiKey: string,
  recipientId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/recipients/${recipientId}`,
    json: true,
    method: "GET",
  });
}

/**
 * Delete Recipient
 *
 * @description Delete the information of a single recipient and its domain
 *
 * @see https://developers.mailersend.com/api/v1/recipients.html#delete-a-recipient
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} recipientId - Unique recipient identifier
 */
export async function deleteRecipient<TResponse = DeleteRecipientResponse>(
  apiKey: string,
  recipientId: string
): Promise<TResponse> {
  const response = await fetch({
    apiKey,
    endpoint: `/recipients/${recipientId}`,
    json: false,
    method: "DELETE",
  });

  return {
    success: response.ok,
  } as any as TResponse;
}

/**
 * List Suppressions
 *
 * @description Retrieve the recipients in a blocklist of an account or domain by passing the blocklist ID
 *
 * @see https://developers.mailersend.com/api/v1/recipients.html#get-recipients-from-a-suppression-list
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} [options] - Suppression list options
 */
export async function listSuppressions<TResponse = ListSuppressionsResponse>(
  apiKey: string,
  options: SuppressionListParams = {}
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/suppressions/blocklist",
    json: true,
    method: "GET",
    params: options,
  });
}

/**
 * Add To Suppression List
 *
 * @description Add a recipient to a blocklist
 *
 * @see https://developers.mailersend.com/api/v1/recipients.html#add-recipients-to-a-suppression-list
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Add to suppression list options
 */
export async function addToSuppressionList<
  TResponse = AddToSuppressionListResponse
>(apiKey: string, options: AddToSuppressionListParams): Promise<TResponse> {
  return fetch({
    apiKey,
    body: options,
    endpoint: "/suppressions/blocklist",
    json: true,
    method: "POST",
  });
}

/**
 * Delete From Suppression List
 *
 * @description Delete one or more blocklist entries
 *
 * @see https://developers.mailersend.com/api/v1/recipients.html#delete-recipients-from-a-suppression-list
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Delete from suppression list options
 */
export async function deleteFromSuppressionList<
  TResponse = DeleteFromSuppressionListResponse
>(
  apiKey: string,
  options: DeleteFromSuppressionListParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    body: options,
    endpoint: "/suppressions/blocklist",
    json: true,
    method: "DELETE",
  });
}
