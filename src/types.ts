import type {
  ActivityByCountryParams,
  ActivityByDateParams,
  ActivityByReadingEnvironmentParams,
  ActivityByUserAgentParams,
  ActivityListParams,
  AddDomainParams,
  AddInboundRouteParams,
  AddToSuppressionListParams,
  AllRecipientsParams,
  AllTemplatesParams,
  CreateTokenParams,
  DeleteFromSuppressionListParams,
  DnsRecordsParams,
  ListDomainsParams,
  ListInboundRoutesParams,
  ListMessagesParams,
  ListScheduledMessagesParams,
  RecipientsForDomainParams,
  SendBulkParams,
  SendParams,
  SuppressionListParams,
  UpdateDomainSettingsParams,
  UpdateInboundRouteParams,
  UpdateTokenParams,
  VerificationStatusParams,
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

export interface Attachment<T = string> {
  content: T;
  filename: string;
  id?: string;
}

export interface Recipient {
  email: string;
  name: string;
}

/**
 * @see https://developers.mailersend.com/api/v1/email.html#send-an-email
 */
export interface EmailParams {
  attachments?: Array<Attachment>;
  bcc?: Array<Recipient>;
  cc?: Array<Recipient>;
  from: {
    email: string;
    name?: string;
  };
  html: string;
  personalization?: Array<{
    email: string;
    data: Array<any>;
  }>;
  precedence_bulk?: boolean;
  recipients: Array<Recipient>;
  reply_to?: {
    email?: string;
    name?: string;
  };
  send_at?: number;
  subject: string;
  tags: Array<string>;
  to: Array<{
    email: string;
    name?: string;
  }>;
  template_id: string;
  text: string;
  variables?: Array<{
    email: string;
    substitutions: Array<{
      var: string;
      value: string;
    }>;
  }>;
}

export interface ClientConfig {
  /**
   * @see https://www.mailersend.com/help/managing-api-tokens
   */
  apiKey: string;
}

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
  activityList(options: ActivityListParams): Promise<Record<string, any>>;

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
  addDomain(options: AddDomainParams): Promise<Record<string, any>>;

  /**
   * Delete Domain
   *
   * @description If you want to delete a domain name
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#delete-a-domain
   *
   * @param {String} domainId - Unique domain identifier
   */
  deleteDomain(domainId: string): Promise<Record<string, any>>;

  /**
   * DNS Records
   *
   * @description If you want to retrieve the domain's DNS records
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#get-dns-records
   *
   * @param {Object} options - Dns records options
   */
  dnsRecords(options: DnsRecordsParams): Promise<Record<string, any>>;

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
    options: RecipientsForDomainParams
  ): Promise<Record<string, any>>;

  /**
   * Domain by ID
   *
   * @description Retrieve information about a single domain name
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#get-a-single-domain
   *
   * @param {String} domainId - Unique domain identifier
   */
  domainById(domainId: string): Promise<Record<string, any>>;

  /**
   * Verification Status
   *
   * @description If you want to retrieve the verification status for a domain
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#get-verification-status
   *
   * @param {Object} options - Verification status options
   */
  verificationStatus(
    options: VerificationStatusParams
  ): Promise<Record<string, any>>;

  /**
   * List Domains
   *
   * @description Retrieve information about multiple domains
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#get-a-list-of-domains
   *
   * @param {Object} options - List domains options
   */
  listDomains(options: ListDomainsParams): Promise<Record<string, any>>;

  /**
   * Update Domain Settings
   *
   * @description If you want to update the domain name settings
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#update-domain-settings
   *
   * @param {Object} options - Update domain settings options
   */
  updateDomainSettings(
    options: UpdateDomainSettingsParams
  ): Promise<Record<string, any>>;

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
  bulkEmailStatus(bulkEmailId: string): Promise<Record<string, any>>;

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
  send(options: SendParams): Promise<Record<string, any>>;

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
  sendBulk(options: Array<SendBulkParams>): Promise<Record<string, any>>;

  // ------------------------------------------------------------
  // Inbound Routing
  // ------------------------------------------------------------

  /**
   * Add Inbound Route
   *
   * @description If you want to add a new inbound route to a domain
   *
   * @see https://developers.mailersend.com/api/v1/inbound.html#add-an-inbound-route
   *
   * @param {Object} options - Add inbound route options
   */
  addInboundRoute(options: AddInboundRouteParams): Promise<Record<string, any>>;

  /**
   * Delete Inbound Route
   *
   * @description If you want to delete an inbound route
   *
   * @see https://developers.mailersend.com/api/v1/inbound.html#delete-an-inbound-route
   *
   * @param {String} inboundId - Unique inbound identifier
   */
  deleteInboundRoute(inboundId: string): Promise<Record<string, any>>;

  /**
   * List Inbound Routes
   *
   * @description If you want to retrieve information about multiple inbound routes
   *
   * @see https://developers.mailersend.com/api/v1/inbound.html#get-a-list-of-inbound-routes
   *
   * @param {Object} options - List inbound routes options
   */
  listInboundRoutes(
    options: ListInboundRoutesParams
  ): Promise<Record<string, any>>;

  /**
   * Inbound Route by ID
   *
   * @description If you want to retrieve a single inbound route
   *
   * @see https://developers.mailersend.com/api/v1/inbound.html#get-a-single-inbound-route
   *
   * @param {String} inboundId - Unique inbound identifier
   */
  inboundRouteById(inboundId: string): Promise<Record<string, any>>;

  /**
   * Update Inbound Route
   *
   * @description If you want to update the information of an existing inbound route
   *
   * @see https://developers.mailersend.com/api/v1/inbound.html#update-an-inbound-route
   *
   * @param {Object} options - Update inbound route options
   */
  updateInboundRoute(
    options: UpdateInboundRouteParams
  ): Promise<Record<string, any>>;

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
   * @param {Object} options - List messages options
   */
  listMessages(options: ListMessagesParams): Promise<Record<string, any>>;

  /**
   * Message Info by ID
   *
   * @description Retrieve information for a single message
   *
   * @see https://developers.mailersend.com/api/v1/messages.html#get-information-for-a-single-message
   *
   * @param {String} messageId - Unique message identifier
   */
  messageInfoById(messageId: string): Promise<Record<string, any>>;

  // ------------------------------------------------------------
  // Recipients
  // ------------------------------------------------------------

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
    options: AddToSuppressionListParams
  ): Promise<Record<string, any>>;

  /**
   * All Recipients
   *
   * @description Retrieve the email addresses of recipients
   *
   * @see https://developers.mailersend.com/api/v1/recipients.html#get-recipients
   *
   * @param {Object} options - All recipients options
   */
  allRecipients(options: AllRecipientsParams): Promise<Record<string, any>>;

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
    options: DeleteFromSuppressionListParams
  ): Promise<Record<string, any>>;

  /**
   * Delete Recipient
   *
   * @description Delete the information of a single recipient and its domain
   *
   * @see https://developers.mailersend.com/api/v1/recipients.html#delete-a-recipient
   *
   * @param {String} recipientId - Unique recipient identifier
   */
  deleteRecipient(recipientId: string): Promise<Record<string, any>>;

  /**
   * Recipient by ID
   *
   * @description Retrieve the information of a single recipient and its domain
   *
   * @see https://developers.mailersend.com/api/v1/recipients.html#get-a-single-recipient
   *
   * @param {String} recipientId - Unique recipient identifier
   */
  recipientById(recipientId: string): Promise<Record<string, any>>;

  /**
   * Suppression List
   *
   * @description Retrieve the recipients in a blocklist of an account or domain by passing the blocklist ID
   *
   * @see https://developers.mailersend.com/api/v1/recipients.html#get-recipients-from-a-suppression-list
   *
   * @param {Object} options - Suppression list options
   */
  suppressionList(options: SuppressionListParams): Promise<Record<string, any>>;

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
  deleteScheduledMessage(messageId: string): Promise<Record<string, any>>;

  /**
   * List Scheduled Messages
   *
   * @description Get information on scheduled messages, such as subject, time of creation, and time of sending
   *
   * @see https://developers.mailersend.com/api/v1/message-schedules.html#get-list-of-scheduled-messages
   *
   * @param {Object} options - List scheduled messages options
   */
  listScheduledMessages(
    options: ListScheduledMessagesParams
  ): Promise<Record<string, any>>;

  /**
   * Single Scheduled Message
   *
   * @description Get information about a specific scheduled message, like its subject, creation date, sending date and domain
   *
   * @see https://developers.mailersend.com/api/v1/message-schedules.html#get-a-single-scheduled-message
   *
   * @param {String} messageId - Message ID from the Send an email's response headers or Get scheduled messages response.
   */
  singleScheduledMessage(messageId: string): Promise<Record<string, any>>;

  // ------------------------------------------------------------
  // Templates
  // ------------------------------------------------------------

  /**
   * All Templates
   *
   * @description Retrieve the account templates
   *
   * @see https://developers.mailersend.com/api/v1/templates.html#get-templates
   *
   * @param {Object} options - All templates options
   */
  allTemplates(options: AllTemplatesParams): Promise<Record<string, any>>;

  /**
   * Delete Template
   *
   * @description Delete a template
   *
   * @see https://developers.mailersend.com/api/v1/templates.html#delete-a-template
   *
   * @param {String} templateId - Unique template identifier
   */
  deleteTemplate(templateId: string): Promise<Record<string, any>>;

  /**
   * Template by ID
   *
   * @description Retrieve the information of a single template, its category, domain, and stats
   *
   * @see https://developers.mailersend.com/api/v1/templates.html#get-a-single-template
   *
   * @param {String} templateId - Unique template identifier
   */
  templateById(templateId: string): Promise<Record<string, any>>;

  // ------------------------------------------------------------
  // Templates
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
  createToken(options: CreateTokenParams): Promise<Record<string, any>>;

  /**
   * Delete Token
   *
   * @description Delete an API token
   *
   * @see https://developers.mailersend.com/api/v1/tokens.html#delete-a-token
   *
   * @param {String} tokenId - Unique token identifier
   */
  deleteToken(tokenId: string): Promise<Record<string, any>>;

  /**
   * Update Token
   *
   * @description Update an API token
   *
   * @see https://developers.mailersend.com/api/v1/tokens.html#update-a-token
   *
   * @param {Object} options - Update token options
   */
  updateToken(options: UpdateTokenParams): Promise<Record<string, any>>;
}
