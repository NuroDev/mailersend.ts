import * as modules from "~/modules";

export interface IClient {
  // ------------------------------------------------------------
  // Activity
  // ------------------------------------------------------------

  /**
   * List Activity
   *
   * @description Get information about your domain activity, including your sent emails and whether they were received by the recipient.
   *
   * You can also see whether they opened or clicked on any of the email content.
   *
   * @see https://developers.mailersend.com/api/v1/activity.html#get-a-list-of-activities
   *
   * @param {Object} options - Activity list options
   */
  listActivity(
    options: modules.ListActivityParams
  ): ReturnType<typeof modules.listActivity>;

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
  // Domains
  // ------------------------------------------------------------

  /**
   * Add Domain
   *
   * @description If you want to add a new domain
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#add-a-domain
   *
   * @param {Object} options - Add domain options
   */
  addDomain(
    options: modules.AddDomainParams
  ): ReturnType<typeof modules.addDomain>;

  /**
   * Delete Domain
   *
   * @description If you want to delete a domain name
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#delete-a-domain
   *
   * @param {String} domainId - Unique domain identifier
   */
  deleteDomain(domainId: string): ReturnType<typeof modules.deleteDomain>;

  /**
   * DNS Records
   *
   * @description If you want to retrieve the domain's DNS records
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#get-dns-records
   *
   * @param {String} domainId - Unique domain identifier
   */
  dnsRecords(domainId: string): ReturnType<typeof modules.dnsRecords>;

  /**
   * Domain by ID
   *
   * @description Retrieve information about a single domain name
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#get-a-single-domain
   *
   * @param {String} domainId - Unique domain identifier
   */
  domainById(domainId: string): ReturnType<typeof modules.domainById>;

  /**
   * List Domains
   *
   * @description Retrieve information about multiple domains
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#get-a-list-of-domains
   *
   * @param {Object} [options] - List domains options
   */
  listDomains(
    options: modules.ListDomainsParams
  ): ReturnType<typeof modules.listDomains>;

  /**
   * Recipients For Domain
   *
   * @description If you want to retrieve information (creation date, update date, deletion date) about the recipients for a domain name
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#get-recipients-for-a-domain
   *
   * @param {Object} options - Recipients for domain options
   */
  recipientsForDomain(
    options: modules.RecipientsForDomainParams
  ): ReturnType<typeof modules.recipientsForDomain>;

  /**
   * Update Domain
   *
   * @description If you want to update the domain name settings
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#update-domain-settings
   *
   * @param {Object} options - Update domain settings options
   */
  updateDomain(
    options: modules.UpdateDomainParams
  ): ReturnType<typeof modules.updateDomain>;

  /**
   * Verification Status
   *
   * @description If you want to retrieve the verification status for a domain
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#get-verification-status
   *
   * @param {String} domainId - Unique domain identifier
   */
  verificationStatus(
    domainId: string
  ): ReturnType<typeof modules.verificationStatus>;

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
  // Recipients
  // ------------------------------------------------------------

  /**
   * List Recipients
   *
   * @description Retrieve the email addresses of recipients
   *
   * @see https://developers.mailersend.com/api/v1/recipients.html#get-recipients
   *
   * @param {Object} options - List recipients options
   */
  listRecipients(
    options: modules.ListRecipientsParams
  ): ReturnType<typeof modules.listRecipients>;

  /**
   * Recipient by ID
   *
   * @description Retrieve the information of a single recipient and its domain
   *
   * @see https://developers.mailersend.com/api/v1/recipients.html#get-a-single-recipient
   *
   * @param {String} recipientId - Unique recipient identifier
   */
  recipientById(recipientId: string): ReturnType<typeof modules.recipientById>;

  /**
   * Delete Recipient
   *
   * @description Delete the information of a single recipient and its domain
   *
   * @see https://developers.mailersend.com/api/v1/recipients.html#delete-a-recipient
   *
   * @param {String} recipientId - Unique recipient identifier
   */
  deleteRecipient(
    recipientId: string
  ): ReturnType<typeof modules.deleteRecipient>;

  /**
   * List Suppressions
   *
   * @description Retrieve the recipients in a blocklist of an account or domain by passing the blocklist ID
   *
   * @see https://developers.mailersend.com/api/v1/recipients.html#get-recipients-from-a-suppression-list
   *
   * @param {Object} options - Suppression list options
   */
  listSuppressions(
    options: modules.SuppressionListParams
  ): ReturnType<typeof modules.listSuppressions>;

