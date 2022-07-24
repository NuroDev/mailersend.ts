import type { BaseResponse } from "~/types/request";
import type { ResponseLinks, ResponseMeta, ScheduleStatus } from "~/types/meta";

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

export interface ListScheduledMessageData {
  created_at: string;
  message_id: string;
  send_at: string;
  status_message: unknown | null;
  status: string;
  subject: string;
}

export type ListScheduledMessagesResponse = BaseResponse<
  Array<ListScheduledMessageData>
> &
  ResponseLinks &
  ResponseMeta;

export interface ScheduledMessageByIdResponse
  extends BaseResponse<{
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
