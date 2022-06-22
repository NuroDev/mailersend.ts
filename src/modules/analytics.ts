import { fetch } from "~/util";

import type { GroupBy } from "~/types";

export interface ActivityByDateParams extends Record<string, any> {
  domain_id?: string;
  /**
   * Not yet implemented
   *
   * Max number of recipients: `50`
   *
   * *TBD*
   */
  recipient_id?: string;
  /**
   * Timestamp is assumed to be UTC.
   *
   * Must be lower than date_to.
   */
  date_from: number;
  /**
   * Timestamp is assumed to be UTC.
   *
   * Must be higher than date_from.
   */
  date_to: number;
  /**
   * @default days
   */
  group_by?: GroupBy;
  tags?: Array<string>;
  event: Array<Event>;
}

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
export async function getActivityByDate<TResponse = Record<string, any>>(
  apiKey: string,
  { domainId, ...params }: ActivityByDateParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/analytics/date",
    method: "GET",
    params,
  });
}

export interface ActivityByCountryParams extends Record<string, any> {
  domain_id?: string;
  /**
   * Not yet implemented
   *
   * Max number of recipients: `50`
   *
   * *TBD*
   */
  recipient_id?: string;
  /**
   * Timestamp is assumed to be UTC.
   *
   * Must be lower than date_to.
   */
  date_from: number;
  /**
   * Timestamp is assumed to be UTC.
   *
   * Must be higher than date_from.
   */
  date_to: number;
  tags?: Array<string>;
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
export async function getActivityByCountry<TResponse = Record<string, any>>(
  apiKey: string,
  params: ActivityByCountryParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/analytics/country",
    method: "GET",
    params,
  });
}

export interface ActivityByUserAgentParams extends Record<string, any> {
  domain_id?: string;
  /**
   * Not yet implemented
   *
   * Max number of recipients: `50`
   *
   * *TBD*
   */
  recipient_id?: string;
  /**
   * Timestamp is assumed to be UTC.
   *
   * Must be lower than date_to.
   */
  date_from: number;
  /**
   * Timestamp is assumed to be UTC.
   *
   * Must be higher than date_from.
   */
  date_to: number;
  tags?: Array<string>;
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
export async function getActivityByUserAgent<TResponse = Record<string, any>>(
  apiKey: string,
  params: ActivityByUserAgentParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/analytics/ua-name",
    method: "GET",
    params,
  });
}

export interface ActivityByReadingEnvironmentParams
  extends Record<string, any> {
  domain_id?: string;
  /**
   * Not yet implemented
   *
   * Max number of recipients: `50`
   *
   * *TBD*
   */
  recipient_id?: string;
  /**
   * Timestamp is assumed to be UTC.
   *
   * Must be lower than date_to.
   */
  date_from: number;
  /**
   * Timestamp is assumed to be UTC.
   *
   * Must be higher than date_from.
   */
  date_to: number;
  tags?: Array<string>;
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
export async function getActivityByReadingEnvironment<
  TResponse = Record<string, any>
>(
  apiKey: string,
  params: ActivityByReadingEnvironmentParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: "/analytics/ua-type",
    method: "GET",
    params,
  });
}
