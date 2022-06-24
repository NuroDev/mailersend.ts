import { describe, it, expect } from "vitest";

import "dotenv/config";

// const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env;

describe("Messages", () => {
  it.concurrent("List Messages", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Message Info by ID", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });
});
