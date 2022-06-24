import type { Event } from "~/types";

export interface ListWebhooksParams extends Record<string, any> {
  domain_id: string;
}

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
