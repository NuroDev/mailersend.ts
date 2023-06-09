import type { BaseResponse } from "~/types/request";
import type { EmailStatus } from "~/modules/email";
import type { ResponseLinks, ResponseMeta } from "~/types/meta";

interface RecipientDomain {
  created_at: string;
  id: string;
  name: string;
  updated_at: string;
}

export interface ListRecipientsParams extends Record<string, any> {
  domain_id?: number;
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

export interface ListRecipientsData extends RecipientDomain {
  deleted_at: string;
}

export type ListRecipientsResponse = BaseResponse<Array<ListRecipientsData>> &
  ResponseLinks &
  ResponseMeta;

export interface ListSmsRecipientsParams extends Record<string, any> {
  /**
   * Min: 10
   *
   * Max: 100
   *
   * Default 25
   */
  limit?: number;
  page?: number;
  sms_number_id?: string;
  status?: "active" | "opt_out";
}

export interface SmsRecipient {
  created_at: string;
  id: string;
  number: string;
  status: string;
}

export type ListSmsRecipientsResponse = BaseResponse<Array<SmsRecipient>>;

export interface RecipientByIdData {
  created_at: string;
  deleted_at: string;
  domain: RecipientDomain;
  email: string;
  emails: Array<{
    created_at: string;
    from: string;
    html: string | null;
    id: string;
    status: EmailStatus;
    subject: string;
    tags: Array<unknown> | null;
    text: string | null;
    updated_at: string;
  }>;
  id: string;
  updated_at: string;
}

export type RecipientByIdResponse = BaseResponse<RecipientByIdData>;

export interface SmsRecipientByIdData extends SmsRecipient {
  sms: Array<{
    created_at: string;
    error_description: string | null;
    error_type: string | null;
    from: string;
    id: string;
    segment_count: number;
    status: string;
    text: string;
    to: string;
  }>;
}

export type SmsRecipientByIdResponse = BaseResponse<SmsRecipientByIdData>;

export interface DeleteRecipientResponse {
  success: boolean;
}

export interface SuppressionListParams extends Record<string, any> {
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
}

export interface ListSuppressionsData {
  created_at: string;
  domain: RecipientDomain;
  id: string;
  pattern: string;
  type: string;
  updated_at: string;
}

export type ListSuppressionsResponse = BaseResponse<ListSuppressionsData>;

export interface AddToSuppressionListParams {
  domain_id: string;
  patterns: Array<string>;
  recipients: Array<string>;
}

export interface AddToSuppressionListData {
  created_at: string;
  id: string;
  pattern: string;
  type: string;
  updated_at: string;
}

export type AddToSuppressionListResponse = BaseResponse<
  Array<AddToSuppressionListData>
>;

export type DeleteFromSuppressionListParams =
  | {
      ids: Array<string>;
    }
  | {
      all: boolean;
    };

export type DeleteFromSuppressionListResponse = Array<unknown>;
