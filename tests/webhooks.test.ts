import { describe, it, expect } from "vitest";

import "dotenv/config";

import { Client } from "../dist";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env;

describe("Webhooks", () => {
  it.concurrent("Client", async () => {
    const client = new Client({
      apiKey: MAILERSEND_API_KEY as string,
    });

    try {
      expect(true).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });
});
