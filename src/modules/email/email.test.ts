import { describe, it, expect, beforeAll } from "vitest";

import "dotenv/config";

import { bulkEmailStatus, sendEmail, sendBulkEmails } from ".";

const {
  MAILERSEND_API_KEY,
  MAILERSEND_TEST_RECIPIENT_EMAIL,
  MAILERSEND_TEST_SENDER_EMAIL,
} = process.env as Record<string, string>;

describe("Email", () => {
  let bulkEmailId: string;

  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";
  });

  it.concurrent("Send Email", async () => {
    if (!MAILERSEND_TEST_SENDER_EMAIL || !MAILERSEND_TEST_RECIPIENT_EMAIL)
      throw "No or invalid test email addresses found in environment variables";

    try {
      const sendEmailResponse = await sendEmail(MAILERSEND_API_KEY, {
        from: {
          email: MAILERSEND_TEST_SENDER_EMAIL,
          name: "TEST SENDER",
        },
        to: [
          {
            email: MAILERSEND_TEST_RECIPIENT_EMAIL,
            name: "TEST RECIPIENT",
          },
        ],
        subject: `TEST EMAIL - ${new Date().toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}`,
        html: `<h1>TEST EMAIL</h1>`,
        text: "TEST EMAIL",
      });

      expect(sendEmailResponse).not.toBeNull();
      expect(sendEmailResponse.success).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it("Send Bulk Emails", async () => {
    if (!MAILERSEND_TEST_SENDER_EMAIL || !MAILERSEND_TEST_RECIPIENT_EMAIL)
      throw "No or invalid test email addresses found in environment variables";

    try {
      const bulkEmailsResponse = await sendBulkEmails(MAILERSEND_API_KEY, [
        {
          from: {
            email: MAILERSEND_TEST_SENDER_EMAIL,
            name: "TEST SENDER",
          },
          to: [
            {
              email: MAILERSEND_TEST_RECIPIENT_EMAIL,
              name: "TEST RECIPIENT",
            },
          ],
          subject: `BULK TEST EMAIL - ${Date.now()}`,
          html: `<h1>BULK TEST EMAIL</h1>`,
          text: "BULK TEST EMAIL",
        },
      ]);

      expect(bulkEmailsResponse).not.toBeNull();
      expect(bulkEmailsResponse.bulk_email_id).toBeDefined();
      expect(bulkEmailsResponse.message).toBeDefined();

      bulkEmailId = bulkEmailsResponse.bulk_email_id;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  it("Bulk Email Status", async () => {
    if (!bulkEmailId) throw "No or invalid bulk email ID found";

    try {
      const bulkEmailStatusResponse = await bulkEmailStatus(
        MAILERSEND_API_KEY,
        bulkEmailId
      );

      expect(bulkEmailStatusResponse).toBeDefined();
      expect(bulkEmailStatusResponse.data).toBeDefined();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
