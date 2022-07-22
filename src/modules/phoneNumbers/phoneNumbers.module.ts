import { fetch } from "~/fetch";

import type { ListSmsPhoneNumbersParams, ListSmsPhoneNumbersResponse } from ".";

/**
 * List SMS Phone Numbers
 *
 * @description Lists all SMS phone numbers associated with your account.
 *
 * @see https://developers.mailersend.com/api/v1/sms-numbers.html#get-a-list-of-sms-phone-numbers
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} [options] - List SMS phone number options
 */
export async function listSmsPhoneNumbers<
  TResponse = ListSmsPhoneNumbersResponse
>(apiKey: string, options: ListSmsPhoneNumbersParams = {}): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/sms-numbers",
    json: true,
    method: "GET",
    params: options,
  });
}
