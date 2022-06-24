import { fetch } from "~/fetch";

import type {
  AddToSuppressionListParams,
  DeleteFromSuppressionListParams,
  ListRecipientsParams,
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
export async function listRecipients<TResponse = Response>(
  apiKey: string,
  options: ListRecipientsParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/recipients",
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
export async function recipientById<TResponse = Response>(
  apiKey: string,
  recipientId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/recipients/${recipientId}`,
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
export async function deleteRecipient<TResponse = Response>(
  apiKey: string,
  recipientId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/recipients/${recipientId}`,
    method: "DELETE",
  });
}

/**
 * Suppression List
 *
 * @description Retrieve the recipients in a blocklist of an account or domain by passing the blocklist ID
 *
 * @see https://developers.mailersend.com/api/v1/recipients.html#get-recipients-from-a-suppression-list
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Suppression list options
 */
export async function suppressionList<TResponse = Response>(
  apiKey: string,
  options: SuppressionListParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/suppressions/blocklist",
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
export async function addToSuppressionList<TResponse = Response>(
  apiKey: string,
  options: AddToSuppressionListParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    body: options,
    endpoint: "/suppressions/blocklist",
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
export async function deleteFromSuppressionList<TResponse = Response>(
  apiKey: string,
  options: DeleteFromSuppressionListParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/suppressions/blocklist",
    body: options,
    method: "DELETE",
  });
}
