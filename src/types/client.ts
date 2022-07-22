import * as modules from "~/modules";

export interface IClient {
  // ------------------------------------------------------------
  // Email
  // ------------------------------------------------------------

  /**
   * Send Email
   *
   * @description This endpoint allows you to send an asynchronous email.
   *
   * It returns the status of the email sent with an X-Message-Id that can be used to continuously query for the status using the Email API.
   *
   * @see https://developers.mailersend.com/api/v1/email.html#send-an-email
   *
   * @param {Object} options - Send email options
   */
  sendEmail(
    options: modules.SendEmailParams
  ): ReturnType<typeof modules.sendEmail>;

  /**
   * Send Bulk Emails
   *
   * @description This endpoint allows you to send multiple asynchronous emails.
   *
   * It returns the status of the request sent with a `bulk_email_id` that can be used to continuously query for the status using the Email API.
   *
   * To prevent long waiting periods for a response, each email validation is done after the request and then the result is stored.
   *
   * If there is any validation error, you can query it using the `bulk_email_id` provided.
   *
   * @see https://developers.mailersend.com/api/v1/email.html#send-bulk-emails
   *
   * @param {Object} options - Send bulk emails options
   */
  sendBulkEmails(
    options: Array<modules.SendBulkEmailsParams>
  ): ReturnType<typeof modules.sendBulkEmails>;
}
