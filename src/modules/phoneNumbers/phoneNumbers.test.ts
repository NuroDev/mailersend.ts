import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listPhoneNumbers } from ".";

const { MAILERSEND_API_KEY } = process.env as Record<string, string>;

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
});
