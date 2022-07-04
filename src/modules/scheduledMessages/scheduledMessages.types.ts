import type { BaseReponse, ScheduleStatus } from "~/types";

export interface DeleteScheduledMessageResponse {
  success: boolean;
}

export interface ListScheduledMessagesParams extends Record<string, any> {
  domain_id?: string;
  /**
   * Min: 10
   *
   * Max: 100
   *
   * @default 25
   */
  limit?: number;
  page?: number;
  status?: ScheduleStatus;
}

export interface ListScheduledMessagesResponse
  extends BaseReponse<
    Array<{
      created_at: string;
      message_id: string;
      send_at: string;
      status_message: unknown | null;
      status: string;
      subject: string;
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

export interface ScheduledMessageByIdResponse
  extends BaseReponse<{
    created_at: string;
    domain: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
    };
    message_id: string;
    message: {
      id: string;
      created_at: string;
      updated_at: string;
    };
    send_at: string;
    status_message: unknown | null;
    status: string;
    subject: string;
  }> {}
