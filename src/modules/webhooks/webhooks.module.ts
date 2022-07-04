import { fetch2, fetchJson } from "~/fetch";

import type {
  CreateWebhookParams,
  DeleteWebhookResponse,
  ListWebhooksParams,
  ListWebhooksResponse,
  UpdateWebhookParams,
} from ".";

/**
 * List Webhooks
 *
 * @description If you want to retrieve information about webhooks
 *
 * @see https://developers.mailersend.com/api/v1/webhooks.html#list-webhooks
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - List webhook options
 */
export async function listWebhooks<TResponse = ListWebhooksResponse>(
  apiKey: string,
  options: ListWebhooksParams
): Promise<TResponse> {
  return fetchJson({
    apiKey,
    endpoint: "/webhooks",
    method: "GET",
    params: options,
  });
}

/**
 * Webhook by ID
 *
 * @description To retrieve information about a single webhook
 *
 * @see https://developers.mailersend.com/api/v1/webhooks.html#get-a-webhook
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} webhookId - Unique webhook identifier
 */
export async function webhookById<TResponse = Response>(
  apiKey: string,
  webhookId: string
): Promise<TResponse> {
  return fetchJson({
    apiKey,
    endpoint: `/webhooks/${webhookId}`,
    method: "GET",
  });
}

/**
 * Create Webhook
 *
 * @description Create a new webhook
 *
 * @see https://developers.mailersend.com/api/v1/webhooks.html#create-a-webhook
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Create webhook options
 */
export async function createWebhook<TResponse = Response>(
  apiKey: string,
  params: CreateWebhookParams
): Promise<TResponse> {
  return fetchJson({
    apiKey,
    endpoint: "/webhooks/",
    method: "POST",
    params,
  });
}

/**
 * Update Webhook
 *
 * @description Update a webhook
 *
 * @see https://developers.mailersend.com/api/v1/webhooks.html#update-a-webhook
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Update webhook options
 */
export async function updateWebhook<TResponse = Response>(
  apiKey: string,
  { webhookId, ...params }: UpdateWebhookParams
): Promise<TResponse> {
  return fetchJson({
    apiKey,
    endpoint: `/webhooks/${webhookId}`,
    method: "PUT",
    params,
  });
}

/**
 * Delete Webhook
 *
 * @description Delete a webhook
 *
 * @see https://developers.mailersend.com/api/v1/webhooks.html#delete-a-webhook
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} webhookId - Unique webhook identifier
 */
export async function deleteWebhook(
  apiKey: string,
  webhookId: string
): Promise<DeleteWebhookResponse> {
  const response = await fetch2({
    apiKey,
    endpoint: `/webhooks/${webhookId}`,
    method: "DELETE",
  });

  return {
    success: response.ok,
  };
}
