import { beforeAll, describe, it, expect } from "vitest";

import "dotenv/config";

import { listMessages, messageInfoById } from ".";

const { MAILERSEND_API_KEY, MAILERSEND_MESSAGE_ID } = process.env as Record<
  string,
  string
>;

describe("Messages", () => {
  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";
  });

  it.concurrent("List Messages", async () => {
    try {
      const listMessagesResponse = await listMessages(MAILERSEND_API_KEY);

      expect(listMessagesResponse).not.toBeNull();
      expect(listMessagesResponse.data).toBeDefined();
      expect(Array.isArray(listMessagesResponse.data)).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it.concurrent("Message Info by ID", async () => {
    if (!MAILERSEND_MESSAGE_ID)
      throw "No MailerSend message ID found in environment variables";

    try {
      const messageInfoByIdResponse = await messageInfoById(
        MAILERSEND_API_KEY,
        MAILERSEND_MESSAGE_ID
      );

      expect(messageInfoByIdResponse).not.toBeNull();
      expect(messageInfoByIdResponse.data).toBeDefined();
      expect(Array.isArray(messageInfoByIdResponse.data)).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
