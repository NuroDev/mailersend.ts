import type { BaseResponse } from "~/types/request";
import type { EmailParams } from "~/types/email";

/**
 * @see https://developers.mailersend.com/general.html#activity-status-list
 */
export type EmailStatus =
  | "clicked"
  | "delivered"
  | "hard_bounced"
  | "junk"
  | "opened"
  | "processed"
  | "queued"
  | "sent"
  | "soft_bounced"
  | "spam_complaints"
  | "unsubscribed";

export interface BulkEmailStatusData {
  created_at: string;
  id: string;
  messages_id: string | null;
  state: EmailStatus;
  suppressed_recipients_count: number;
  suppressed_recipients: unknown | null;
  total_recipients_count: number;
  updated_at: string;
  validation_errors_count: number;
  validation_errors: unknown | null;
}

export type BulkEmailStatusResponse = BaseResponse<BulkEmailStatusData>;

export type SendEmailParams = Omit<EmailParams, "recipients"> &
  Record<string, any>;

export type SendEmailResponse =
  | {
      success: true;
    }
  | {
      errors: Record<string, Array<string>>;
      message: string;
      success: false;
      warning?: Array<{
        type: string;
        warning: string;
        recipients: Array<{
          email: string;
          name: string;
          reasons: Array<string>;
        }>;
      }>;
    };

export type SendBulkEmailsParams = EmailParams & Record<string, any>;

export interface SendBulkEmailsResponse {
  bulk_email_id: string;
  message: string;
}
