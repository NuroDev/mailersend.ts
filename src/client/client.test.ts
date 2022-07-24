import { beforeAll, describe, it, expect } from "vitest";

import "dotenv/config";

import { Client } from ".";

import type { AddDomainData, Token, Webhook } from "~/types";

const {
  MAILERSEND_API_KEY,
  MAILERSEND_DOMAIN_ID,
  MAILERSEND_MESSAGE_ID,
  MAILERSEND_TEMPLATE_ID,
  MAILERSEND_TEST_DOMAIN,
  MAILERSEND_TEST_RECIPIENT_EMAIL,
  MAILERSEND_TEST_RECIPIENT_ID,
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

  describe("Domains", () => {
    let newDomain: AddDomainData;

    it("Add Domain", async () => {
      try {
        const addDomainResponse = await client.addDomain({
          name: MAILERSEND_TEST_DOMAIN,
        });

        expect(addDomainResponse).toBeDefined();
        expect(addDomainResponse.data).toBeDefined();

        newDomain = addDomainResponse.data;
      } catch (error) {
        console.error(error);
      }
    });

    it("DNS Records", async () => {
      if (!newDomain?.id) throw "No new domain ID found";

      try {
        const dnsRecordsResponse = await client.dnsRecords(newDomain.id);

        expect(dnsRecordsResponse).toBeDefined();
        expect(dnsRecordsResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it("Domain by ID", async () => {
      if (!newDomain?.id) throw "No new domain ID found";

      try {
        const domainByIdResponse = await client.domainById(newDomain.id);

        expect(domainByIdResponse).toBeDefined();
        expect(domainByIdResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it("List Domains", async () => {
      try {
        const listDomainsResponse = await client.listDomains();

        expect(listDomainsResponse).toBeDefined();
        expect(listDomainsResponse.data).toBeDefined();
        expect(Array.isArray(listDomainsResponse.data)).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it("Recipients for Domain", async () => {
      if (!newDomain?.id) throw "No new domain ID found";

      try {
        const recipientsForDomainResponse = await client.recipientsForDomain({
          domainId: newDomain.id,
        });

        expect(recipientsForDomainResponse).toBeDefined();
        expect(recipientsForDomainResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it("Update Domain", async () => {
      if (!newDomain?.id) throw "No new domain ID found";

      try {
        const updateDomainSettingsResponse = await client.updateDomain({
          domainId: newDomain.id,
        });

        expect(updateDomainSettingsResponse).toBeDefined();
        expect(updateDomainSettingsResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it("Verification Status", async () => {
      if (!newDomain?.id) throw "No new domain ID found";

      try {
        const verificationStatusResponse = await client.verificationStatus(
          newDomain.id
        );

        expect(verificationStatusResponse).toBeDefined();
        expect(verificationStatusResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it("Delete Domain", async () => {
      if (!newDomain?.id) throw "No new domain ID found";

      try {
        const deleteDomainResponse = await client.deleteDomain(newDomain.id);

        expect(deleteDomainResponse).toBeDefined();
        expect(deleteDomainResponse.success).toBeDefined();
        // expect(deleteDomainResponse.success).toBeTruthy();
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

  describe("Recipients", () => {
    it.concurrent("Add to Suppression List", async () => {
      if (!MAILERSEND_DOMAIN_ID)
        throw "No MailerSend domain ID found in environment variables";

      if (!MAILERSEND_TEST_RECIPIENT_EMAIL)
        throw "No MailerSend test recipient email found in environment variables";

      try {
        const addToSuppressionListResponse = await client.addToSuppressionList({
          domain_id: MAILERSEND_DOMAIN_ID,
          patterns: [],
          recipients: [MAILERSEND_TEST_RECIPIENT_EMAIL],
        });

        expect(addToSuppressionListResponse).toBeDefined();
        expect(addToSuppressionListResponse.data).toBeDefined();
        expect(Array.isArray(addToSuppressionListResponse.data)).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it.concurrent("Delete from Suppression List", async () => {
      try {
        const deleteFromSuppressionListResponse =
          await client.deleteFromSuppressionList({
            all: true,
          });

        expect(deleteFromSuppressionListResponse).toBeDefined();
        expect(Array.isArray(deleteFromSuppressionListResponse)).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it.concurrent("List Recipients", async () => {
      try {
        const listRecipientsResponse = await client.listRecipients();

        expect(listRecipientsResponse).toBeDefined();
        expect(listRecipientsResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it.concurrent("Recipient by ID", async () => {
      if (!MAILERSEND_TEST_RECIPIENT_ID)
        throw "No MailerSend test recipient ID found in environment variables";

      try {
        const recipientByIdResponse = await client.recipientById(
          MAILERSEND_TEST_RECIPIENT_ID
        );

        expect(recipientByIdResponse).toBeDefined();
        expect(recipientByIdResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it.concurrent("Suppression List", async () => {
      try {
        const suppressionListResponse = await client.listSuppressions();

        expect(suppressionListResponse).toBeDefined();
        expect(suppressionListResponse.data).toBeDefined();
        expect(Array.isArray(suppressionListResponse.data)).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it.concurrent("Delete Recipient", async () => {
      if (!MAILERSEND_TEST_RECIPIENT_ID)
        throw "No MailerSend test recipient ID found in environment variables";

      try {
        const deleteRecipientResponse = await client.deleteRecipient(
          MAILERSEND_TEST_RECIPIENT_ID
        );

        expect(deleteRecipientResponse).toBeDefined();
        expect(deleteRecipientResponse.success).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });

  describe("Scheduled Messages", () => {
    // TODO: Find a way to create a new scheduled message to test deleting it
    it.concurrent("Delete Scheduled Message", async () => {
      // try {
      //   const deleteScheduledMessageResponse = await client.deleteScheduledMessage(
      //     "..."
      //   );
      //
      //   expect(deleteScheduledMessageResponse).not.toBeNull();
      //   expect(deleteScheduledMessageResponse.success).toBe(true);
      // } catch (error) {
      //   console.error(error);
      //   throw error;
      // }
    });

    it.concurrent("List Scheduled Messages", async () => {
      try {
        const listScheduledMessagesResponse =
          await client.listScheduledMessages();
        console.log(listScheduledMessagesResponse);

        expect(listScheduledMessagesResponse).not.toBeNull();
        expect(listScheduledMessagesResponse.data).not.toBeNull();
        expect(Array.isArray(listScheduledMessagesResponse.data)).toBe(true);
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    // TODO: Create message or find a way to dynamically create a message & retrieve its ID to use in the test
    it.concurrent("Scheduled Message by ID", async () => {
      // try {
      //   const scheduledMessageByIdResponse = await client.scheduledMessageById(
      //     "..."
      //   );
      //
      //   expect(scheduledMessageByIdResponse).not.toBeNull();
      //   expect(scheduledMessageByIdResponse.data).not.toBeNull();
      // } catch (error) {
      //   console.error(error);
      //   throw error;
      // }
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

  describe("Webhooks", () => {
    let newWebhook: Webhook;

    it("Create Webhook", async () => {
      try {
        const createWebhookResponse = await client.createWebhook({
          domain_id: MAILERSEND_DOMAIN_ID,
          events: [
            "activity.clicked",
            "activity.delivered",
            "activity.hard_bounced",
            "activity.opened",
            "activity.sent",
            "activity.soft_bounced",
            "activity.spam_complaint",
            "activity.unsubscribed",
          ],
          name: `TEST WEBHOOK - ${Date.now()}`,
          url: `https://example.com/${Date.now()}`,
        });

        expect(createWebhookResponse).toBeDefined();
        expect(createWebhookResponse.data).toBeDefined();

        newWebhook = createWebhookResponse.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it("List Webhooks", async () => {
      try {
        const listWebhooksResponse = await client.listWebhooks({
          domain_id: MAILERSEND_DOMAIN_ID,
        });

        expect(listWebhooksResponse).toBeDefined();
        expect(Array.isArray(listWebhooksResponse.data)).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it("Webhook by ID", async () => {
      if (!newWebhook?.id) throw "No new webhook ID found";

      try {
        const webhookByIdResponse = await client.webhookById(newWebhook.id);

        expect(webhookByIdResponse).toBeDefined();
        expect(webhookByIdResponse.data).toBeDefined();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it("Update Webhook", async () => {
      if (!newWebhook?.id) throw "No new webhook ID found";

      try {
        const updateWebhookResponse = await client.updateWebhook({
          enabled: false,
          name: `NEW TEST WEBHOOK - ${Date.now()}`,
          webhookId: newWebhook.id,
        });

        expect(updateWebhookResponse).toBeDefined();
        expect(updateWebhookResponse.data).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });

    it("Delete Webhook", async () => {
      if (!newWebhook?.id) throw "No new webhook ID found";

      try {
        const deleteWebhookResponse = await client.deleteWebhook(newWebhook.id);

        expect(deleteWebhookResponse).toBeDefined();
        expect(deleteWebhookResponse.success).toBeTruthy();
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  });
});
