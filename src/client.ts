import * as modules from "~/modules";

import type {
  ActivityByCountryParams,
  ActivityByDateParams,
  ActivityByReadingEnvironmentParams,
  ActivityByUserAgentParams,
  ActivityListParams,
  AddDomainParams,
  AllTemplatesParams,
  DeleteDomainParams,
  DnsRecordsParams,
  ListDomainsParams,
  ListScheduledMessagesParams,
  RecipientsForDomainParams,
  SendBulkParams,
  SendParams,
  SingleDomainParams,
  UpdateDomainSettingsParams,
  VerificationStatusParams,
} from "~/modules";
import type { ClientConfig, IClient } from "~/types";

export class Client implements IClient {
  private _apiKey: string;

  constructor(config: ClientConfig) {
    this._apiKey = config.apiKey;
  }

  public async activityList(options: ActivityListParams) {
    return modules.getActivityList(this._apiKey, options);
  }
  public async activityByCountry(options: ActivityByCountryParams) {
    return modules.getActivityByCountry(this._apiKey, options);
  }
  public async activityByDate(options: ActivityByDateParams) {
    return modules.getActivityByDate(this._apiKey, options);
  }
  public async activityByReadingEnvironment(
    options: ActivityByReadingEnvironmentParams
  ) {
    return modules.getActivityByReadingEnvironment(this._apiKey, options);
  }
  public async activityByUserAgent(options: ActivityByUserAgentParams) {
    return modules.getActivityByUserAgent(this._apiKey, options);
  }

  public async addDomain(options: AddDomainParams) {
    return modules.addDomain(this._apiKey, options);
  }
  public async deleteDomain(options: DeleteDomainParams) {
    return modules.deleteDomain(this._apiKey, options);
  }
  public async dnsRecords(options: DnsRecordsParams) {
    return modules.getDnsRecords(this._apiKey, options);
  }
  public async recipientsForDomain(options: RecipientsForDomainParams) {
    return modules.getRecipientsForDomain(this._apiKey, options);
  }
  public async singleDomain(options: SingleDomainParams) {
    return modules.getSingleDomain(this._apiKey, options);
  }
  public async verificationStatus(options: VerificationStatusParams) {
    return modules.getVerificationStatus(this._apiKey, options);
  }
  public async listDomains(options: ListDomainsParams) {
    return modules.listDomains(this._apiKey, options);
  }
  public async updateDomainSettings(options: UpdateDomainSettingsParams) {
    return modules.updateDomainSettings(this._apiKey, options);
  }

  public async bulkEmailStatus(bulkEmailId: string) {
    return modules.bulkEmailStatus(this._apiKey, bulkEmailId);
  }
  public async send(options: SendParams) {
    return modules.send(this._apiKey, options);
  }
  public async sendBulk(options: Array<SendBulkParams>) {
    return modules.sendBulk(this._apiKey, options);
  }

  public async deleteScheduledMessage(messageId: string) {
    return modules.deleteScheduledMessage(this._apiKey, messageId);
  }
  public async listScheduledMessages(options: ListScheduledMessagesParams) {
    return modules.listScheduledMessages(this._apiKey, options);
  }
  public async singleScheduledMessage(messageId: string) {
    return modules.singleScheduledMessage(this._apiKey, messageId);
  }

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
