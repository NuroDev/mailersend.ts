import type { BaseResponse } from "~/types/request";
import type { ResponseLinks, ResponseMeta } from "~/types/meta";

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

export type ListDomainsResponse = BaseResponse<Array<ListDomainsData>> &
  ResponseLinks &
  ResponseMeta;

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

export type DomainByIdResponse = BaseResponse<DomainByIdData>;

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

// TODO: Convert to single base `Domain` type
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
    return_path_subdomain: string;
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

export type AddDomainResponse = BaseResponse<AddDomainData>;

export interface DeleteDomainResponse {
  success: boolean;
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

export type RecipientsForDomainResponse = BaseResponse<
  Array<RecipientsForDomainData>
> &
  ResponseLinks &
  ResponseMeta;

export interface UpdateDomainParams extends Record<string, any> {
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

export interface UpdateDomainData {
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

export type UpdateDomainResponse = BaseResponse<UpdateDomainData>;

type DnsRecordType = "A" | "AAAA" | "CNAME" | "MX" | "NS" | "TXT";

export interface DnsRecordsData {
  custom_tracking: {
    hostname: string;
    type: DnsRecordType;
    value: string;
  };
  dkim: {
    hostname: string;
    type: DnsRecordType;
    value: string;
  };
  id: string;
  inbound_routing: {
    hostname: string;
    type: DnsRecordType;
    value: string;
    priority: string;
  };
  return_path: {
    hostname: string;
    type: DnsRecordType;
    value: string;
  };
  spf: {
    hostname: string;
    type: DnsRecordType;
    value: string;
  };
}

export type DnsRecordsResponse = BaseResponse<DnsRecordsData>;

export interface VerificationStatusData {
  cname: boolean;
  dkim: boolean;
  mx: boolean;
  rp_cname: boolean;
  spf: boolean;
  tracking: boolean;
}

export interface VerificationStatusResponse
  extends BaseResponse<VerificationStatusData> {
  message: string;
}
