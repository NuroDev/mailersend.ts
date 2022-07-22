import type { BaseResponse } from "~/types/request";
import type { Event, GroupBy } from "~/types/meta";

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
  stats: Array<Record<keyof Event, number>>;
}

export type ActivityByDateResponse = BaseResponse<ActivityByDateData>;

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

export type ActivityByCountryResponse = BaseResponse<ActivityByCountryData>;

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

export type ActivityByUserAgentResponse = BaseResponse<ActivityByUserAgentData>;

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
  BaseResponse<ActivityByReadingEnvironmentData>;
