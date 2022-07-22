import { fetch } from "~/fetch";

import type { ListPhoneNumbersParams, ListPhoneNumbersResponse } from ".";

/**
 * List Phone Numbers
 *
 * @description Lists all SMS phone numbers associated with your account.
 *
 * @see https://developers.mailersend.com/api/v1/sms-numbers.html#get-a-list-of-sms-phone-numbers
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} [options] - List phone numbers options
 */
export async function listPhoneNumbers<TResponse = ListPhoneNumbersResponse>(
  apiKey: string,
  options: ListPhoneNumbersParams = {}
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/sms-numbers",
    json: true,
    method: "GET",
    params: options,
  });
}
