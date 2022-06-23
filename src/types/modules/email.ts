import type { EmailParams } from "~/types";

export interface BulkEmailStatusResponse {
  created_at: string;
  id: string;
  messages_id: string;
  state: string;
  suppressed_recipients_count: number;
  suppressed_recipients: unknown;
  total_recipients_count: number;
  updated_at: string;
  validation_errors_count: number;
  validation_errors: unknown;
}

export type SendEmailParams = EmailParams & Record<string, any>;

export interface SendEmailResponse {
  errors?: Record<string, Array<string>>;
  message?: string;
  warnings?: Array<{
    type: string;
    warning: string;
    recipients: Array<{
      email: string;
      name: string;
      reasons: Array<string>;
    }>;
  }>;
}

export type SendBulkEmailsParams = EmailParams & Record<string, any>;

export interface SendBulkEmailsResponse {
  bulk_email_id: string;
  message: string;
}
