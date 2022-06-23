import { fetch } from "~/util";

import type { EmailParams } from "~/types";

export interface BulkEmailStatusResponse {
  created_at: string;
  id: string;
  messages_id: string;
  state: string;
  suppressed_recipients_count: number;
  suppressed_recipients: unknown;
  total_recipients_count: number;
  updated_at: string;
  validation_errors_count: number;
  validation_errors: unknown;
}

/**
 * Bulk Email Status
 *
 * @description Get the bulk email information like validation errors, failed emails and more.
 *
 * @see https://developers.mailersend.com/api/v1/email.html#get-bulk-email-status
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} bulkEmailId - Unique bulk email identifier
 */
export async function bulkEmailStatus<TResponse = BulkEmailStatusResponse>(
  apiKey: string,
  bulkEmailId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/bulk-email/${bulkEmailId}`,
    method: "GET",
  });
}

export interface SendParams extends EmailParams, Record<string, any> {}

export interface SendResponse {
  errors?: Record<string, Array<string>>;
  message?: string;
  warnings?: Array<{
    type: string;
    warning: string;
    recipients: Array<{
      email: string;
      name: string;
      reasons: Array<string>;
    }>;
  }>;
}

/**
 * Send
 *
 * @description This endpoint allows you to send an asynchronous email.
 *
 * It returns the status of the email sent with an X-Message-Id that can be used to continuously query for the status using the Email API.
 *
 * @see https://developers.mailersend.com/api/v1/email.html#send-an-email
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Send options
 */
export async function send<TResponse = SendResponse>(
  apiKey: string,
  options: SendParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/email",
    method: "POST",
    params: options,
  });
}

export interface SendBulkParams extends EmailParams, Record<string, any> {}

export interface SendBulkResponse {
  bulk_email_id: string;
  message: string;
}

/**
 * Send Bulk
 *
 * @description This endpoint allows you to send multiple asynchronous emails.
 *
 * It returns the status of the request sent with a `bulk_email_id` that can be used to continuously query for the status using the Email API.
 *
 * To prevent long waiting periods for a response, each email validation is done after the request and then the result is stored.
 *
 * If there is any validation error, you can query it using the `bulk_email_id` provided.
 *
 * @see https://developers.mailersend.com/api/v1/email.html#send-bulk-emails
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Send bulk options
 */
export async function sendBulk<TResponse = SendBulkResponse>(
  apiKey: string,
  options: Array<SendBulkParams>
): Promise<TResponse> {
  return fetch({
    apiKey,
    body: options,
    endpoint: "/bulk-email",
    method: "POST",
  });
}
