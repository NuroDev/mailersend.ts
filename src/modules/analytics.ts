import { fetch } from "~/util";

import type { BaseReponse, GroupBy } from "~/types";

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

export interface ActivityByDateData {
  date_from: string;
  date_to: string;
  group_by: string;
  stats: Array<{
    clicked: number;
    date: string;
    delivered: number;
    hard_bounced: number;
    junk: number;
    opened: number;
    processed: number;
    queued: number;
    sent: number;
    soft_bounced: number;
    spam_complaints: number;
    unsubscribed: number;
  }>;
}

export type ActivityByDateResponse = BaseReponse<Array<ActivityByDateData>>;

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

export interface ActivityByCountryData {
  date_from: number;
  date_to: number;
  stats: Array<{
    count: number;
    name: string;
  }>;
}

export type ActivityByCountryResponse = BaseReponse<ActivityByCountryData>;

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

export interface ActivityByUserAgentData {
  date_from: number;
  date_to: number;
  stats: Array<{
    count: number;
    name: string;
  }>;
}

export type ActivityByUserAgentResponse = BaseReponse<ActivityByUserAgentData>;

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

export interface ActivityByReadingEnvironmentData {
  date_from: number;
  date_to: number;
  stats: Array<{
    count: number;
    name: string;
  }>;
}

export type ActivityByReadingEnvironmentResponse =
  BaseReponse<ActivityByReadingEnvironmentData>;

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
    method: "GET",
    params,
  });
}
