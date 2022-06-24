import { describe, it, expect } from "vitest";

import "dotenv/config";

import { activityList } from ".";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env;

describe("Activity", () => {
  it.concurrent("Activity List", async () => {
    try {
      const activityListResponse = await activityList(
        MAILERSEND_API_KEY as string,
        {
          domainId: MAILERSEND_DOMAIN_ID as string,
        }
      );

      expect(activityListResponse).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });
});
