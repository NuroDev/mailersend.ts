import * as modules from "~/modules";

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
  ListMessagesParams,
  ListScheduledMessagesParams,
  RecipientsForDomainParams,
  SendBulkParams,
  SendParams,
  UpdateDomainSettingsParams,
  UpdateInboundRouteParams,
  VerificationStatusParams,
} from "~/modules";
import type { ClientConfig, IClient } from "~/types";

export class Client implements IClient {
  private _apiKey: string;

  constructor(config: ClientConfig) {
    this._apiKey = config.apiKey;
  }

  // ------------------------------------------------------------
  // Activity
  // ------------------------------------------------------------

  public async activityList(options: ActivityListParams) {
    return modules.activityList(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Analytics
  // ------------------------------------------------------------

  public async activityByCountry(options: ActivityByCountryParams) {
    return modules.activityByCountry(this._apiKey, options);
  }
  public async activityByDate(options: ActivityByDateParams) {
    return modules.activityByDate(this._apiKey, options);
  }
  public async activityByReadingEnvironment(
    options: ActivityByReadingEnvironmentParams
  ) {
    return modules.activityByReadingEnvironment(this._apiKey, options);
  }
  public async activityByUserAgent(options: ActivityByUserAgentParams) {
    return modules.activityByUserAgent(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Domains
  // ------------------------------------------------------------

  public async addDomain(options: AddDomainParams) {
    return modules.addDomain(this._apiKey, options);
  }
  public async deleteDomain(options: DeleteDomainParams) {
    return modules.deleteDomain(this._apiKey, options);
  }
  public async dnsRecords(options: DnsRecordsParams) {
    return modules.dnsRecords(this._apiKey, options);
  }
  public async recipientsForDomain(options: RecipientsForDomainParams) {
    return modules.recipientsForDomain(this._apiKey, options);
  }
  public async domainById(options: DomainByIdParams) {
    return modules.domainById(this._apiKey, options);
  }
  public async verificationStatus(options: VerificationStatusParams) {
    return modules.verificationStatus(this._apiKey, options);
  }
  public async listDomains(options: ListDomainsParams) {
    return modules.listDomains(this._apiKey, options);
  }
  public async updateDomainSettings(options: UpdateDomainSettingsParams) {
    return modules.updateDomainSettings(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Email
  // ------------------------------------------------------------

  public async bulkEmailStatus(bulkEmailId: string) {
    return modules.bulkEmailStatus(this._apiKey, bulkEmailId);
  }
  public async send(options: SendParams) {
    return modules.send(this._apiKey, options);
  }
  public async sendBulk(options: Array<SendBulkParams>) {
    return modules.sendBulk(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Inbound Routing
  // ------------------------------------------------------------

  public async addInboundRoute(options: AddInboundRouteParams) {
    return modules.addInboundRoute(this._apiKey, options);
  }
  public async deleteInboundRoute(inboundId: string) {
    return modules.deleteInboundRoute(this._apiKey, inboundId);
  }
  public async listInboundRoutes(options: ListInboundRoutesParams) {
    return modules.listInboundRoutes(this._apiKey, options);
  }
  public async inboundRouteById(inboundId: string) {
    return modules.inboundRouteById(this._apiKey, inboundId);
  }
  public async updateInboundRoute(options: UpdateInboundRouteParams) {
    return modules.updateInboundRoute(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Messages
  // ------------------------------------------------------------

  public async listMessages(params: ListMessagesParams) {
    return modules.listMessages(this._apiKey, params);
  }
  public async messageInfoById(messageId: string) {
    return modules.messageInfoById(this._apiKey, messageId);
  }

  // ------------------------------------------------------------
  // Scheduled Messages
  // ------------------------------------------------------------

  public async deleteScheduledMessage(messageId: string) {
    return modules.deleteScheduledMessage(this._apiKey, messageId);
  }
  public async listScheduledMessages(options: ListScheduledMessagesParams) {
    return modules.listScheduledMessages(this._apiKey, options);
  }
  public async singleScheduledMessage(messageId: string) {
    return modules.singleScheduledMessage(this._apiKey, messageId);
  }

  // ------------------------------------------------------------
  // Templates
  // ------------------------------------------------------------

  public async allTemplates(options: AllTemplatesParams) {
    return modules.allTemplates(this._apiKey, options);
  }
  public async deleteTemplate(templateId: string) {
    return modules.deleteTemplate(this._apiKey, templateId);
  }
  public async templateById(templateId: string) {
    return modules.templateById(this._apiKey, templateId);
  }
}
