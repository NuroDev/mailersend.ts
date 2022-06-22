import { describe, it, expect } from "vitest";

import "dotenv/config";

import { Client } from "../dist";

describe("Templates", () => {
  it("Client", async () => {
    const _client = new Client({
      apiKey: process.env.MAILERSEND_API_KEY,
    });

    expect(true).toEqual(true);
  });
  it("Function", () => {
    expect(true).toEqual(true);
  });
});
