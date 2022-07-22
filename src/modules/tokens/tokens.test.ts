import { beforeAll, describe, it, expect } from "vitest";

import "dotenv/config";

import { createToken, deleteToken } from ".";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env as Record<
  string,
  string
>;

describe("Tokens", () => {
  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";
  });

  it.concurrent("Create Token", async () => {
    try {
      const createTokenResponse = await createToken(MAILERSEND_API_KEY, {
        domain_id: MAILERSEND_DOMAIN_ID,
        name: "CREATE_TEST_API_TOKEN",
        scopes: ["activity_read", "analytics_read", "domains_read"],
      });

      expect(createTokenResponse).toBeDefined();
      expect(createTokenResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  // TODO: Add `updateToken` test

  it.concurrent("Delete Token", async () => {
    try {
      const newToken = await createToken(MAILERSEND_API_KEY, {
        domain_id: MAILERSEND_DOMAIN_ID,
        name: "DELETE_TEST_API_TOKEN",
        scopes: ["activity_read", "analytics_read", "domains_read"],
      });
      if (!newToken.data.id) throw "No new token ID found.";

      const deleteTokenResponse = await deleteToken(
        MAILERSEND_API_KEY,
        newToken.data.id
      );

      expect(deleteTokenResponse).toBeDefined();
      expect(deleteTokenResponse.success).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
