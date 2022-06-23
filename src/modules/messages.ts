import { fetch } from "~/util";

export interface ListMessagesParams extends Record<string, any> {
  page?: number;
  /**
   * Min: 10
   *
   * Max: 100
   *
   * @default 25
   */
  limit?: number;
}

/**
 * List Messages
 *
 * @description Retrieve a information about all messages
 *
 * @see https://developers.mailersend.com/api/v1/messages.html#get-a-list-of-messages
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - List messages options
 */
export async function listMessages<TResponse = Response>(
  apiKey: string,
  options: ListMessagesParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/messages",
    method: "GET",
    params: options,
  });
}

/**
 * Message Info by ID
 *
 * @description Retrieve information for a single message
 *
 * @see https://developers.mailersend.com/api/v1/messages.html#get-information-for-a-single-message
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} messageId - Unique message identifier
 */
export async function messageInfoById<TResponse = Response>(
  apiKey: string,
  messageId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/messages/${messageId}`,
    method: "GET",
  });
}
