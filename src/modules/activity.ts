import { fetch } from "~/fetch";

import type { BaseReponse } from "~/types";

export interface ActivityListParams extends Record<string, any> {
  /**
   * Timestamp is assumed to be UTC.
   *
   * Must be lower than date_to.
   */
  date_from?: number;
  /**
   * Timestamp is assumed to be UTC.
   *
   * Must be higher than date_from.
   */
  date_to?: number;
  domainId: string;
  event?: Array<Event>;
  /**
   * Min: **10**
   *
   * Max: **100**
   *
   * @default 25
   */
  limit?: number;
  page?: number;
}

export interface ActivityListData {
  id: string;
  created_at: string;
  updated_at: string;
  type: string;
  email: {
    created_at: string;
    from: string;
    html: string;
    id: string;
    recipient: {
      created_at: string;
      deleted_at: string;
      email: string;
      id: string;
      updated_at: string;
    };
    status: string;
    subject: string;
    tags: unknown;
    text: string;
    updated_at: string;
  };
}

export interface ActivityListResponse
  extends BaseReponse<Array<ActivityListData>> {
  links?: {
    first: string;
    last: string;
    prev: unknown;
    next: unknown;
  };
  meta?: {
    current_page: number;
    from: number;
    path: string;
    per_page: number;
    to: number;
  };
}

/**
 * Activity List
 *
 * @description Get information about your domain activity, including your sent emails and whether they were received by the recipient.
 *
 * You can also see whether they opened or clicked on any of the email content.
 *
 * @see https://developers.mailersend.com/api/v1/activity.html#get-a-list-of-activities
 *
 * @param {String} apiKey - Unique API access token
 * @param {Object} options - Activity list options
 */
export async function activityList<TResponse = ActivityListResponse>(
  apiKey: string,
  { domainId, ...params }: ActivityListParams
): Promise<TResponse> {
  return fetch({
    apiKey,
    endpoint: `/activity/${domainId}`,
    method: "GET",
    params,
  });
}
