import type { BaseResponse } from "~/types/request";
import type { ResponseLinks, ResponseMeta } from "~/types/meta";

export interface ListActivityParams extends Record<string, any> {
  /**
   * Timestamp is assumed to be UTC.
   *
   * Must be lower than date_to.
   */
  date_from?: number;
  /**
   * Timestamp is assumed to be UTC.
   *
   * Must be higher than date_from.
   */
  date_to?: number;
  domainId: string;
  event?: Array<Event>;
  /**
   * Min: **10**
   *
   * Max: **100**
   *
   * @default 25
   */
  limit?: number;
  page?: number;
}

export interface Activity {
  id: string;
  created_at: string;
  updated_at: string;
  type: string;
  email: {
    created_at: string;
    from: string;
    html: string;
    id: string;
    recipient: {
      created_at: string;
      deleted_at: string;
      email: string;
      id: string;
      updated_at: string;
    };
    status: string;
    subject: string;
    tags: unknown;
    text: string;
    updated_at: string;
  };
}

export interface ListActivityResponse extends BaseResponse<Array<Activity>> {
  links?: {
    first: string;
    last: string;
    prev: unknown;
    next: unknown;
  };
  meta?: {
    current_page: number;
    from: number;
    path: string;
    per_page: number;
    to: number;
  };
}

export interface ListSmsActivityParams extends Record<string, any> {
  date_from?: number;
  date_to?: number;
  /**
   * Min: 10
   *
   * Max: 100
   *
   * @default 25
   */
  limit?: number;
  page?: number;
  sms_number_id?: string;
  status?: Array<"processed" | "queued" | "sent" | "delivered" | "failed">;
}

export interface SmsActivity {
  content: string;
  created_at: string;
  from: string;
  sms_message_id: string;
  status: string;
  to: string;
}

export type ListSmsActivityResponse = BaseResponse<Array<SmsActivity>> &
  ResponseLinks &
  ResponseMeta;
