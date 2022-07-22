import type { BaseReponse } from "~/types/request";
import type { ResponseLinks, ResponseMeta } from "~/types/meta";

export interface ListSmsPhoneNumbersParams extends Record<string, any> {
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

export interface ListSmsPhoneNumbersData {
  created_at: string;
  id: string;
  paused: boolean;
  telephone_number: string;
}

export type ListSmsPhoneNumbersResponse = BaseReponse<
  Array<ListSmsPhoneNumbersData>
> &
  ResponseMeta &
  ResponseLinks;
