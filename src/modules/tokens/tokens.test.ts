import { describe, it, expect } from "vitest";

import "dotenv/config";

import { createToken, deleteToken } from ".";

const { MAILERSEND_API_KEY: apiKey, MAILERSEND_DOMAIN_ID: domain_id } =
  process.env as Record<string, string>;

describe("Tokens", () => {
  it.concurrent("Create Token", async () => {
    try {
      const createTokenResponse = await createToken(apiKey, {
        domain_id,
        name: "TEST_API_TOKEN",
        scopes: [],
      });

      expect(createTokenResponse).not.toBeNull();
      expect(createTokenResponse.data).not.toBeNull();
    } catch (error) {
      throw error;
    }
  });

  // TODO: Add test to update a token

  it.concurrent("Delete Token", async () => {
    try {
      const { data: newToken } = await createToken(apiKey, {
        domain_id,
        name: "TEST_DELETE_TOKEN",
        scopes: [],
      });

      if (!newToken?.id) throw "No new token ID found.";

      const deleteTokenResponse = await deleteToken(apiKey, newToken.id);

      expect(deleteTokenResponse).not.toBeNull();
      expect(deleteTokenResponse.success).not.toBeNull();
    } catch (error) {
      throw error;
    }
  });
});
