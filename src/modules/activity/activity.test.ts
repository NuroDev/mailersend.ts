import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { activityList } from ".";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env as Record<
  string,
  string
>;

describe("Activity", () => {
  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";
  });

  it.concurrent("Activity List", async () => {
    if (!MAILERSEND_DOMAIN_ID)
      throw "No MailerSend domain ID found in environment variables";

    try {
      const activityListResponse = await activityList(MAILERSEND_API_KEY, {
        domainId: MAILERSEND_DOMAIN_ID,
      });

      console.log(activityListResponse);

      expect(activityListResponse).not.toBeNull();
      expect(activityListResponse.data).toBeDefined();
      expect(Array.isArray(activityListResponse.data)).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
