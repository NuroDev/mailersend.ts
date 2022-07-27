import { fetch } from "~/fetch";

import type {
  ListTemplatesParams,
  ListTemplatesResponse,
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
 * @param {Object} [options] - Additional request parameters
 */
export async function listTemplates<TResponse = ListTemplatesResponse>(
  apiKey: string,
  options: ListTemplatesParams = {}
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/templates",
    json: true,
    method: "GET",
    params: options,
  });
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
export async function templateById<TResponse = TemplateByIdResponse>(
  apiKey: string,
  templateId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/templates/${templateId}`,
    json: true,
    method: "GET",
  });
}
