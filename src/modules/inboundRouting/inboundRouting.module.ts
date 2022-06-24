import { fetch } from "~/fetch";

import type {
  AddInboundRouteParams,
  AddInboundRouteResponse,
  DeleteInboundRouteResponse,
  InboundRouteByIdResponse,
  ListInboundRouteResponse,
  ListInboundRoutesParams,
  UpdateInboundRouteParams,
  UpdateInboundRouteResponse,
} from ".";

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
export async function listInboundRoutes<TResponse = ListInboundRouteResponse>(
  apiKey: string,
  options: ListInboundRoutesParams = {}
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
export async function inboundRouteById<TResponse = InboundRouteByIdResponse>(
  apiKey: string,
  inboundId: string
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/inbound/${inboundId}`,
    method: "GET",
  });
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
export async function addInboundRoute<TResponse = AddInboundRouteResponse>(
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
export async function updateInboundRoute<
  TResponse = UpdateInboundRouteResponse
>(
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
export async function deleteInboundRoute<
  TResponse = DeleteInboundRouteResponse
>(apiKey: string, inboundId: string): Promise<TResponse> {
  const response = await fetch({
    apiKey,
    endpoint: `/inbound/${inboundId}`,
    method: "DELETE",
    unwrap: false,
  });

  return {
    success: response.status.toString().startsWith("20"),
  };
}
