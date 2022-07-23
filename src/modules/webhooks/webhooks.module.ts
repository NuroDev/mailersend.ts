import { fetch } from "~/fetch";

import type {
  CreateWebhookParams,
  CreateWebhookResponse,
  DeleteWebhookResponse,
  ListWebhooksParams,
  ListWebhooksResponse,
  UpdateWebhookParams,
  UpdateWebhookResponse,
  WebhookByIdResponse,
} from ".";

/**
 * List Webhooks
 *
 * @description Retrieve information about all webhooks associated with an account.
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
  return fetch({
    apiKey,
    endpoint: "/webhooks",
    json: true,
    method: "GET",
    params: options,
  });
}

/**
 * Webhook by ID
 *
 * @description Retrieve information about a single webhook
 *
 * @see https://developers.mailersend.com/api/v1/webhooks.html#get-a-webhook
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} webhookId - Unique webhook identifier
 */
export async function webhookById<TResponse = WebhookByIdResponse>(
  apiKey: string,
  webhookId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/webhooks/${webhookId}`,
    json: true,
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
export async function createWebhook<TResponse = CreateWebhookResponse>(
  apiKey: string,
  options: CreateWebhookParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    body: options,
    endpoint: "/webhooks/",
    json: true,
    method: "POST",
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
export async function updateWebhook<TResponse = UpdateWebhookResponse>(
  apiKey: string,
  options: UpdateWebhookParams
): Promise<TResponse> {
  const { enabled, webhookId, ...params } = options;

  return fetch({
    apiKey,
    body: params,
    endpoint: `/webhooks/${webhookId}`,
    json: true,
    method: "PUT",
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
export async function deleteWebhook<TResponse = DeleteWebhookResponse>(
  apiKey: string,
  webhookId: string
): Promise<TResponse> {
  const response = await fetch({
    apiKey,
    endpoint: `/webhooks/${webhookId}`,
    json: false,
    method: "DELETE",
  });

  return {
    success: response.ok,
  } as any as TResponse;
}
