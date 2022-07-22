import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import {
  activityByCountry,
  activityByDate,
  activityByReadingEnvironment,
  activityByUserAgent,
} from ".";

const { MAILERSEND_API_KEY } = process.env as Record<string, string>;

const getCurrentUTC = (): number => Math.floor(new Date().getTime() / 1000);

describe("Analytics", () => {
  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";
  });

  it.concurrent("Activity By Country", async () => {
    try {
      const activityByCountryResponse = await activityByCountry(
        MAILERSEND_API_KEY,
        {
          date_from: getCurrentUTC() - 200,
          date_to: getCurrentUTC(),
        }
      );

      expect(activityByCountryResponse).not.toBeNull();
      expect(activityByCountryResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it.concurrent("Activity By Date", async () => {
    try {
      const activityByDateResponse = await activityByDate(MAILERSEND_API_KEY, {
        date_from: getCurrentUTC() - 200,
        date_to: getCurrentUTC(),
        event: [
          "clicked",
          "delivered",
          "hard_bounced",
          "junk",
          "opened",
          "processed",
          "queued",
          "sent",
          "soft_bounced",
          "spam_complaints",
          "unsubscribed",
        ],
      });

      expect(activityByDateResponse).not.toBeNull();
      expect(activityByDateResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it.concurrent("Activity By Reading Environment", async () => {
    try {
      const activityByReadingEnvironmentResponse =
        await activityByReadingEnvironment(MAILERSEND_API_KEY, {
          date_from: getCurrentUTC() - 200,
          date_to: getCurrentUTC(),
        });

      expect(activityByReadingEnvironmentResponse).not.toBeNull();
      expect(activityByReadingEnvironmentResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it.concurrent("Activity By User-Agent", async () => {
    try {
      const activityUserAgentResponse = await activityByUserAgent(
        MAILERSEND_API_KEY,
        {
          date_from: getCurrentUTC() - 200,
          date_to: getCurrentUTC(),
        }
      );

      expect(activityUserAgentResponse).not.toBeNull();
      expect(activityUserAgentResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
