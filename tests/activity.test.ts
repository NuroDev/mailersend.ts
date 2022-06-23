import { describe, it, expect } from "vitest";

import "dotenv/config";

import { Client, activityList } from "../dist";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env;

describe("Activity", () => {
  const client = new Client({
    apiKey: MAILERSEND_API_KEY as string,
  });

  it.concurrent("Client", async () => {
    try {
      const activityListResponse = await client.activityList({
        domainId: MAILERSEND_DOMAIN_ID as string,
      });

      expect(activityListResponse).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function", async () => {
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
