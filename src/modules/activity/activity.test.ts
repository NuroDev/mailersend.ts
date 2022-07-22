import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { listActivity } from ".";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env as Record<
  string,
  string
>;

describe("Activity", () => {
  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";
  });

  it.concurrent("List Activity", async () => {
    if (!MAILERSEND_DOMAIN_ID)
      throw "No MailerSend domain ID found in environment variables";

    try {
      const listActivityResponse = await listActivity(MAILERSEND_API_KEY, {
        domainId: MAILERSEND_DOMAIN_ID,
      });

      expect(listActivityResponse).not.toBeNull();
      expect(listActivityResponse.data).toBeDefined();
      expect(Array.isArray(listActivityResponse.data)).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
