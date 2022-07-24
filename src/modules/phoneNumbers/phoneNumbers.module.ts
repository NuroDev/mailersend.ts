import { fetch } from "~/fetch";

import type {
  ListPhoneNumbersParams,
  ListPhoneNumbersResponse,
  PhoneNumberByIdResponse,
  UpdatePhoneNumberParams,
  UpdatePhoneNumberResponse,
} from ".";

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
 * @param {Object} phoneNumberId - Unique SMS phone number identifier
 */
export async function phoneNumberById<TResponse = PhoneNumberByIdResponse>(
  apiKey: string,
  phoneNumberId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/sms-numbers/${phoneNumberId}`,
    json: true,
    method: "GET",
  });
}

/**
 * Update Phone Number
 *
 * @description Updates the data of a provided phone number using a provided phone number ID
 *
 * @see https://developers.mailersend.com/api/v1/sms-numbers.html#update-a-single-sms-phone-number
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Update phone number options
 */
export async function updatePhoneNumber<TResponse = UpdatePhoneNumberResponse>(
  apiKey: string,
  options: UpdatePhoneNumberParams
): Promise<TResponse> {
  const { phoneNumberId, ...params } = options;

  return fetch({
    apiKey,
    endpoint: `/sms-numbers/${phoneNumberId}`,
    json: true,
    method: "PUT",
    params,
  });
}
