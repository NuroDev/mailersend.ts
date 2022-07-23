import type { BaseResponse } from "~/types/request";
import type { ResponseLinks, ResponseMeta } from "~/types/meta";

export type WebhookEvent =
  | "activity.clicked"
  | "activity.delivered"
  | "activity.hard_bounced"
  | "activity.opened"
  | "activity.sent"
  | "activity.soft_bounced"
  | "activity.spam_complaint"
  | "activity.unsubscribed";

export interface ListWebhooksParams extends Record<string, any> {
  domain_id: string;
}

export interface Webhook {
  created_at: string;
  domain: {
    created_at: string;
    dkim: boolean;
    domain_settings: {
      custom_tracking_enabled: boolean;
      custom_tracking_subdomain: string;
      inbound_routing_enabled: boolean;
      inbound_routing_subdomain: string;
      precedence_bulk: boolean;
      return_path_subdomain: string;
      send_paused: boolean;
      track_clicks: boolean;
      track_content: boolean;
      track_opens: boolean;
      track_unsubscribe_html_enabled: boolean;
      track_unsubscribe_html: string;
      track_unsubscribe_plain_enabled: boolean;
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
    name: string;
    not_queued_messages_count: number;
    spf: boolean;
    totals: {
      delivered: number;
      sent: number;
    };
    tracking: boolean;
    updated_at: string;
  };
  editable: boolean | null;
  enabled: boolean | null;
  events: Array<WebhookEvent>;
  id: string;
  name: string;
  updated_at: string;
  url: string;
}

export type ListWebhooksResponse = BaseResponse<Array<Webhook>> &
  ResponseLinks &
  ResponseMeta;

export type WebhookByIdResponse = BaseResponse<Webhook>;

export interface CreateWebhookParams extends Record<string, any> {
  domain_id: string;
  enabled?: boolean;
  events: Array<WebhookEvent>;
  /**
   * Max: 191
   */
  name: string;
  url: string;
}

export type CreateWebhookResponse = BaseResponse<Webhook>;

export interface DeleteWebhookResponse {
  success: boolean;
}

export interface UpdateWebhookParams extends Record<string, any> {
  enabled?: boolean;
  events?: Array<Event>;
  /**
   * Max: 191
   */
  name?: string;
  url?: string;
  webhookId: string;
}

export type UpdateWebhookResponse = BaseResponse<{}>;
