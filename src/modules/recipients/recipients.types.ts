export interface ListRecipientsParams extends Record<string, any> {
  domain_id?: number;
  page?: number;
  /**
   * Min: 10
   *
   * Max: 100
   *
   * @default 25
   */
  limit?: number;
}

export interface SuppressionListParams extends Record<string, any> {
  domain_id?: string;
  /**
   * Min: 10
   *
   * Max: 100
   *
   * @default 25
   */
  limit?: number;
  page?: number;
}

export interface AddToSuppressionListParams {
  domain_id: string;
  patterns: Array<string>;
  recipients: Array<string>;
}

export type DeleteFromSuppressionListParams =
  | {
      ids: Array<string>;
    }
  | {
      all: boolean;
    };
