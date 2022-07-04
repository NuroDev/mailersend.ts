import type { BaseReponse, Event } from "~/types";

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
export interface ListWebhooksResponse
  extends BaseReponse<Array<Record<string, any>>> {
  links: {
    first: string;
    last: string;
    prev: unknown;
    next: unknown;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
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
