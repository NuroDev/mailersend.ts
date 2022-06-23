import * as modules from "~/modules";

import type { ClientConfig, IClient } from "~/types";

export class Client implements IClient {
  private _apiKey: string;

  constructor(config: ClientConfig) {
    this._apiKey = config.apiKey;
  }

  // ------------------------------------------------------------
  // Activity
  // ------------------------------------------------------------

  public async activityList(options: modules.ActivityListParams) {
    return modules.activityList(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Analytics
  // ------------------------------------------------------------

  public async activityByCountry(options: modules.ActivityByCountryParams) {
    return modules.activityByCountry(this._apiKey, options);
  }
  public async activityByDate(options: modules.ActivityByDateParams) {
    return modules.activityByDate(this._apiKey, options);
  }
  public async activityByReadingEnvironment(
    options: modules.ActivityByReadingEnvironmentParams
  ) {
    return modules.activityByReadingEnvironment(this._apiKey, options);
  }
  public async activityByUserAgent(options: modules.ActivityByUserAgentParams) {
    return modules.activityByUserAgent(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Domains
  // ------------------------------------------------------------

  public async addDomain(options: modules.AddDomainParams) {
    return modules.addDomain(this._apiKey, options);
  }
  public async deleteDomain(domainId: string) {
    return modules.deleteDomain(this._apiKey, domainId);
  }
  public async dnsRecords(options: modules.DnsRecordsParams) {
    return modules.dnsRecords(this._apiKey, options);
  }
  public async recipientsForDomain(options: modules.RecipientsForDomainParams) {
    return modules.recipientsForDomain(this._apiKey, options);
  }
  public async domainById(domainId: string) {
    return modules.domainById(this._apiKey, domainId);
  }
  public async verificationStatus(domainId: string) {
    return modules.verificationStatus(this._apiKey, domainId);
  }
  public async listDomains(options: modules.ListDomainsParams = {}) {
    return modules.listDomains(this._apiKey, options);
  }
  public async updateDomainSettings(
    options: modules.UpdateDomainSettingsParams
  ) {
    return modules.updateDomainSettings(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Email
  // ------------------------------------------------------------

  public async bulkEmailStatus(bulkEmailId: string) {
    return modules.bulkEmailStatus(this._apiKey, bulkEmailId);
  }
  public async send(options: modules.SendParams) {
    return modules.send(this._apiKey, options);
  }
  public async sendBulk(options: Array<modules.SendBulkParams>) {
    return modules.sendBulk(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Inbound Routing
  // ------------------------------------------------------------

  public async addInboundRoute(options: modules.AddInboundRouteParams) {
    return modules.addInboundRoute(this._apiKey, options);
  }
  public async deleteInboundRoute(inboundId: string) {
    return modules.deleteInboundRoute(this._apiKey, inboundId);
  }
  public async listInboundRoutes(options: modules.ListInboundRoutesParams) {
    return modules.listInboundRoutes(this._apiKey, options);
  }
  public async inboundRouteById(inboundId: string) {
    return modules.inboundRouteById(this._apiKey, inboundId);
  }
  public async updateInboundRoute(options: modules.UpdateInboundRouteParams) {
    return modules.updateInboundRoute(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Messages
  // ------------------------------------------------------------

  public async listMessages(params: modules.ListMessagesParams) {
    return modules.listMessages(this._apiKey, params);
  }
  public async messageInfoById(messageId: string) {
    return modules.messageInfoById(this._apiKey, messageId);
  }

  // ------------------------------------------------------------
  // Recipients
  // ------------------------------------------------------------

  public async addToSuppressionList(
    options: modules.AddToSuppressionListParams
  ) {
    return modules.addToSuppressionList(this._apiKey, options);
  }
  public async allRecipients(options: modules.AllRecipientsParams) {
    return modules.allRecipients(this._apiKey, options);
  }
  public async deleteFromSuppressionList(
    options: modules.DeleteFromSuppressionListParams
  ) {
    return modules.deleteFromSuppressionList(this._apiKey, options);
  }
  public async deleteRecipient(recipientId: string) {
    return modules.deleteRecipient(this._apiKey, recipientId);
  }
  public async recipientById(recipientId: string) {
    return modules.recipientById(this._apiKey, recipientId);
  }
  public async suppressionList(options: modules.SuppressionListParams) {
    return modules.suppressionList(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Scheduled Messages
  // ------------------------------------------------------------

  public async deleteScheduledMessage(messageId: string) {
    return modules.deleteScheduledMessage(this._apiKey, messageId);
  }
  public async listScheduledMessages(
    options: modules.ListScheduledMessagesParams
  ) {
    return modules.listScheduledMessages(this._apiKey, options);
  }
  public async singleScheduledMessage(messageId: string) {
    return modules.singleScheduledMessage(this._apiKey, messageId);
  }

  // ------------------------------------------------------------
  // Templates
  // ------------------------------------------------------------

  public async allTemplates(options: modules.AllTemplatesParams) {
    return modules.allTemplates(this._apiKey, options);
  }
  public async deleteTemplate(templateId: string) {
    return modules.deleteTemplate(this._apiKey, templateId);
  }
  public async templateById(templateId: string) {
    return modules.templateById(this._apiKey, templateId);
  }

  // ------------------------------------------------------------
  // Tokens
  // ------------------------------------------------------------

  public async createToken(options: modules.CreateTokenParams) {
    return modules.createToken(this._apiKey, options);
  }
  public async deleteToken(tokenId: string) {
    return modules.deleteToken(this._apiKey, tokenId);
  }
  public async updateToken(options: modules.UpdateTokenParams) {
    return modules.updateToken(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Webhooks
  // ------------------------------------------------------------

  public async createWebhook(options: modules.CreateWebhookParams) {
    return modules.createWebhook(this._apiKey, options);
  }
  public async deleteWebhook(webhookId: string) {
    return modules.deleteWebhook(this._apiKey, webhookId);
  }
  public async listWebhooks(options: modules.ListWebhooksParams) {
    return modules.listWebhooks(this._apiKey, options);
  }
  public async updateWebhook(options: modules.UpdateWebhookParams) {
    return modules.updateWebhook(this._apiKey, options);
  }
  public async webhookById(webhookId: string) {
    return modules.webhookById(this._apiKey, webhookId);
  }
}
