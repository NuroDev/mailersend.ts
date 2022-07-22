import { fetch } from "~/fetch";

import type {
  BulkEmailStatusResponse,
  SendBulkEmailsParams,
  SendBulkEmailsResponse,
  SendEmailParams,
  SendEmailResponse,
} from ".";

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
    json: true,
    method: "GET",
  });
}

/**
 * Send Email
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
export async function sendEmail<TResponse = SendEmailResponse>(
  apiKey: string,
  options: SendEmailParams
): Promise<TResponse> {
  const response = await fetch({
    apiKey,
    body: options,
    endpoint: "/email",
    json: false,
    method: "POST",
  });

  if (!response.status.toString().startsWith("20")) {
    const json = (await response.json()) as Record<string, any>;
    throw {
      success: false,
      ...json,
    };
  }

  return {
    success: true,
  } as any as TResponse;
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
export async function sendBulkEmails<TResponse = SendBulkEmailsResponse>(
  apiKey: string,
  options: Array<SendBulkEmailsParams>
): Promise<TResponse> {
  return fetch({
    apiKey,
    body: options,
    endpoint: "/bulk-email",
    json: true,
    method: "POST",
  });
}
