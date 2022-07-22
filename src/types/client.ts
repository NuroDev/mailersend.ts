import * as modules from "~/modules";

export interface IClient {
  // ------------------------------------------------------------
  // Activity
  // ------------------------------------------------------------

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
  activityList(
    options: modules.ActivityListParams
  ): ReturnType<typeof modules.activityList>;

  // ------------------------------------------------------------
  // Analytics
  // ------------------------------------------------------------

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
    options: modules.ActivityByCountryParams
  ): ReturnType<typeof modules.activityByCountry>;

  /**
   * Activity By Date
   *
   * @description Retrieve data grouped by date, based on activity
   *
   * @see https://developers.mailersend.com/api/v1/analytics.html#activity-data-by-date
   *
   * @param {Object} options - Activity by date options
   */
  activityByDate(
    options: modules.ActivityByDateParams
  ): ReturnType<typeof modules.activityByDate>;

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
    options: modules.ActivityByReadingEnvironmentParams
  ): ReturnType<typeof modules.activityByReadingEnvironment>;

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
    options: modules.ActivityByUserAgentParams
  ): ReturnType<typeof modules.activityByUserAgent>;

  // ------------------------------------------------------------
  // Email
  // ------------------------------------------------------------

  /**
   * Send Email
   *
   * @description This endpoint allows you to send an asynchronous email.
   *
   * It returns the status of the email sent with an X-Message-Id that can be used to continuously query for the status using the Email API.
   *
   * @see https://developers.mailersend.com/api/v1/email.html#send-an-email
   *
   * @param {Object} options - Send email options
   */
  sendEmail(
    options: modules.SendEmailParams
  ): ReturnType<typeof modules.sendEmail>;

  /**
   * Send Bulk Emails
   *
   * @description This endpoint allows you to send multiple asynchronous emails.
   *
   * It returns the status of the request sent with a `bulk_email_id` that can be used to continuously query for the status using the Email API.
   *
   * To prevent long waiting periods for a response, each email validation is done after the request and then the result is stored.
   *
   * If there is any validation error, you can query it using the `bulk_email_id` provided.
   *
   * @see https://developers.mailersend.com/api/v1/email.html#send-bulk-emails
   *
   * @param {Object} options - Send bulk emails options
   */
  sendBulkEmails(
    options: Array<modules.SendBulkEmailsParams>
  ): ReturnType<typeof modules.sendBulkEmails>;
}
