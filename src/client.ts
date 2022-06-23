import * as modules from "~/modules";

import type { ClientConfig, IClient, modules as moduleTypes } from "~/types";

export class Client implements IClient {
  private _apiKey: string;

  constructor(config: ClientConfig) {
    this._apiKey = config.apiKey;
  }

  // ------------------------------------------------------------
  // Activity
  // ------------------------------------------------------------

  public async activityList(options: moduleTypes.ActivityListParams) {
    return modules.activityList(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Analytics
  // ------------------------------------------------------------

  public async activityByCountry(options: moduleTypes.ActivityByCountryParams) {
    return modules.activityByCountry(this._apiKey, options);
  }
  public async activityByDate(options: moduleTypes.ActivityByDateParams) {
    return modules.activityByDate(this._apiKey, options);
  }
  public async activityByReadingEnvironment(
    options: moduleTypes.ActivityByReadingEnvironmentParams
  ) {
    return modules.activityByReadingEnvironment(this._apiKey, options);
  }
  public async activityByUserAgent(
    options: moduleTypes.ActivityByUserAgentParams
  ) {
    return modules.activityByUserAgent(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Domains
  // ------------------------------------------------------------

  public async addDomain(options: moduleTypes.AddDomainParams) {
    return modules.addDomain(this._apiKey, options);
  }
  public async deleteDomain(domainId: string) {
    return modules.deleteDomain(this._apiKey, domainId);
  }
  public async dnsRecords(domainId: string) {
    return modules.dnsRecords(this._apiKey, domainId);
  }
  public async domainById(domainId: string) {
    return modules.domainById(this._apiKey, domainId);
  }
  public async listDomains(options: moduleTypes.ListDomainsParams = {}) {
    return modules.listDomains(this._apiKey, options);
  }
  public async recipientsForDomain(
    options: moduleTypes.RecipientsForDomainParams
  ) {
    return modules.recipientsForDomain(this._apiKey, options);
  }
  public async updateDomainSettings(
    options: moduleTypes.UpdateDomainSettingsParams
  ) {
    return modules.updateDomainSettings(this._apiKey, options);
  }
  public async verificationStatus(domainId: string) {
    return modules.verificationStatus(this._apiKey, domainId);
  }

  // ------------------------------------------------------------
  // Email
  // ------------------------------------------------------------

  public async bulkEmailStatus(bulkEmailId: string) {
    return modules.bulkEmailStatus(this._apiKey, bulkEmailId);
  }
  public async sendEmail(options: moduleTypes.SendEmailParams) {
    return modules.sendEmail(this._apiKey, options);
  }
  public async sendBulkEmails(
    options: Array<moduleTypes.SendBulkEmailsParams>
  ) {
    return modules.sendBulkEmails(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Inbound Routing
  // ------------------------------------------------------------

  public async addInboundRoute(options: moduleTypes.AddInboundRouteParams) {
    return modules.addInboundRoute(this._apiKey, options);
  }
  public async deleteInboundRoute(inboundId: string) {
    return modules.deleteInboundRoute(this._apiKey, inboundId);
  }
  public async listInboundRoutes(options: moduleTypes.ListInboundRoutesParams) {
    return modules.listInboundRoutes(this._apiKey, options);
  }
  public async inboundRouteById(inboundId: string) {
    return modules.inboundRouteById(this._apiKey, inboundId);
  }
  public async updateInboundRoute(
    options: moduleTypes.UpdateInboundRouteParams
  ) {
    return modules.updateInboundRoute(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Messages
  // ------------------------------------------------------------

  public async listMessages(params: moduleTypes.ListMessagesParams) {
    return modules.listMessages(this._apiKey, params);
  }
  public async messageInfoById(messageId: string) {
    return modules.messageInfoById(this._apiKey, messageId);
  }

  // ------------------------------------------------------------
  // Recipients
  // ------------------------------------------------------------

  public async addToSuppressionList(
    options: moduleTypes.AddToSuppressionListParams
  ) {
    return modules.addToSuppressionList(this._apiKey, options);
  }
  public async listRecipients(options: moduleTypes.ListRecipientsParams) {
    return modules.listRecipients(this._apiKey, options);
  }
  public async deleteFromSuppressionList(
    options: moduleTypes.DeleteFromSuppressionListParams
  ) {
    return modules.deleteFromSuppressionList(this._apiKey, options);
  }
  public async deleteRecipient(recipientId: string) {
    return modules.deleteRecipient(this._apiKey, recipientId);
  }
  public async recipientById(recipientId: string) {
    return modules.recipientById(this._apiKey, recipientId);
  }
  public async suppressionList(options: moduleTypes.SuppressionListParams) {
    return modules.suppressionList(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Scheduled Messages
  // ------------------------------------------------------------

  public async deleteScheduledMessage(messageId: string) {
    return modules.deleteScheduledMessage(this._apiKey, messageId);
  }
  public async listScheduledMessages(
    options: moduleTypes.ListScheduledMessagesParams
  ) {
    return modules.listScheduledMessages(this._apiKey, options);
  }
  public async scheduledMessageById(messageId: string) {
    return modules.scheduledMessageById(this._apiKey, messageId);
  }

  // ------------------------------------------------------------
  // Templates
  // ------------------------------------------------------------

  public async listTemplates(options: moduleTypes.ListTemplatesParams) {
    return modules.listTemplates(this._apiKey, options);
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

  public async createToken(options: moduleTypes.CreateTokenParams) {
    return modules.createToken(this._apiKey, options);
  }
  public async deleteToken(tokenId: string) {
    return modules.deleteToken(this._apiKey, tokenId);
  }
  public async updateToken(options: moduleTypes.UpdateTokenParams) {
    return modules.updateToken(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Webhooks
  // ------------------------------------------------------------

  public async createWebhook(options: moduleTypes.CreateWebhookParams) {
    return modules.createWebhook(this._apiKey, options);
  }
  public async deleteWebhook(webhookId: string) {
    return modules.deleteWebhook(this._apiKey, webhookId);
  }
  public async listWebhooks(options: moduleTypes.ListWebhooksParams) {
    return modules.listWebhooks(this._apiKey, options);
  }
  public async updateWebhook(options: moduleTypes.UpdateWebhookParams) {
    return modules.updateWebhook(this._apiKey, options);
  }
  public async webhookById(webhookId: string) {
    return modules.webhookById(this._apiKey, webhookId);
  }
}
