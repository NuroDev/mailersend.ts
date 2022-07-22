import type { BaseReponse } from "~/types/request";
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

export type ListTemplatesResponse = BaseReponse<
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

export type TemplateByIdResponse = BaseReponse<{
  categories: Array<unknown>;
  category: unknown;
  created_at: string;
  domain: null;
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
