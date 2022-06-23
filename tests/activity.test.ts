import { describe, it, expect } from "vitest";

import "dotenv/config";

import { Client } from "../dist";

describe("Activity", () => {
  it.concurrent("Client", async () => {
    const _client = new Client({
      apiKey: process.env.MAILERSEND_API_KEY,
    });

    expect(true).toEqual(true);
  });

  it.concurrent("Function", () => {
    expect(true).toEqual(true);
  });
});
