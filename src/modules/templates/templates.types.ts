import { BaseReponse, ResponseLinks, ResponseMeta } from "~/types";

export interface DeleteTemplateResponse {
  success: boolean;
}

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

export type ListTemplatesRespose = BaseReponse<
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
  category: {
    id: string;
    name: string;
  };
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
  };
  id: string;
  image_path: string;
  name: string;
  template_stats: {
    delivered: number;
    last_email_sent_at: unknown | null;
    processed: number;
    queued: number;
    rejected: number;
    sent: number;
    total: number;
  };
  type: string;
}>;
