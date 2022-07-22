import * as modules from "~/modules";

import type { IClient } from "~/types/client";

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
  // Email
  // ------------------------------------------------------------

  public async sendEmail(options: modules.SendEmailParams) {
    return modules.sendEmail(this._apiKey, options);
  }
  public async sendBulkEmails(options: Array<modules.SendBulkEmailsParams>) {
    return modules.sendBulkEmails(this._apiKey, options);
  }
}
