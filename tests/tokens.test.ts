import { describe, it, expect } from "vitest";

import "dotenv/config";

import { Client, createToken, deleteToken } from "../dist";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env;

describe("Tokens", () => {
  const client = new Client({
    apiKey: MAILERSEND_API_KEY as string,
  });

  it.concurrent("Client - Create Token", async () => {
    try {
      const createTokenResponse = await client.createToken({
        domain_id: MAILERSEND_DOMAIN_ID as string,
        name: "TEST_API_TOKEN",
        scopes: [],
      });

      expect(createTokenResponse).not.toBeNull();
      expect(createTokenResponse.data).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function - Create Token", async () => {
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

  it.concurrent("Client - Delete Token", async () => {
    try {
      const { data: newToken } = await client.createToken({
        domain_id: MAILERSEND_DOMAIN_ID as string,
        name: "TEST_DELETE_TOKEN",
        scopes: [],
      });

      const deleteTokenResponse = await client.deleteToken(newToken.id);

      expect(deleteTokenResponse).not.toBeNull();
      expect(deleteTokenResponse.success).not.toBeNull();
    } catch (error) {
      console.error(error);
    }
  });

  it.concurrent("Function - Delete Token", async () => {
    try {
      const { data: newToken } = await createToken(
        MAILERSEND_API_KEY as string,
        {
          domain_id: MAILERSEND_DOMAIN_ID as string,
          name: "TEST_DELETE_TOKEN",
          scopes: [],
        }
      );

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
