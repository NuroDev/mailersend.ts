import type { BaseReponse, Event, ResponseLinks, ResponseMeta } from "~/types";

export interface CreateWebhookParams extends Record<string, any> {
  domain_id: string;
  enabled?: boolean;
  events: Array<Event>;
  /**
   * Max: 191
   */
  name: string;
  url: string;
}

export interface DeleteWebhookResponse {
  success: boolean;
}

export interface ListWebhooksParams extends Record<string, any> {
  domain_id: string;
}

// TODO: Fix webhook array object type
export type ListWebhooksResponse = BaseReponse<Array<Record<string, any>>> &
  ResponseLinks &
  ResponseMeta;

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
