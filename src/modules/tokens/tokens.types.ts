import type { BaseResponse } from "~/types/request";

export interface CreateTokenParams extends Record<string, any> {
  domain_id: string;
  name: string;
  scopes: Array<
    | "email_full"
    | "domains_read"
    | "domains_full"
    | "activity_read"
    | "activity_full"
    | "analytics_read"
    | "analytics_full"
    | "tokens_full"
    | "webhooks_full"
    | "templates_full"
  >;
}

export interface Token {
  accessToken: string;
  created_at: string;
  id: string;
  name: string;
}

export type CreateTokenResponse = BaseResponse<Token>;

export interface UpdateTokenParams extends Record<string, any> {
  status: "pause" | "unpause";
  tokenId: string;
}

export interface UpdateTokenData {
  created_at: string;
  id: string;
  name: string;
  status: string;
}

export type UpdateTokenResponse = BaseResponse<UpdateTokenData>;

export interface DeleteTokenResponse {
  success: boolean;
}
