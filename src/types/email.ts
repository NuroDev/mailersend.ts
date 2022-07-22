export interface Attachment<T = string> {
  content: T;
  filename: string;
  id?: string;
}

export interface Recipient {
  email: string;
  name?: string;
}

/**
 * @see https://developers.mailersend.com/api/v1/email.html#send-an-email
 */
export type EmailParams = {
  attachments?: Array<Attachment>;
  bcc?: Array<Recipient>;
  cc?: Array<Recipient>;
  from: Recipient;
  personalization?: Array<{
    email: string;
    data: Record<string, any>;
  }>;
  precedence_bulk?: boolean;
  recipients?: Array<Recipient>;
  reply_to?: Recipient;
  send_at?: number;
  subject: string;
  tags?: Array<string>;
  to: Array<Recipient>;
  variables?: Array<{
    email: string;
    substitutions: Array<{
      var: string;
      value: string | number | boolean;
    }>;
  }>;
} & (
  | {
      html: string;
      text: string;
    }
  | {
      template_id: string;
    }
);
