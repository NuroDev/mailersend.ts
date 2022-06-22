import {
  addDomain,
  bulkEmailStatus,
  deleteDomain,
  deleteScheduledMessage,
  getActivityByCountry,
  getActivityByDate,
  getActivityByReadingEnvironment,
  getActivityByUserAgent,
  getActivityList,
  getDnsRecords,
  getRecipientsForDomain,
  getSingleDomain,
  getVerificationStatus,
  listDomains,
  listScheduledMessages,
  send,
  sendBulk,
  singleScheduledMessage,
  updateDomainSettings,
} from "~/modules";

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
    return getActivityList(this._apiKey, options);
  }
  public async activityByCountry(options: ActivityByCountryParams) {
    return getActivityByCountry(this._apiKey, options);
  }
  public async activityByDate(options: ActivityByDateParams) {
    return getActivityByDate(this._apiKey, options);
  }
  public async activityByReadingEnvironment(
    options: ActivityByReadingEnvironmentParams
  ) {
    return getActivityByReadingEnvironment(this._apiKey, options);
  }
  public async activityByUserAgent(options: ActivityByUserAgentParams) {
    return getActivityByUserAgent(this._apiKey, options);
  }

  public async addDomain(options: AddDomainParams) {
    return addDomain(this._apiKey, options);
  }
  public async deleteDomain(options: DeleteDomainParams) {
    return deleteDomain(this._apiKey, options);
  }
  public async dnsRecords(options: DnsRecordsParams) {
    return getDnsRecords(this._apiKey, options);
  }
  public async recipientsForDomain(options: RecipientsForDomainParams) {
    return getRecipientsForDomain(this._apiKey, options);
  }
  public async singleDomain(options: SingleDomainParams) {
    return getSingleDomain(this._apiKey, options);
  }
  public async verificationStatus(options: VerificationStatusParams) {
    return getVerificationStatus(this._apiKey, options);
  }
  public async listDomains(options: ListDomainsParams) {
    return listDomains(this._apiKey, options);
  }
  public async updateDomainSettings(options: UpdateDomainSettingsParams) {
    return updateDomainSettings(this._apiKey, options);
  }

  public async bulkEmailStatus(bulkEmailId: string) {
    return bulkEmailStatus(this._apiKey, bulkEmailId);
  }
  public async send(options: SendParams) {
    return send(this._apiKey, options);
  }
  public async sendBulk(options: Array<SendBulkParams>) {
    return sendBulk(this._apiKey, options);
  }

  public async deleteScheduledMessage(messageId: string) {
    return deleteScheduledMessage(this._apiKey, messageId);
  }
  public async listScheduledMessages(options: ListScheduledMessagesParams) {
    return listScheduledMessages(this._apiKey, options);
  }
  public async singleScheduledMessage(messageId: string) {
    return singleScheduledMessage(this._apiKey, messageId);
  }
}
