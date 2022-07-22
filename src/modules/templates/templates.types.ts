import type { BaseResponse } from "~/types/request";
import type { ResponseLinks, ResponseMeta } from "~/types/meta";

export interface ListTemplatesParams extends Record<string, any> {
  domain_id?: string;
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

export type ListTemplatesResponse = BaseResponse<
  Array<{
    created_at: string;
    id: string;
    image_path: string;
    name: string;
    type: string;
  }>
> &
  ResponseLinks &
  ResponseMeta;

export type TemplateByIdResponse = BaseResponse<{
  categories: Array<unknown>;
  category: {
    id: string;
    name: string;
  } | null;
  created_at: string;
  domain: {
    domain_settings: Record<string, any>;
    id: string;
    name: string;
    totals: {
      delivered: number;
      hard_bounced: number;
      sent: number;
      soft_bounced: number;
    };
  } | null;
  id: string;
  image_path: string;
  name: string;
  template_stats: {
    delivered: number;
    last_email_sent_at: string;
    processed: number;
    queued: number;
    rejected: number;
    sent: number;
    total: number;
  };
  type: string;
}>;
