import { describe, it, expect } from "vitest";

import "dotenv/config";

import { bulkEmailStatus } from ".";

const { MAILERSEND_API_KEY, MAILERSEND_BULK_EMAIL_ID } = process.env;

describe("Email", () => {
  it.concurrent("Bulk Email Status", async () => {
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
