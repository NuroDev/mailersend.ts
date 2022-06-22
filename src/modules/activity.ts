import { fetch } from "~/util";

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

/**
 * Get Activity List
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
export async function getActivityList(
  apiKey: string,
  { domainId, ...params }: ActivityListParams
) {
  return fetch({
    endpoint: `/activity/${domainId}`,
    apiKey,
    method: "GET",
    params,
  });
}
