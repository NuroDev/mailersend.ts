import { fetch } from "~/fetch";

import type {
  ListActivityParams,
  ListActivityResponse,
  ListSmsActivityParams,
  ListSmsActivityResponse,
} from ".";

/**
 * List Activity
 *
 * @description Get information about your domain activity, including your sent emails and whether they were received by the recipient.
 *
 * You can also see whether they opened or clicked on any of the email content.
 *
 * @see https://developers.mailersend.com/api/v1/activity.html#get-a-list-of-activities
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Activity list options
 */
export async function listActivity<TResponse = ListActivityResponse>(
  apiKey: string,
  options: ListActivityParams
): Promise<TResponse> {
  const { domainId, ...params } = options;
  return fetch({
    apiKey,
    endpoint: `/activity/${domainId}`,
    json: true,
    method: "GET",
    params,
  });
}

/**
 * List SMS Activity
 *
 * @description Get information about your SMS activity.
 *
 * @see https://developers.mailersend.com/api/v1/sms-activity.html#get-a-list-of-activities
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Activity list options
 */
export async function listSmsActivity<TResponse = ListSmsActivityResponse>(
  apiKey: string,
  options: ListSmsActivityParams = {}
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/sms-activity",
    json: true,
    method: "GET",
    params: options,
  });
}
