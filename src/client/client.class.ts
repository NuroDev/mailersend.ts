import * as modules from "~/modules";

import type { IClient } from ".";

export class Client implements IClient {
  private _apiKey: string;

  /**
   * @see https://www.mailersend.com/help/managing-api-tokens
   *
   * @param {String} apiKey - API Access token
   */
  constructor(apiKey: string) {
    this._apiKey = apiKey;
  }

  // ------------------------------------------------------------
  // Activity
  // ------------------------------------------------------------

  public async listActivity(options: modules.ListActivityParams) {
    return modules.listActivity(this._apiKey, options);
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
  // Domain
  // ------------------------------------------------------------

  public async addDomain(options: modules.AddDomainParams) {
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
  public async listDomains(options: modules.ListDomainsParams = {}) {
    return modules.listDomains(this._apiKey, options);
  }
  public async recipientsForDomain(options: modules.RecipientsForDomainParams) {
    return modules.recipientsForDomain(this._apiKey, options);
  }
  public async updateDomain(options: modules.UpdateDomainParams) {
    return modules.updateDomain(this._apiKey, options);
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
  public async sendEmail(options: modules.SendEmailParams) {
    return modules.sendEmail(this._apiKey, options);
  }
  public async sendBulkEmails(options: Array<modules.SendBulkEmailsParams>) {
    return modules.sendBulkEmails(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Messages
  // ------------------------------------------------------------

  public async listMessages(
    params: modules.ListMessagesParams = {
      limit: 25,
    }
  ) {
    return modules.listMessages(this._apiKey, params);
  }
  public async messageById(messageId: string) {
    return modules.messageById(this._apiKey, messageId);
  }

  // ------------------------------------------------------------
  // Recipients
  // ------------------------------------------------------------

  public async listRecipients(options: modules.ListRecipientsParams = {}) {
    return modules.listRecipients(this._apiKey, options);
  }
  public async recipientById(recipientId: string) {
    return modules.recipientById(this._apiKey, recipientId);
  }
  public async deleteRecipient(recipientId: string) {
    return modules.deleteRecipient(this._apiKey, recipientId);
  }
  public async listSuppressions(options: modules.SuppressionListParams = {}) {
    return modules.listSuppressions(this._apiKey, options);
  }
  public async addToSuppressionList(
    options: modules.AddToSuppressionListParams
  ) {
    return modules.addToSuppressionList(this._apiKey, options);
  }
  public async deleteFromSuppressionList(
    options: modules.DeleteFromSuppressionListParams
  ) {
    return modules.deleteFromSuppressionList(this._apiKey, options);
  }

  // ------------------------------------------------------------
  // Scheduled Messages
  // ------------------------------------------------------------

  public async deleteScheduledMessage(messageId: string) {
    return modules.deleteScheduledMessage(this._apiKey, messageId);
  }
  public async listScheduledMessages(
    options: modules.ListScheduledMessagesParams = {}
  ) {
    return modules.listScheduledMessages(this._apiKey, options);
  }
  public async scheduledMessageById(messageId: string) {
    return modules.scheduledMessageById(this._apiKey, messageId);
  }

  // ------------------------------------------------------------
  // Templates
  // ------------------------------------------------------------

  public async listTemplates(options: modules.ListTemplatesParams = {}) {
    return modules.listTemplates(this._apiKey, options);
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
