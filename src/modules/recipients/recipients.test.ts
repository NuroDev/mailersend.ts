import { beforeAll, describe, it, expect } from "vitest";

import "dotenv/config";

import {
  addToSuppressionList,
  deleteFromSuppressionList,
  deleteRecipient,
  listRecipients,
  listSuppressions,
  recipientById,
} from "./recipients.module";

const {
  MAILERSEND_API_KEY,
  MAILERSEND_DOMAIN_ID,
  MAILERSEND_TEST_RECIPIENT_EMAIL,
  MAILERSEND_TEST_RECIPIENT_ID,
} = process.env as Record<string, string>;

describe("Recipients", () => {
  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";
  });

  it.concurrent("Add to Suppression List", async () => {
    if (!MAILERSEND_DOMAIN_ID)
      throw "No MailerSend domain ID found in environment variables";

    if (!MAILERSEND_TEST_RECIPIENT_EMAIL)
      throw "No MailerSend test recipient email found in environment variables";

    try {
      const addToSuppressionListResponse = await addToSuppressionList(
        MAILERSEND_API_KEY,
        {
          domain_id: MAILERSEND_DOMAIN_ID,
          patterns: [],
          recipients: [MAILERSEND_TEST_RECIPIENT_EMAIL],
        }
      );

      expect(addToSuppressionListResponse).toBeDefined();
      expect(addToSuppressionListResponse.data).toBeDefined();
      expect(Array.isArray(addToSuppressionListResponse.data)).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it.concurrent("Delete from Suppression List", async () => {
    try {
      const deleteFromSuppressionListResponse = await deleteFromSuppressionList(
        MAILERSEND_API_KEY,
        {
          all: true,
        }
      );

      expect(deleteFromSuppressionListResponse).toBeDefined();
      expect(Array.isArray(deleteFromSuppressionListResponse)).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it.concurrent("List Recipients", async () => {
    try {
      const listRecipientsResponse = await listRecipients(MAILERSEND_API_KEY);

      expect(listRecipientsResponse).toBeDefined();
      expect(listRecipientsResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it.concurrent("Recipient by ID", async () => {
    if (!MAILERSEND_TEST_RECIPIENT_ID)
      throw "No MailerSend test recipient ID found in environment variables";

    try {
      const recipientByIdResponse = await recipientById(
        MAILERSEND_API_KEY,
        MAILERSEND_TEST_RECIPIENT_ID
      );

      expect(recipientByIdResponse).toBeDefined();
      expect(recipientByIdResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it.concurrent("Suppression List", async () => {
    try {
      const suppressionListResponse = await listSuppressions(
        MAILERSEND_API_KEY
      );

      expect(suppressionListResponse).toBeDefined();
      expect(suppressionListResponse.data).toBeDefined();
      expect(Array.isArray(suppressionListResponse.data)).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it.concurrent("Delete Recipient", async () => {
    if (!MAILERSEND_TEST_RECIPIENT_ID)
      throw "No MailerSend test recipient ID found in environment variables";

    try {
      const deleteRecipientResponse = await deleteRecipient(
        MAILERSEND_API_KEY,
        MAILERSEND_TEST_RECIPIENT_ID
      );

      expect(deleteRecipientResponse).toBeDefined();
      expect(deleteRecipientResponse.success).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
