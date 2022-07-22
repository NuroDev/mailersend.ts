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
  // Email
  // ------------------------------------------------------------

  public async sendEmail(options: modules.SendEmailParams) {
    return modules.sendEmail(this._apiKey, options);
  }
  public async sendBulkEmails(options: Array<modules.SendBulkEmailsParams>) {
    return modules.sendBulkEmails(this._apiKey, options);
  }
}
