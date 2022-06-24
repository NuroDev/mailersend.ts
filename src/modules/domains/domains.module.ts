import { fetch } from "~/fetch";

import type {
  AddDomainParams,
  AddDomainResponse,
  DeleteDomainResponse,
  DnsRecordsResponse,
  DomainByIdResponse,
  ListDomainsParams,
  ListDomainsResponse,
  RecipientsForDomainParams,
  RecipientsForDomainResponse,
  UpdateDomainSettingsParams,
  UpdateDomainSettingsResponse,
  VerificationStatusResponse,
} from ".";

/**
 * List Domains
 *
 * @description Retrieve information about multiple domains
 *
 * @see https://developers.mailersend.com/api/v1/domains.html#get-a-list-of-domains
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - List domains options
 */
export async function listDomains<TResponse = ListDomainsResponse>(
  apiKey: string,
  params: ListDomainsParams = {}
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/domains",
    method: "GET",
    params,
  });
}

/**
 * Domain by ID
 *
 * @description Retrieve information about a single domain name
 *
 * @see https://developers.mailersend.com/api/v1/domains.html#get-a-single-domain
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} domainId - Unique domain identifier
 */
export async function domainById<TResponse = DomainByIdResponse>(
  apiKey: string,
  domainId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/domains/${domainId}`,
    method: "GET",
  });
}

/**
 * Add Domain
 *
 * @description If you want to add a new domain
 *
 * @see https://developers.mailersend.com/api/v1/domains.html#add-a-domain
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Add domain options
 */
export async function addDomain<TResponse = AddDomainResponse>(
  apiKey: string,
  params: AddDomainParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/domains",
    body: params,
    method: "POST",
  });
}

/**
 * Delete Domain
 *
 * @description If you want to delete a domain name
 *
 * @see https://developers.mailersend.com/api/v1/domains.html#delete-a-domain
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} domainId - Unique domain identifier
 */
export async function deleteDomain<TResponse = DeleteDomainResponse>(
  apiKey: string,
  domainId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/domains/${domainId}`,
    method: "DELETE",
  });
}

/**
 * Recipients For Domain
 *
 * @description If you want to retrieve information (creation date, update date, deletion date) about the recipients for a domain name
 *
 * @see https://developers.mailersend.com/api/v1/domains.html#get-recipients-for-a-domain
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Recipients for domain options
 */
export async function recipientsForDomain<
  TResponse = RecipientsForDomainResponse
>(
  apiKey: string,
  { domainId, ...params }: RecipientsForDomainParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/domains/${domainId}/recipients`,
    method: "GET",
    params,
  });
}

/**
 * Update Domain Settings
 *
 * @description If you want to update the domain name settings
 *
 * @see https://developers.mailersend.com/api/v1/domains.html#update-domain-settings
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Update domain settings options
 */
export async function updateDomainSettings<
  TResponse = UpdateDomainSettingsResponse
>(
  apiKey: string,
  { domainId, ...params }: UpdateDomainSettingsParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    body: params,
    endpoint: `/domains/${domainId}/settings`,
    method: "PUT",
  });
}

/**
 * DNS Records
 *
 * @description If you want to retrieve the domain's DNS records
 *
 * @see https://developers.mailersend.com/api/v1/domains.html#get-dns-records
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} domainId - Unique domain identifier
 */
export async function dnsRecords<TResponse = DnsRecordsResponse>(
  apiKey: string,
  domainId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/domains/${domainId}/dns-records`,
    method: "GET",
  });
}

/**
 * Verification Status
 *
 * @description If you want to retrieve the verification status for a domain
 *
 * @see https://developers.mailersend.com/api/v1/domains.html#get-verification-status
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} domainId - Unique domain identifier
 */
export async function verificationStatus<
  TResponse = VerificationStatusResponse
>(apiKey: string, domainId: string): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/domains/${domainId}/verify`,
    method: "GET",
  });
}
