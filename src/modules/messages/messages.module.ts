import { fetch } from "~/fetch";

import type {
  ListMessagesParams,
  ListMessagesResponse,
  MessageByIdResponse,
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
  options: ListMessagesParams = {
    limit: 25,
  }
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
