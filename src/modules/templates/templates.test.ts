import { beforeAll, describe, it, expect } from "vitest";

import "dotenv/config";

import { listTemplates, templateById } from ".";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID, MAILERSEND_TEMPLATE_ID } =
  process.env as Record<string, string>;

describe("Templates", () => {
  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";
  });

  it.concurrent("List Templates", async () => {
    if (!MAILERSEND_DOMAIN_ID)
      throw "No MailerSend domain ID found in environment variables";

    try {
      const listTemplatesResponse = await listTemplates(MAILERSEND_API_KEY, {
        domain_id: MAILERSEND_DOMAIN_ID,
      });

      expect(listTemplatesResponse).toBeDefined();
      expect(listTemplatesResponse.data).toBeDefined();
      expect(Array.isArray(listTemplatesResponse.data)).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it.concurrent("Template by ID", async () => {
    try {
      const templateByIdResponse = await templateById(
        MAILERSEND_API_KEY,
        MAILERSEND_TEMPLATE_ID
      );

      expect(templateByIdResponse).toBeDefined();
      expect(templateByIdResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
