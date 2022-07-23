import { beforeAll, describe, it, expect } from "vitest";

import "dotenv/config";

import { Client } from ".";

import type { Token } from "~/types";

const {
  MAILERSEND_API_KEY,
  MAILERSEND_DOMAIN_ID,
  MAILERSEND_MESSAGE_ID,
  MAILERSEND_TEMPLATE_ID,
  MAILERSEND_TEST_RECIPIENT_EMAIL,
  MAILERSEND_TEST_SENDER_EMAIL,
} = process.env as Record<string, string>;

const getCurrentUTC = (): number => Math.floor(new Date().getTime() / 1000);

describe("Client", () => {
  let client: Client;

  beforeAll(() => {
    if (!MAILERSEND_API_KEY)
      throw "No MailerSend API key found in environment variables";

    client = new Client(MAILERSEND_API_KEY);
  });

  describe("Activity", () => {
    it.concurrent("List Activity", async () => {
      if (!MAILERSEND_DOMAIN_ID)
        throw "No MailerSend domain ID found in environment variables";

      try {
        const listActivityResponse = await client.listActivity({
          domainId: MAILERSEND_DOMAIN_ID,
        });

        expect(listActivityResponse).not.toBeNull();
        expect(listActivityResponse.data).toBeDefined();
        expect(Array.isArray(listActivityResponse.data)).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });

  describe("Analytics", () => {
    it.concurrent("Activity By Country", async () => {
      try {
        const activityByCountryResponse = await client.activityByCountry({
          date_from: getCurrentUTC() - 200,
          date_to: getCurrentUTC(),
        });

        expect(activityByCountryResponse).not.toBeNull();
        expect(activityByCountryResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it.concurrent("Activity By Date", async () => {
      try {
        const activityByDateResponse = await client.activityByDate({
          date_from: getCurrentUTC() - 200,
          date_to: getCurrentUTC(),
          event: [
            "clicked",
            "delivered",
            "hard_bounced",
            "junk",
            "opened",
            "processed",
            "queued",
            "sent",
            "soft_bounced",
            "spam_complaints",
            "unsubscribed",
          ],
        });

        expect(activityByDateResponse).not.toBeNull();
        expect(activityByDateResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it.concurrent("Activity By Reading Environment", async () => {
      try {
        const activityByReadingEnvironmentResponse =
          await client.activityByReadingEnvironment({
            date_from: getCurrentUTC() - 200,
            date_to: getCurrentUTC(),
          });

        expect(activityByReadingEnvironmentResponse).not.toBeNull();
        expect(activityByReadingEnvironmentResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it.concurrent("Activity By User-Agent", async () => {
      try {
        const activityUserAgentResponse = await client.activityByUserAgent({
          date_from: getCurrentUTC() - 200,
          date_to: getCurrentUTC(),
        });

        expect(activityUserAgentResponse).not.toBeNull();
        expect(activityUserAgentResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });

  describe("Email", () => {
    it.concurrent("Bulk Email Status", async () => {
      try {
        const bulkEmailsResponse = await client.sendBulkEmails([
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
        if (!bulkEmailsResponse.bulk_email_id)
          throw "No bulk emails id found in response";

        const bulkEmailStatusResponse = await client.bulkEmailStatus(
          bulkEmailsResponse.bulk_email_id
        );

        expect(bulkEmailStatusResponse).toBeDefined();
        expect(bulkEmailStatusResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it.concurrent("Send Email", async () => {
      if (!MAILERSEND_TEST_SENDER_EMAIL || !MAILERSEND_TEST_RECIPIENT_EMAIL)
        throw "No or invalid test email addresses found in environment variables";

      try {
        const sendEmailResponse = await client.sendEmail({
          from: {
            email: MAILERSEND_TEST_SENDER_EMAIL,
            name: "CLIENT TEST SENDER",
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
          html: `<h1>CLIENT TEST EMAIL</h1>`,
          text: "CLIENT TEST EMAIL",
        });
        expect(sendEmailResponse).not.toBeNull();
        expect(sendEmailResponse.success).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it.concurrent("Send Bulk Emails", async () => {
      if (!MAILERSEND_TEST_SENDER_EMAIL || !MAILERSEND_TEST_RECIPIENT_EMAIL)
        throw "No or invalid test email addresses found in environment variables";

      try {
        const bulkEmailsResponse = await client.sendBulkEmails([
          {
            from: {
              email: MAILERSEND_TEST_SENDER_EMAIL,
              name: "CLIENT TEST SENDER",
            },
            to: [
              {
                email: MAILERSEND_TEST_RECIPIENT_EMAIL,
                name: "TEST RECIPIENT",
              },
            ],
            subject: `BULK TEST EMAIL - ${Date.now()}`,
            html: `<h1>CLIENT BULK TEST EMAIL</h1>`,
            text: "CLIENT BULK TEST EMAIL",
          },
        ]);
        expect(bulkEmailsResponse).not.toBeNull();
        expect(bulkEmailsResponse.bulk_email_id).toBeDefined();
        expect(bulkEmailsResponse.message).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });

  describe("Messages", () => {
    it.concurrent("List Messages", async () => {
      try {
        const listMessagesResponse = await client.listMessages();

        expect(listMessagesResponse).not.toBeNull();
        expect(listMessagesResponse.data).toBeDefined();
        expect(Array.isArray(listMessagesResponse.data)).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it.concurrent("Message by ID", async () => {
      if (!MAILERSEND_MESSAGE_ID)
        throw "No MailerSend message ID found in environment variables";

      try {
        const messageByIdResponse = await client.messageById(
          MAILERSEND_MESSAGE_ID
        );

        expect(messageByIdResponse).not.toBeNull();
        expect(messageByIdResponse.data).toBeDefined();
        expect(Array.isArray(messageByIdResponse.data)).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });

  describe("Template", () => {
    it.concurrent("List Templates", async () => {
      if (!MAILERSEND_DOMAIN_ID)
        throw "No MailerSend domain ID found in environment variables";

      try {
        const listTemplatesResponse = await client.listTemplates({
          domain_id: MAILERSEND_DOMAIN_ID,
        });

        expect(listTemplatesResponse).toBeDefined();
        expect(listTemplatesResponse.data).toBeDefined();
        expect(Array.isArray(listTemplatesResponse.data)).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it.concurrent("Template by ID", async () => {
      try {
        const templateByIdResponse = await client.templateById(
          MAILERSEND_TEMPLATE_ID
        );

        expect(templateByIdResponse).toBeDefined();
        expect(templateByIdResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });

  describe("Tokens", () => {
    let newToken: Token;

    it("Create Token", async () => {
      try {
        const createTokenResponse = await client.createToken({
          domain_id: MAILERSEND_DOMAIN_ID,
          name: "CREATE_TEST_API_TOKEN",
          scopes: ["activity_read", "analytics_read", "domains_read"],
        });

        expect(createTokenResponse).toBeDefined();
        expect(createTokenResponse.data).toBeDefined();

        newToken = createTokenResponse.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it("Update Token", async () => {
      if (!newToken) throw "No token found to delete";

      try {
        const updateTokenResponse = await client.updateToken({
          tokenId: newToken.id,
          status: "pause",
        });

        expect(updateTokenResponse).toBeDefined();
        expect(updateTokenResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it("Delete Token", async () => {
      if (!newToken) throw "No token found to delete";

      try {
        const deleteTokenResponse = await client.deleteToken(newToken.id);

        expect(deleteTokenResponse).toBeDefined();
        expect(deleteTokenResponse.success).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });
});
