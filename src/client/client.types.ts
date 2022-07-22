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
   * Bulk Email Status
   *
   * @description Get the bulk email information like validation errors, failed emails and more.
   *
   * @see https://developers.mailersend.com/api/v1/email.html#get-bulk-email-status
   *
   * @param {Object} bulkEmailId - Unique bulk email identifier
   */
  bulkEmailStatus(
    bulkEmailId: string
  ): ReturnType<typeof modules.bulkEmailStatus>;

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

  // ------------------------------------------------------------
  // Messages
  // ------------------------------------------------------------

  /**
   * List Messages
   *
   * @description Retrieve a information about all messaged
   *
   * @see https://developers.mailersend.com/api/v1/messages.html#get-a-list-of-messages
   *
   * @param {Object} [options] - List messages options
   */
  listMessages(
    options: modules.ListMessagesParams
  ): ReturnType<typeof modules.listMessages>;

  /**
   * Message by ID
   *
   * @description Retrieve information for a single message
   *
   * @see https://developers.mailersend.com/api/v1/messages.html#get-information-for-a-single-message
   *
   * @param {String} messageId - Unique message identifier
   */
  messageById(messageId: string): ReturnType<typeof modules.messageById>;

  // ------------------------------------------------------------
  // Templates
  // ------------------------------------------------------------

  /**
   * List Templates
   *
   * @description Retrieve the account templates
   *
   * @see https://developers.mailersend.com/api/v1/templates.html#get-templates
   *
   * @param {Object} options - List templates options
   */
  listTemplates(
    options: modules.ListTemplatesParams
  ): ReturnType<typeof modules.listTemplates>;

  /**
   * Template by ID
   *
   * @description Retrieve the information of a single template, its category, domain, and stats
   *
   * @see https://developers.mailersend.com/api/v1/templates.html#get-a-single-template
   *
   * @param {String} templateId - Unique template identifier
   */
  templateById(templateId: string): ReturnType<typeof modules.templateById>;

  // ------------------------------------------------------------
  // Tokens
  // ------------------------------------------------------------

  /**
   * Create Token
   *
   * @description Create an API token
   *
   * @see https://developers.mailersend.com/api/v1/tokens.html#create-a-token
   *
   * @param {Object} options - Create token options
   */
  createToken(
    options: modules.CreateTokenParams
  ): ReturnType<typeof modules.createToken>;

  /**
   * Delete Token
   *
   * @description Delete an API token
   *
   * @see https://developers.mailersend.com/api/v1/tokens.html#delete-a-token
   *
   * @param {String} tokenId - Unique token identifier
   */
  deleteToken(tokenId: string): ReturnType<typeof modules.deleteToken>;

  /**
   * Update Token
   *
   * @description Update an API token
   *
   * @see https://developers.mailersend.com/api/v1/tokens.html#update-a-token
   *
   * @param {Object} options - Update token options
   */
  updateToken(
    options: modules.UpdateTokenParams
  ): ReturnType<typeof modules.updateToken>;
}
