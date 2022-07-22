import type { EmailParams } from "~/types/email";

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
