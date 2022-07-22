import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listPhoneNumbers, phoneNumberById } from ".";

const { MAILERSEND_API_KEY, MAILERSEND_SMS_PHONE_ID } = process.env as Record<
  string,
  string
>;

describe("Phone Numbers", () => {
  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";
  });

  it.concurrent("Send SMS", async () => {
    try {
      const listPhoneNumbersResponse = await listPhoneNumbers(
        MAILERSEND_API_KEY
      );

      expect(listPhoneNumbersResponse).toBeDefined();
      expect(listPhoneNumbersResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it.concurrent("Phone Number by ID", async () => {
    // TODO: Requires SMS access in MailerSend which I currently do not have
    // if (!MAILERSEND_SMS_PHONE_ID)
    //   throw "No SMS phone ID found in environment variables";
    //
    // try {
    //   const phoneNumberByIdResponse = await phoneNumberById(
    //     MAILERSEND_API_KEY,
    //     MAILERSEND_SMS_PHONE_ID
    //   );
    //
    //   expect(phoneNumberByIdResponse).toBeDefined();
    //   expect(phoneNumberByIdResponse.data).toBeDefined();
    // } catch (error) {
    //   console.error(error);
    //   throw error;
    // }
  });
});
