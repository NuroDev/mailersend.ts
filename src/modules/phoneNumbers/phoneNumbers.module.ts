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

/**
 * Get Phone Number by ID
 *
 * @description Retrieve information about a single provided SMS phone number
 *
 * @see https://developers.mailersend.com/api/v1/sms-numbers.html#get-an-sms-phone-number
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} smsNumberId - Unique SMS phone number identifier
 */
export async function phoneNumberById<TResponse = ListPhoneNumbersResponse>(
  apiKey: string,
  smsNumberId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/sms-numbers/${smsNumberId}`,
    json: true,
    method: "GET",
  });
}
