// import * as modules from "~/modules";

import type { IClient } from "~/types/client";

export class Client implements IClient {
  // private _apiKey: string;

  /**
   * @see https://www.mailersend.com/help/managing-api-tokens
   *
   * @param {String} apiKey - API Access token
   */
  constructor(_apiKey: string) {
    // this._apiKey = apiKey;
  }
}
