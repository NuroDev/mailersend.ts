import { fetch } from "~/fetch";

import type { ActivityListParams, ActivityListResponse } from ".";

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
