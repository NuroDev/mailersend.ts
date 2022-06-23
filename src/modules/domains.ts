import { fetch } from "~/util";

export interface ListDomainsParams extends Record<string, any> {
  page?: number;
  /**
   * Min: 10
   *
   * Max: 100
   *
   * @default 25
   */
  limit?: number;
  verified?: boolean;
}

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
export async function listDomains<TResponse = Response>(
  apiKey: string,
  params: ListDomainsParams
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
export async function domainById<TResponse = Response>(
  apiKey: string,
  domainId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/domains/${domainId}`,
    method: "GET",
  });
}

export interface AddDomainParams {
  /**
   * Must be alphanumeric.
   */
  custom_tracking_subdomain?: string;
  /**
   * Must be alphanumeric.
   */
  inbound_routing_subdomain?: string;
  /**
   * Must be unique and lowercase.
   *
   * Domain must be available and resolvable.
   */
  name: string;
  /**
   * Must be alphanumeric.
   */
  return_path_subdomain?: string;
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
export async function addDomain<TResponse = Response>(
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
export async function deleteDomain<TResponse = Response>(
  apiKey: string,
  domainId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/domains/${domainId}`,
    method: "DELETE",
  });
}

export interface RecipientsForDomainParams extends Record<string, any> {
  domainId: string;
  page?: number;
  /**
   * Min: 10
   *
   * Max: 100
   *
   * @default 25
   */
  limit?: number;
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
export async function recipientsForDomain<TResponse = Response>(
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

export interface UpdateDomainSettingsParams extends Record<string, any> {
  custom_tracking_enabled?: boolean;
  custom_tracking_subdomain?: string;
  domainId: string;
  precedence_bulk?: boolean;
  send_paused?: boolean;
  track_clicks?: boolean;
  track_content?: boolean;
  track_opens?: boolean;
  track_unsubscribe_html?: string;
  track_unsubscribe_plain?: string;
  track_unsubscribe?: boolean;
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
export async function updateDomainSettings<TResponse = Response>(
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

export interface DnsRecordsParams extends Record<string, any> {
  domainId: string;
}

/**
 * DNS Records
 *
 * @description If you want to retrieve the domain's DNS records
 *
 * @see https://developers.mailersend.com/api/v1/domains.html#get-dns-records
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Dns records options
 */
export async function dnsRecords<TResponse = Response>(
  apiKey: string,
  { domainId, ...params }: DnsRecordsParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/domains/${domainId}/dns-records`,
    method: "GET",
    params,
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
export async function verificationStatus<TResponse = Response>(
  apiKey: string,
  domainId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/domains/${domainId}/verify`,
    method: "GET",
  });
}
