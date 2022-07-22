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

export type ListMessage = Pick<Message, "created_at" | "id" | "updated_at">;

export type ListMessagesResponse = BaseResponse<Array<ListMessage>> &
  ResponseLinks &
  ResponseMeta;

export type MessageByIdResponse = BaseResponse<Message>;
