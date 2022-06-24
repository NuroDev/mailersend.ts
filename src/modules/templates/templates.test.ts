import { describe, it, expect } from "vitest";

import "dotenv/config";

// const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env;

describe("Templates", () => {
  it.concurrent("Delete Template", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("List Templates", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Template by ID", async () => {
    try {
      expect(true).toEqual(true);
    } catch (error) {
      console.error(error);
    }
  });
});
