import { BaseReponse } from "~/types";

export interface AddInboundRouteParams extends Record<string, any> {
  catch_filter: {
    filters: Array<{
      comparer: string;
      value: string;
    }>;
    type: string;
  };
  domain_enabled: boolean;
  domain_id: string;
  forwards: Array<{
    type: string;
    value: string;
  }>;
  inbound_address: string;
  inbound_domain: string;
  inbound_subdomain: string;
  match_filter: {
    type: string;
  };
  name: string;
}

export type AddInboundRouteResponse = BaseReponse<InboundRouteData>;

export interface DeleteInboundRouteResponse {
  success: boolean;
}

export type InboundRouteByIdResponse = BaseReponse<InboundRouteData>;

export interface InboundRouteData {
  address: string;
  dns_checked_at: unknown;
  domain: string;
  enabled: boolean;
  filters: Array<{
    type: string;
    key: unknown;
    comparer: string;
    value: string;
  }>;
  forwards: Array<{
    secret: string;
    type: string;
    value: string;
  }>;
  id: string;
  mxValues: {
    priority: number;
    target: string;
  };
  name: string;
}

export interface ListInboundRoutesParams extends Record<string, any> {
  domain_id?: string;
  /**
   * Min: 10
   *
   * Max: 100
   *
   * @default 25
   */
  limit?: number;
  page?: number;
}

export type ListInboundRouteResponse = BaseReponse<Array<InboundRouteData>>;

export interface UpdateInboundRouteParams extends Record<string, any> {
  catch_filter: {
    filters: Array<{
      comparer: string;
      value: string;
    }>;
    type: string;
  };
  domain_enabled: boolean;
  domain_id: string;
  forwards: Array<{
    type: string;
    value: string;
  }>;
  inboundId: string;
  inbound_address: string;
  inbound_domain: string;
  inbound_subdomain: string;
  match_filter: {
    type: string;
  };
  name: string;
}

export type UpdateInboundRouteResponse = BaseReponse<InboundRouteData>;
