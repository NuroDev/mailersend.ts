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
  // Templates
  // ------------------------------------------------------------

  public async listTemplates(options: modules.ListTemplatesParams) {
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
}
