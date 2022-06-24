import { describe, it, expect } from "vitest";

import "dotenv/config";

import {
  activityByCountry,
  activityByDate,
  activityByReadingEnvironment,
  activityByUserAgent,
} from ".";

const { MAILERSEND_API_KEY } = process.env;

const getCurrentUTC = (): number => Math.floor(new Date().getTime() / 1000);

describe("Analytics", () => {
  it.concurrent("Activity By Country", async () => {
    try {
      const activityByCountryResponse = await activityByCountry(
        MAILERSEND_API_KEY as string,
        {
          date_from: 0,
          date_to: getCurrentUTC(),
        }
      );

      expect(activityByCountryResponse).not.toBeNull();
      expect(activityByCountryResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Activity By Date", async () => {
    try {
      const activityByDateResponse = await activityByDate(
        MAILERSEND_API_KEY as string,
        {
          date_from: 0,
          date_to: getCurrentUTC(),
          event: [],
        }
      );

      expect(activityByDateResponse).not.toBeNull();
      expect(activityByDateResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Activity By Reading Environment", async () => {
    try {
      const activityByReadingEnvironmentResponse =
        await activityByReadingEnvironment(MAILERSEND_API_KEY as string, {
          date_from: 0,
          date_to: getCurrentUTC(),
        });

      expect(activityByReadingEnvironmentResponse).not.toBeNull();
      expect(activityByReadingEnvironmentResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Activity By User-Agent", async () => {
    try {
      const activityUserAgentResponse = await activityByUserAgent(
        MAILERSEND_API_KEY as string,
        {
          date_from: 0,
          date_to: getCurrentUTC(),
        }
      );

      expect(activityUserAgentResponse).not.toBeNull();
      expect(activityUserAgentResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });
});
