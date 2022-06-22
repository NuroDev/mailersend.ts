import {
  getActivityByCountry,
  getActivityByDate,
  getActivityByReadingEnvironment,
  getActivityByUserAgent,
  getActivityList,
} from "~/modules";

import type {
  ActivityListParams,
  ActivityByCountryParams,
  ActivityByDateParams,
  ActivityByReadingEnvironmentParams,
  ActivityByUserAgentParams,
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
}
