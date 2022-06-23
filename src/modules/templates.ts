import { fetch } from "~/fetch";

import type { ListTemplatesParams } from "~/types/modules";

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
export async function listTemplates<TResponse = Response>(
  apiKey: string,
  options: ListTemplatesParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/templates",
    method: "GET",
    params: options,
  });
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
export async function deleteTemplate<TResponse = Response>(
  apiKey: string,
  templateId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/templates/${templateId}`,
    method: "DELETE",
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
export async function templateById<TResponse = Response>(
  apiKey: string,
  templateId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/templates/${templateId}`,
    method: "GET",
  });
}
