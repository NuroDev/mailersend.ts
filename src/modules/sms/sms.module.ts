import { fetch } from "~/fetch";

import type { SendSmsParams, SendSmsResponse } from ".";

/**
 * Send SMS
 *
 * @description Send an SMS text message to a provided user
 *
 * @see https://developers.mailersend.com/api/v1/sms.html#send-an-sms
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - SMS options
 */
export async function sendSms<TResponse = SendSmsResponse>(
  apiKey: string,
  options: SendSmsParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    body: options,
    endpoint: "/sms",
    json: true,
    method: "POST",
  });
}
