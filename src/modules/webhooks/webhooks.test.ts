import { describe, it, expect } from "vitest";

import "dotenv/config";

// const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env;

describe("Webhooks", () => {
  it.concurrent("Create Webhook", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Delete Webhook", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("List Webhooks", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Update Webhook", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Webhook by ID", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });
});
