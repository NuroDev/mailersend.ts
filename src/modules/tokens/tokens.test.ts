import { beforeAll, describe, it, expect } from "vitest";

import "dotenv/config";

import { createToken, deleteToken, updateToken } from ".";

import type { Token } from ".";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env as Record<
  string,
  string
>;

describe("Tokens", () => {
  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";
  });

  let newToken: Token;

  it("Create Token", async () => {
    try {
      const createTokenResponse = await createToken(MAILERSEND_API_KEY, {
        domain_id: MAILERSEND_DOMAIN_ID,
        name: "CREATE_TEST_API_TOKEN",
        scopes: ["activity_read", "analytics_read", "domains_read"],
      });

      expect(createTokenResponse).toBeDefined();
      expect(createTokenResponse.data).toBeDefined();

      newToken = createTokenResponse.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it("Update Token", async () => {
    if (!newToken) throw "No token found to delete";

    try {
      const updateTokenResponse = await updateToken(MAILERSEND_API_KEY, {
        tokenId: newToken.id,
        status: "pause",
      });

      expect(updateTokenResponse).toBeDefined();
      expect(updateTokenResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it("Delete Token", async () => {
    if (!newToken) throw "No token found to delete";

    try {
      const deleteTokenResponse = await deleteToken(
        MAILERSEND_API_KEY,
        newToken.id
      );

      expect(deleteTokenResponse).toBeDefined();
      expect(deleteTokenResponse.success).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
