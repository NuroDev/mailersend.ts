import type { BaseResponse } from "~/types/request";
import type { ResponseLinks, ResponseMeta } from "~/types/meta";

export interface ListMessagesParams extends Record<string, any> {
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

export interface Message {
  created_at: string;
  domain: {
    created_at: string;
    dkim: boolean;
    domain_settings: {
      custom_tracking_enabled: boolean;
      custom_tracking_subdomain: string;
      send_paused: boolean;
      track_clicks: boolean;
      track_content: boolean;
      track_opens: boolean;
      track_unsubscribe_html: string;
      track_unsubscribe_plain: string;
      track_unsubscribe: boolean;
    };
    has_not_queued_messages: boolean;
    id: string;
    is_cname_active: boolean;
    is_cname_verified: boolean;
    is_dns_active: boolean;
    is_tracking_allowed: boolean;
    is_verified: boolean;
    mx: boolean;
    name: string;
    not_queued_messages_count: number;
    spf: boolean;
    tracking: boolean;
    updated_at: string;
  };
  emails: Array<unknown>;
  id: string;
  updated_at: string;
}

export type TrimmedMessage = Pick<Message, "created_at" | "id" | "updated_at">;

export type ListMessagesResponse = BaseResponse<Array<TrimmedMessage>> &
  ResponseLinks &
  ResponseMeta;

export type MessageInfoByIdResponse = BaseResponse<Message>;

export interface ListSmsMessagesParams extends Record<string, any> {
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

export interface SmsMessage {
  id: string;
  from: string;
  to: Array<string>;
  text: string;
  paused: boolean;
  created_at: string;
  sms: Array<{
    error_description: unknown | null;
    error_type: unknown | null;
    from: string;
    id: string;
    segment_count: number;
    status: string;
    text: string;
    to: string;
  }>;
}

export type ListSmsMessagesData = Pick<
  SmsMessage,
  "created_at" | "from" | "id" | "paused" | "text" | "to"
>;

export type ListSmsMessagesResponse = BaseResponse<Array<ListSmsMessagesData>>;

export type SmsMessageByIdResponse = BaseResponse<SmsMessage>;
