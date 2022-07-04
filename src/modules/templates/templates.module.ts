import { fetch2 } from "~/fetch";

import type {
  DeleteTemplateResponse,
  ListTemplatesParams,
  ListTemplatesRespose,
  TemplateByIdResponse,
} from ".";

/**
 * List Templates
 *
 * @description Retrieve the account templates
 *
 * @see https://developers.mailersend.com/api/v1/templates.html#get-templates
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Additional request parameters
 */
export async function listTemplates(
  apiKey: string,
  options: ListTemplatesParams = {}
): Promise<ListTemplatesRespose> {
  const response = await fetch2({
    apiKey,
    endpoint: "/templates",
    method: "GET",
    params: options,
  });

  return (await response.json()) as ListTemplatesRespose;
}

/**
 * Delete Template
 *
 * @description Delete a template
 *
 * @see https://developers.mailersend.com/api/v1/templates.html#delete-a-template
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} templateId - Unique template identifier
 */
export async function deleteTemplate(
  apiKey: string,
  templateId: string
): Promise<DeleteTemplateResponse> {
  const response = await fetch2({
    apiKey,
    endpoint: `/templates/${templateId}`,
    method: "DELETE",
  });

  return {
    success: response.ok,
  };
}

/**
 * Template by ID
 *
 * @description Retrieve the information of a single template, its category, domain, and stats
 *
 * @see https://developers.mailersend.com/api/v1/templates.html#get-a-single-template
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} templateId - Unique template identifier
 */
export async function templateById(
  apiKey: string,
  templateId: string
): Promise<TemplateByIdResponse> {
  const response = await fetch2({
    apiKey,
    endpoint: `/templates/${templateId}`,
    method: "GET",
  });

  return (await response.json()) as TemplateByIdResponse;
}
