import type {
  ActivityByCountryParams,
  ActivityByDateParams,
  ActivityByReadingEnvironmentParams,
  ActivityByUserAgentParams,
  ActivityListParams,
} from "~/modules";

export type HttpMethod =
  | "CONNECT"
  | "DELETE"
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "PATCH"
  | "POST"
  | "PUT"
  | "TRACE";

export type Event =
  | "clicked"
  | "delivered"
  | "hard_bounced"
  | "junk"
  | "opened"
  | "processed"
  | "queued"
  | "sent"
  | "soft_bounced"
  | "spam_complaints"
  | "unsubscribed";

export type ScheduleStatus = "scheduled" | "sent" | "error";

export type GroupBy = "ays" | "weeks" | "months" | "years";

export interface ClientConfig {
  /**
   * @see https://www.mailersend.com/help/managing-api-tokens
   */
  apiKey: string;
}

export interface IClient {
  /**
   * Activity List
   *
   * @description Get information about your domain activity, including your sent emails and whether they were received by the recipient.
   *
   * You can also see whether they opened or clicked on any of the email content.
   *
   * @see https://developers.mailersend.com/api/v1/activity.html#get-a-list-of-activities
   *
   * @param {Object} options - Activity list options
   */
  activityList(options: ActivityListParams): Promise<Record<string, any>>;

  /**
   * Activity By Country
   *
   * @description Retrieve data grouped by country, based on activity
   *
   * @see https://developers.mailersend.com/api/v1/analytics.html#opens-by-country
   *
   * @param {Object} options - Activity by country options
   */
  activityByCountry(
    options: ActivityByCountryParams
  ): Promise<Record<string, any>>;

  /**
   * Activity By Date
   *
   * @description Retrieve data grouped by date, based on activity
   *
   * @see https://developers.mailersend.com/api/v1/analytics.html#activity-data-by-date
   *
   * @param {Object} options - Activity by date options
   */
  activityByDate(options: ActivityByDateParams): Promise<Record<string, any>>;

  /**
   * Activity By Reading Environment
   *
   * @description Retrieve data grouped by the reading environment (webmail, mobile, desktop), based on activity
   *
   * @see https://developers.mailersend.com/api/v1/analytics.html#opens-by-reading-environment
   *
   * @param {Object} options - Activity by reading environment options
   */
  activityByReadingEnvironment(
    options: ActivityByReadingEnvironmentParams
  ): Promise<Record<string, any>>;

  /**
   * Activity By User Agent
   *
   * @description Retrieve data grouped by user-agent name (browser and operating system), based on activity
   *
   * @see https://developers.mailersend.com/api/v1/analytics.html#opens-by-user-agent-name
   *
   * @param {Object} options - Activity by user agent options
   */
  activityByUserAgent(
    options: ActivityByUserAgentParams
  ): Promise<Record<string, any>>;
}
