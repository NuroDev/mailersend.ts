import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { sendSms } from ".";

const { MAILERSEND_API_KEY } = process.env as Record<string, string>;

describe("SMS", () => {
  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";
  });

  it.concurrent("Send SMS", async () => {
    // TODO: Requires SMS access in MailerSend which I currently do not have
    // try {
    //   const sendSmsResponse = await sendSms(MAILERSEND_API_KEY, {
    //     from: "+19191234567",
    //     to: ["+19191234567", "+19199876543"],
    //     text: "Hey {{name}}! This is just a friendly hello :D",
    //   });
    //
    //   expect(sendSmsResponse).toBeDefined();
    //   expect(sendSmsResponse.success).toBeTruthy();
    // } catch (error) {
    //   console.error(error);
    //   throw error;
    // }
  });
});
