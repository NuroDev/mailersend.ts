import { getActivityList } from "~/modules";

import type { ActivityListParams } from "~/modules";
import type { ClientConfig, IClient } from "~/types";

/**
 * Client
 *
 * @description Create a new MailerSend client instance that provides all module API methods
 */
export class Client implements IClient {
  private _apiKey: string;

  constructor(config: ClientConfig) {
    this._apiKey = config.apiKey;
  }

  public async activityList(options: ActivityListParams) {
    return getActivityList(this._apiKey, options);
  }
}
