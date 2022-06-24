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
