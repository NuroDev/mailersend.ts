import { describe, it, expect } from "vitest";

import "dotenv/config";

import { createToken, deleteToken } from ".";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env;

describe("Tokens", () => {
  it.concurrent("Create Token", async () => {
    try {
      const createTokenResponse = await createToken(
        MAILERSEND_API_KEY as string,
        {
          domain_id: MAILERSEND_DOMAIN_ID as string,
          name: "TEST_API_TOKEN",
          scopes: [],
        }
      );

      expect(createTokenResponse).not.toBeNull();
      expect(createTokenResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Delete Token", async () => {
    try {
      const { data: newToken } = await createToken(
        MAILERSEND_API_KEY as string,
        {
          domain_id: MAILERSEND_DOMAIN_ID as string,
          name: "TEST_DELETE_TOKEN",
          scopes: [],
        }
      );

      if (!newToken?.id) throw "No new token ID found.";

      const deleteTokenResponse = await deleteToken(
        MAILERSEND_API_KEY as string,
        newToken.id
      );

      expect(deleteTokenResponse).not.toBeNull();
      expect(deleteTokenResponse.success).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });
});
