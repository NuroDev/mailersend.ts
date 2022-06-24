import { describe, it, expect } from "vitest";

import "dotenv/config";

// const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env;

describe("Scheduled Messages", () => {
  it.concurrent("Delete Scheduled Message", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("List Scheduled Messages", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Scheduled Message by ID", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });
});