  /**
   * Add To Suppression List
   *
   * @description Add a recipient to a blocklist
   *
   * @see https://developers.mailersend.com/api/v1/recipients.html#add-recipients-to-a-suppression-list
   *
   * @param {Object} options - Add to suppression list options
   */
  addToSuppressionList(
    options: modules.AddToSuppressionListParams
  ): ReturnType<typeof modules.addToSuppressionList>;

  /**
   * Delete From Suppression List
   *
   * @description Delete one or more blocklist entries
   *
   * @see https://developers.mailersend.com/api/v1/recipients.html#delete-recipients-from-a-suppression-list
   *
   * @param {Object} options - Delete from suppression list options
   */
  deleteFromSuppressionList(
    options: modules.DeleteFromSuppressionListParams
  ): ReturnType<typeof modules.deleteFromSuppressionList>;

  // ------------------------------------------------------------
  // Scheduled Messages
  // ------------------------------------------------------------

  /**
   * Delete Scheduled Message
   *
   * @description Delete a scheduled message
   *
   * @see https://developers.mailersend.com/api/v1/message-schedules.html#delete-a-scheduled-message
   *
   * @param {String} messageId - Message ID from the Send an email's response headers or Get scheduled messages response.
   */
  deleteScheduledMessage(
    messageId: string
  ): ReturnType<typeof modules.deleteScheduledMessage>;

  /**
   * List Scheduled Messages
   *
   * @description Get information on scheduled messages, such as subject, time of creation, and time of sending
   *
   * @see https://developers.mailersend.com/api/v1/message-schedules.html#get-list-of-scheduled-messages
   *
   * @param {Object} [options] - List scheduled messages options
   */
  listScheduledMessages(
    options: modules.ListScheduledMessagesParams
  ): ReturnType<typeof modules.listScheduledMessages>;

  /**
   * Single Scheduled Message
   *
   * @description Get information about a specific scheduled message, like its subject, creation date, sending date and domain
   *
   * @see https://developers.mailersend.com/api/v1/message-schedules.html#get-a-single-scheduled-message
   *
   * @param {String} messageId - Message ID from the Send an email's response headers or Get scheduled messages response.
   */
  scheduledMessageById(
    messageId: string
  ): ReturnType<typeof modules.scheduledMessageById>;

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

  // ------------------------------------------------------------
  // Webhooks
  // ------------------------------------------------------------

  /**
   * Create Webhook
   *
   * @description Create a new webhook
   *
   * @see https://developers.mailersend.com/api/v1/webhooks.html#create-a-webhook
   *
   * @param {Object} [options] - Create webhook options
   */
  createWebhook(
    options: modules.CreateWebhookParams
  ): ReturnType<typeof modules.createWebhook>;

  /**
   * List Webhooks
   *
   * @description If you want to retrieve information about webhooks
   *
   * @see https://developers.mailersend.com/api/v1/webhooks.html#list-webhooks
   *
   * @param {Object} options - List webhook options
   */
  listWebhooks(
    options: modules.ListWebhooksParams
  ): ReturnType<typeof modules.listWebhooks>;

  /**
   * Webhook by ID
   *
   * @description To retrieve information about a single webhook
   *
   * @see https://developers.mailersend.com/api/v1/webhooks.html#get-a-webhook
   *
   * @param {String} webhookId - Unique webhook identifier
   */
  webhookById(webhookId: string): ReturnType<typeof modules.webhookById>;

  /**
   * Update Webhook
   *
   * @description Update a webhook
   *
   * @see https://developers.mailersend.com/api/v1/webhooks.html#update-a-webhook
   *
   * @param {Object} options - Update webhook options
   */
  updateWebhook(
    options: modules.UpdateWebhookParams
  ): ReturnType<typeof modules.updateWebhook>;

  /**
   * Delete Webhook
   *
   * @description Delete a webhook
   *
   * @see https://developers.mailersend.com/api/v1/webhooks.html#update-a-webhook
   *
   * @param {String} webhookId - Unique webhook identifier
   */
  deleteWebhook(webhookId: string): ReturnType<typeof modules.deleteWebhook>;
}
