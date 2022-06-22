import { fetch } from "~/util";

import type { ScheduleStatus } from "~/types";

export interface ListScheduledMessagesParams extends Record<string, any> {
  domain_id?: string;
  /**
   * Min: 10
   *
   * Max: 100
   *
   * @default 25
   */
  limit?: number;
  page?: number;
  status?: ScheduleStatus;
}

/**
 * List Scheduled Messages
 *
 * @description Get information on scheduled messages, such as subject, time of creation, and time of sending
 *
 * @see https://developers.mailersend.com/api/v1/message-schedules.html#get-list-of-scheduled-messages
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Additional request options
 */
export async function listScheduledMessages<TResponse = Response>(
  apiKey: string,
  options: ListScheduledMessagesParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/message-schedules",
    method: "GET",
    params: options,
  });
}

/**
 * Single Scheduled Message
 *
 * @description Get information about a specific scheduled message, like its subject, creation date, sending date and domain
 *
 * @see https://developers.mailersend.com/api/v1/message-schedules.html#get-a-single-scheduled-message
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} messageId - Message ID from the Send an email's response headers or Get scheduled messages response.
 */
export async function singleScheduledMessage<TResponse = Response>(
  apiKey: string,
  messageId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/message-schedules/${messageId}`,
    method: "GET",
  });
}

/**
 * Delete Scheduled Message
 *
 * @description Delete a scheduled message
 *
 * @see https://developers.mailersend.com/api/v1/message-schedules.html#delete-a-scheduled-message
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} messageId - Message ID from the Send an email's response headers or Get scheduled messages response.
 */
export async function deleteScheduledMessage<TResponse = Response>(
  apiKey: string,
  messageId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/message-schedules/${messageId}`,
    method: "DELETE",
  });
}
