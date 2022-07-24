import { beforeAll, describe, it, expect } from "vitest";

import "dotenv/config";

import {
  deleteScheduledMessage,
  listScheduledMessages,
  scheduledMessageById,
} from ".";

const { MAILERSEND_API_KEY } = process.env as Record<string, string>;

describe("Scheduled Messages", () => {
  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";
  });

  // TODO: Find a way to create a new scheduled message to test deleting it
  it.concurrent("Delete Scheduled Message", async () => {
    // try {
    //   const deleteScheduledMessageResponse = await deleteScheduledMessage(
    //     MAILERSEND_API_KEY,
    //     "..."
    //   );
    //
    //   expect(deleteScheduledMessageResponse).not.toBeNull();
    //   expect(deleteScheduledMessageResponse.success).toBe(true);
    // } catch (error) {
    //   console.error(error);
    //   throw error;
    // }
  });

  it.concurrent("List Scheduled Messages", async () => {
    try {
      const listScheduledMessagesResponse = await listScheduledMessages(
        MAILERSEND_API_KEY
      );
      console.log(listScheduledMessagesResponse);

      expect(listScheduledMessagesResponse).not.toBeNull();
      expect(listScheduledMessagesResponse.data).not.toBeNull();
      expect(Array.isArray(listScheduledMessagesResponse.data)).toBe(true);
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  // TODO: Create message or find a way to dynamically create a message & retrieve its ID to use in the test
  it.concurrent("Scheduled Message by ID", async () => {
    // try {
    //   const scheduledMessageByIdResponse = await scheduledMessageById(
    //     MAILERSEND_API_KEY,
    //     "..."
    //   );
    //
    //   expect(scheduledMessageByIdResponse).not.toBeNull();
    //   expect(scheduledMessageByIdResponse.data).not.toBeNull();
    // } catch (error) {
    //   console.error(error);
    //   throw error;
    // }
  });
});
