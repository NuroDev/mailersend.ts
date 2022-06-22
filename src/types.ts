import type {
  ActivityByCountryParams,
  ActivityByDateParams,
  ActivityByReadingEnvironmentParams,
  ActivityByUserAgentParams,
  ActivityListParams,
  AddDomainParams,
  DeleteDomainParams,
  DnsRecordsParams,
  ListDomainsParams,
  RecipientsForDomainParams,
  SingleDomainParams,
  UpdateDomainSettingsParams,
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
   * Single Domain
   *
   * @description Retrieve information about a single domain name
   *
   * @see https://developers.mailersend.com/api/v1/domains.html#get-a-single-domain
   *
   * @param {Object} options - Single domain options
   */
  singleDomain(options: SingleDomainParams): Promise<Record<string, any>>;

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
}
