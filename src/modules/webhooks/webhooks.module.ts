import { fetch } from "~/fetch";

import type {
  CreateWebhookParams,
  ListWebhooksParams,
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
export async function listWebhooks<TResponse = Response>(
  apiKey: string,
  options: ListWebhooksParams
): Promise<TResponse> {
  return fetch({
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
  return fetch({
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
  options: CreateWebhookParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/webhooks/",
    method: "POST",
    params: options,
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
  { webhookId, ...options }: UpdateWebhookParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/webhooks/${webhookId}`,
    method: "PUT",
    params: options,
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
export async function deleteWebhook<TResponse = Response>(
  apiKey: string,
  webhookId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/webhooks/${webhookId}`,
    method: "DELETE",
  });
}
