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
  UpdateDomainParams,
  UpdateDomainResponse,
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
 * @param {Object} [options] - List domains options
 */
export async function listDomains<TResponse = ListDomainsResponse>(
  apiKey: string,
  params: ListDomainsParams = {}
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/domains",
    json: true,
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
    json: true,
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
    body: params,
    endpoint: "/domains",
    json: true,
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
  const response = await fetch({
    apiKey,
    endpoint: `/domains/${domainId}`,
    json: false,
    method: "DELETE",
  });

  return {
    success: response.ok,
  } as any as TResponse;
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
    json: true,
    method: "GET",
    params,
  });
}

/**
 * Update Domain
 *
 * @description If you want to update the domain name settings
 *
 * @see https://developers.mailersend.com/api/v1/domains.html#update-domain-settings
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Update domain settings options
 */
export async function updateDomain<TResponse = UpdateDomainResponse>(
  apiKey: string,
  options: UpdateDomainParams
): Promise<TResponse> {
  const { domainId, ...params } = options;
  return fetch({
    apiKey,
    body: params,
    endpoint: `/domains/${domainId}/settings`,
    json: true,
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
    json: true,
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
    json: true,
    method: "GET",
  });
}
