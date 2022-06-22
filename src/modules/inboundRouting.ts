import { fetch } from "~/util";

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

/**
 * List Inbound Routes
 *
 * @description If you want to retrieve information about multiple inbound routes
 *
 * @see https://developers.mailersend.com/api/v1/inbound.html#get-a-list-of-inbound-routes
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Additional request options
 */
export async function listInboundRoutes<TResponse = Response>(
  apiKey: string,
  options: ListInboundRoutesParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/inbound",
    method: "GET",
    params: options,
  });
}

/**
 * Inbound Route by ID
 *
 * @description If you want to retrieve a single inbound route
 *
 * @see https://developers.mailersend.com/api/v1/inbound.html#get-a-single-inbound-route
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} inboundId - Unique inbound identifier
 */
export async function inboundRouteById<TResponse = Response>(
  apiKey: string,
  inboundId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/inbound/${inboundId}`,
    method: "GET",
  });
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

/**
 * Add Inbound Route
 *
 * @description If you want to add a new inbound route to a domain
 *
 * @see https://developers.mailersend.com/api/v1/inbound.html#add-an-inbound-route
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Additional request options
 */
export async function addInboundRoute<TResponse = Response>(
  apiKey: string,
  options: AddInboundRouteParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/inbound",
    body: options,
    method: "POST",
  });
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

/**
 * Update Inbound Route
 *
 * @description If you want to update the information of an existing inbound route
 *
 * @see https://developers.mailersend.com/api/v1/inbound.html#update-an-inbound-route
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Additional request options
 */
export async function updateInboundRoute<TResponse = Response>(
  apiKey: string,
  { inboundId, ...options }: UpdateInboundRouteParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/inbound/${inboundId}`,
    body: options,
    method: "PUT",
  });
}

/**
 * Delete Inbound Route
 *
 * @description If you want to delete an inbound route
 *
 * @see https://developers.mailersend.com/api/v1/inbound.html#delete-an-inbound-route
 *
 * @param {String} apiKey - Unique API access token
 * @param {String} inboundId - Unique inbound identifier
 */
export async function deleteInboundRoute<TResponse = Response>(
  apiKey: string,
  inboundId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/inbound/${inboundId}`,
    method: "DELETE",
  });
}
