import { fetch } from "~/fetch";

import type {
  ActivityByCountryParams,
  ActivityByCountryResponse,
  ActivityByDateParams,
  ActivityByDateResponse,
  ActivityByReadingEnvironmentParams,
  ActivityByReadingEnvironmentResponse,
  ActivityByUserAgentParams,
  ActivityByUserAgentResponse,
} from ".";

/**
 * Get Activity By Date
 *
 * @description Retrieve data grouped by date, based on activity
 *
 * @see https://developers.mailersend.com/api/v1/analytics.html#activity-data-by-date
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Activity by date options
 */
export async function activityByDate<TResponse = ActivityByDateResponse>(
  apiKey: string,
  options: ActivityByDateParams
): Promise<TResponse> {
  const { domainId, ...params } = options;
  return fetch({
    apiKey,
    endpoint: "/analytics/date",
    json: true,
    method: "GET",
    params,
  });
}

/**
 * Get Activity By Country
 *
 * @description Retrieve data grouped by country, based on activity
 *
 * @see https://developers.mailersend.com/api/v1/analytics.html#opens-by-country
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Activity by country options
 */
export async function activityByCountry<TResponse = ActivityByCountryResponse>(
  apiKey: string,
  params: ActivityByCountryParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/analytics/country",
    json: true,
    method: "GET",
    params,
  });
}

/**
 * Get Activity By User Agent
 *
 * @description Retrieve data grouped by user-agent name (browser and operating system), based on activity
 *
 * @see https://developers.mailersend.com/api/v1/analytics.html#opens-by-user-agent-name
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Activity by user agent options
 */
export async function activityByUserAgent<
  TResponse = ActivityByUserAgentResponse
>(apiKey: string, params: ActivityByUserAgentParams): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/analytics/ua-name",
    json: true,
    method: "GET",
    params,
  });
}

/**
 * Get Activity By Reading Environment
 *
 * @description Retrieve data grouped by the reading environment (webmail, mobile, desktop), based on activity
 *
 * @see https://developers.mailersend.com/api/v1/analytics.html#opens-by-reading-environment
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Activity by reading environment options
 */
export async function activityByReadingEnvironment<
  TResponse = ActivityByReadingEnvironmentResponse
>(
  apiKey: string,
  params: ActivityByReadingEnvironmentParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/analytics/ua-type",
    json: true,
    method: "GET",
    params,
  });
}
