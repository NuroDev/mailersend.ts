import { fetch } from "~/util";

import type { BaseReponse } from "~/types";

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

export interface ListDomainsData {
  created_at: string;
  dkim: boolean;
  domain_settings: {
    custom_tracking_enabled: boolean;
    custom_tracking_subdomain: string;
    precedence_bulk: boolean;
    send_paused: boolean;
    track_clicks: boolean;
    track_content: boolean;
    track_opens: boolean;
    track_unsubscribe_html: string;
    track_unsubscribe_plain: string;
    track_unsubscribe: boolean;
  };
  has_not_queued_messages: boolean;
  id: string;
  is_cname_active: boolean;
  is_cname_verified: boolean;
  is_dns_active: boolean;
  is_tracking_allowed: boolean;
  is_verified: boolean;
  name: string;
  not_queued_messages_count: number;
  spf: boolean;
  tracking: boolean;
  updated_at: string;
}

export interface ListDomainsResponse extends BaseReponse<ListDomainsData> {
  links: {
    first: string;
    last: string;
    prev: unknown;
    next: unknown;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
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

export interface DomainByIdData {
  created_at: string;
  dkim: boolean;
  domain_settings: {
    custom_tracking_enabled: boolean;
    custom_tracking_subdomain: string;
    precedence_bulk: boolean;
    send_paused: boolean;
    track_clicks: boolean;
    track_content: boolean;
    track_opens: boolean;
    track_unsubscribe_html: string;
    track_unsubscribe_plain: string;
    track_unsubscribe: boolean;
  };
  has_not_queued_messages: boolean;
  id: string;
  is_cname_active: boolean;
  is_cname_verified: boolean;
  is_dns_active: boolean;
  is_tracking_allowed: boolean;
  is_verified: boolean;
  mx: boolean;
  name: string;
  not_queued_messages_count: number;
  spf: boolean;
  tracking: boolean;
  updated_at: string;
}

export type DomainByIdResponse = BaseReponse<DomainByIdData>;

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

export interface AddDomainData {
  can: {
    manage: boolean;
  };
  dkim: unknown;
  domain_settings: {
    custom_tracking_enabled: boolean;
    custom_tracking_subdomain: string;
    inbound_routing_enabled: boolean;
    inbound_routing_subdomain: string;
    precedence_bulk: boolean;
    return_path_subdomain: "mta";
    send_paused: boolean;
    track_clicks: boolean;
    track_content: boolean;
    track_opens: boolean;
    track_unsubscribe_html_enabled: boolean;
    track_unsubscribe_html: string;
    track_unsubscribe_plain_enabled: boolean;
    track_unsubscribe_plain: string;
    track_unsubscribe: boolean;
  };
  id: string;
  is_dns_active: boolean;
  is_verified: boolean;
  mx: unknown;
  name: string;
  spf: unknown;
  totals: Array<unknown>;
  tracking: unknown;
}

export type AddDomainResponse = BaseReponse<AddDomainData>;

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

export interface DeleteDomainResponse {
  success: boolean;
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

export interface RecipientsForDomainData {
  created_at: string;
  deleted_at: string;
  email: string;
  id: string;
  updated_at: string;
}

export interface RecipientsForDomainResponse
  extends BaseReponse<Array<RecipientsForDomainData>> {
  links: {
    first: string;
    last: string;
    next: unknown;
    prev: unknown;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
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

export interface UpdateDomainSettingsData {
  created_at: string;
  dkim: boolean;
  domain_settings: {
    custom_tracking_enabled: boolean;
    custom_tracking_subdomain: string;
    precedence_bulk: boolean;
    send_paused: boolean;
    track_clicks: boolean;
    track_content: boolean;
    track_opens: boolean;
    track_unsubscribe_html: string;
    track_unsubscribe_plain: string;
    track_unsubscribe: boolean;
  };
  has_not_queued_messages: boolean;
  id: string;
  is_cname_active: boolean;
  is_cname_verified: boolean;
  is_dns_active: boolean;
  is_tracking_allowed: boolean;
  is_verified: boolean;
  name: string;
  not_queued_messages_count: number;
  spf: boolean;
  tracking: boolean;
  updated_at: string;
}

export type UpdateDomainSettingsResponse =
  BaseReponse<UpdateDomainSettingsData>;

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

export interface DnsRecordsData {
  custom_tracking: {
    hostname: string;
    type: string;
    value: string;
  };
  dkim: {
    hostname: string;
    type: string;
    value: string;
  };
  id: string;
  inbound_routing: {
    hostname: string;
    type: string;
    value: string;
    priority: string;
  };
  return_path: {
    hostname: string;
    type: string;
    value: string;
  };
  spf: {
    hostname: string;
    type: string;
    value: string;
  };
}

export type DnsRecordsResponse = BaseReponse<DnsRecordsData>;

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

export interface VerificationStatusData {
  cname: boolean;
  dkim: boolean;
  mx: boolean;
  rp_cname: boolean;
  spf: boolean;
  tracking: boolean;
}

export interface VerificationStatusResponse
  extends BaseReponse<VerificationStatusData> {
  message: string;
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
