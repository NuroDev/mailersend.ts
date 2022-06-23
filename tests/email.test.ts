import { describe, it, expect } from "vitest";

import "dotenv/config";

import { bulkEmailStatus, Client } from "../dist";

const { MAILERSEND_API_KEY, MAILERSEND_BULK_EMAIL_ID } = process.env;

describe("Email", () => {
  const client = new Client({
    apiKey: MAILERSEND_API_KEY as string,
  });

  it.concurrent("Client - Bulk Email Status", async () => {
    try {
      const bulkEmailResponse = await client.bulkEmailStatus(
        MAILERSEND_BULK_EMAIL_ID as string
      );

      expect(bulkEmailResponse).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function - Bulk Email Status", async () => {
    try {
      const bulkEmailResponse = await bulkEmailStatus(
        MAILERSEND_API_KEY as string,
        MAILERSEND_BULK_EMAIL_ID as string
      );

      expect(bulkEmailResponse).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });
});
