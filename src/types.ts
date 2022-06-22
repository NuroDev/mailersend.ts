import type {
  ActivityByCountryParams,
  ActivityByDateParams,
  ActivityByReadingEnvironmentParams,
  ActivityByUserAgentParams,
  ActivityListParams,
  AddDomainParams,
  AddInboundRouteParams,
  AllTemplatesParams,
  DeleteDomainParams,
  DnsRecordsParams,
  DomainByIdParams,
  ListDomainsParams,
  ListInboundRoutesParams,
  ListScheduledMessagesParams,
  RecipientsForDomainParams,
  SendBulkParams,
  SendParams,
  UpdateDomainSettingsParams,
  UpdateInboundRouteParams,
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
   * @param {Object} options - Delete domain options
   */
  deleteDomain(options: DeleteDomainParams): Promise<Record<string, any>>;

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
   * @param {Object} options - Domain by ID options
   */
  domainById(options: DomainByIdParams): Promise<Record<string, any>>;

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
   * Send
   *
   * @description This endpoint allows you to send an asynchronous email.
   *
   * It returns the status of the email sent with an X-Message-Id that can be used to continuously query for the status using the Email API.
   *
   * @see https://developers.mailersend.com/api/v1/email.html#send-an-email
   *
   * @param {Object} options - Send options
   */
  send(options: SendParams): Promise<Record<string, any>>;

  /**
   * Send Bulk
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
   * @param {Object} options - Send bulk options
   */
  sendBulk(options: Array<SendBulkParams>): Promise<Record<string, any>>;

  /**
   * Add Inbound Route
   *
   * @description If you want to add a new inbound route to a domain
   *
   * @see https://developers.mailersend.com/api/v1/inbound.html#add-an-inbound-route
   *
   * @param {Object} options - Additional request options
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
   * @param {Object} options - Additional request options
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
   * @param {Object} options - Additional request options
   */
  updateInboundRoute(
    options: UpdateInboundRouteParams
  ): Promise<Record<string, any>>;

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
   * @param {Object} options - Additional request options
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

  /**
   * All Templates
   *
   * @description Retrieve the account templates
   *
   * @see https://developers.mailersend.com/api/v1/templates.html#get-templates
   *
   * @param {Object} options - Additional request parameters
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
}
