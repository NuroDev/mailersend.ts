import { fetch } from "~/fetch";

import type {
  ListMessagesParams,
  ListMessagesResponse,
  ListSmsMessagesParams,
  ListSmsMessagesResponse,
  MessageByIdResponse,
  SmsMessageByIdResponse,
} from ".";

/**
 * List Messages
 *
 * @description Retrieve a information about all messages
 *
 * @see https://developers.mailersend.com/api/v1/messages.html#get-a-list-of-messages
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} [options] - List messages options
 */
export async function listMessages<TResponse = ListMessagesResponse>(
  apiKey: string,
  options: ListMessagesParams = {}
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/messages",
    json: true,
    method: "GET",
    params: options,
  });
}

/**
 * List SMS Messages
 *
 * @description Retrieve a information about all SMS messages
 *
 * @see https://developers.mailersend.com/api/v1/sms-messages.html#get-a-list-of-sms-messages
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} [options] - List SMS messages options
 */
export async function listSmsMessages<TResponse = ListSmsMessagesResponse>(
  apiKey: string,
  options: ListSmsMessagesParams = {}
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/sms-messages",
    json: true,
    method: "GET",
    params: options,
  });
}

/**
 * Message by ID
 *
 * @description Retrieve information for a single message
 *
 * @see https://developers.mailersend.com/api/v1/messages.html#get-information-for-a-single-message
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} messageId - Unique message identifier
 */
export async function messageById<TResponse = MessageByIdResponse>(
  apiKey: string,
  messageId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/messages/${messageId}`,
    json: true,
    method: "GET",
  });
}

/**
 * SMS Message by ID
 *
 * @description Retrieve SMS message information for a provided SMS message ID
 *
 * @see https://developers.mailersend.com/api/v1/sms-messages.html#get-an-sms-message
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} smsMessageId - Unique message identifier
 */
export async function smsMessageById<TResponse = SmsMessageByIdResponse>(
  apiKey: string,
  smsMessageId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/sms-messages/${smsMessageId}`,
    json: true,
    method: "GET",
  });
}
