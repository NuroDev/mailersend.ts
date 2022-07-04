import { BaseReponse } from "~/types";

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

export interface ListTemplatesRespose
  extends BaseReponse<
    Array<{
      created_at: string;
      id: string;
      image_path: string;
      name: string;
      type: string;
    }>
  > {
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
