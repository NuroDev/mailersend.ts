import type { BaseResponse } from "~/types/request";
import type { ResponseLinks, ResponseMeta } from "~/types/meta";

export interface ListPhoneNumbersParams extends Record<string, any> {
  /**
   * Min: 10
   *
   * Max: 100
   *
   * @default 25
   */
  limit?: number;
  page?: number;
  paused?: boolean;
}

export interface PhoneNumber {
  created_at: string;
  id: string;
  paused: boolean;
  telephone_number: string;
}

export type ListPhoneNumbersResponse = BaseResponse<Array<PhoneNumber>> &
  ResponseMeta &
  ResponseLinks;

export type PhoneNumberByIdResponse = BaseResponse<PhoneNumber>;

export interface UpdatePhoneNumberParams extends Record<string, any> {
  paused?: boolean;
  phoneNumberId: string;
}

export type UpdatePhoneNumberResponse = BaseResponse<PhoneNumber>;

export interface DeletePhoneNumberResponse {
  success: boolean;
}
