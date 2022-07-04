import { describe, it, expect } from "vitest";

import "dotenv/config";

import { deleteTemplate, listTemplates, templateById } from ".";

const { MAILERSEND_API_KEY: apiKey, MAILERSEND_TEMPLATE_ID: templateId } =
  process.env as Record<string, string>;

describe("Templates", () => {
  // TODO: Find a way to create a new template to test deleting it
  // it.concurrent("Delete Template", async () => {
  //   try {
  //     const deleteTemplateResponse = await deleteTemplate(
  //       apiKey,
  //       "yzkq340e3p2gd796"
  //     );

  //     expect(deleteTemplateResponse.success).toEqual(true);
  //   } catch ({ error }) {
  //     throw error;
  //   }
  // });

  it.concurrent("List Templates", async () => {
    try {
      const listTemplatesResponse = await listTemplates(apiKey);

      expect(listTemplatesResponse).not.toBeNull();
      expect(listTemplatesResponse.data).not.toBeNull();
    } catch ({ error }) {
      throw error;
    }
  });

  it.concurrent("Template by ID", async () => {
    try {
      const templateByIDResponse = await templateById(apiKey, templateId);

      expect(templateByIDResponse).not.toBeNull();
      expect(templateByIDResponse.data).not.toBeNull();
    } catch ({ error }) {
      throw error;
    }
  });
});
