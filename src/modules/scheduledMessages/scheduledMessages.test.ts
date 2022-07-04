import { describe, it, expect } from "vitest";

import "dotenv/config";

import {
  deleteScheduledMessage,
  listScheduledMessages,
  scheduledMessageById,
} from ".";

const { MAILERSEND_API_KEY: apiKey, MAILERSEND_DOMAIN_ID: domain_id } =
  process.env as Record<string, string>;

describe("Scheduled Messages", () => {
  // TODO: Find a way to create a new scheduled message to test deleting it
  // it.concurrent("Delete Scheduled Message", async () => {
  //   try {
  //     const deleteScheduledMessageResponse = await deleteScheduledMessage(
  //       apiKey,
  //       "..."
  //     );

  //     expect(deleteScheduledMessageResponse).not.toBeNull();
  //     expect(deleteScheduledMessageResponse.success).toBe(true);
  //   } catch (error) {
  //     throw error;
  //   }
  // });

  it.concurrent("List Scheduled Messages", async () => {
    try {
      const listScheduledMessagesResponse = await listScheduledMessages(apiKey);

      expect(listScheduledMessagesResponse).not.toBeNull();
      expect(listScheduledMessagesResponse.data).not.toBeNull();
      expect(Array.isArray(listScheduledMessagesResponse.data)).toBe(true);
    } catch (error) {
      throw error;
    }
  });

  // TODO: Create message or find a way to dynamically create a message & retrieve its ID to use in the test
  // it.concurrent("Scheduled Message by ID", async () => {
  //   try {
  //     const scheduledMessageByIdResponse = await scheduledMessageById(
  //       apiKey,
  //       "..."
  //     );

  //     expect(scheduledMessageByIdResponse).not.toBeNull();
  //     expect(scheduledMessageByIdResponse.data).not.toBeNull();
  //   } catch (error) {
  //     throw error;
  //   }
  // });
});
