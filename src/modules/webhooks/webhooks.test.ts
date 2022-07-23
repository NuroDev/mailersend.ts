import { describe, it, expect } from "vitest";

import "dotenv/config";

import {
  createWebhook,
  deleteWebhook,
  listWebhooks,
  updateWebhook,
  webhookById,
} from ".";

import type { Webhook } from ".";

const { MAILERSEND_API_KEY, MAILERSEND_DOMAIN_ID } = process.env as Record<
  string,
  string
>;

describe("Webhooks", () => {
  let newWebhook: Webhook;

  it("Create Webhook", async () => {
    try {
      const createWebhookResponse = await createWebhook(MAILERSEND_API_KEY, {
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
      const listWebhooksResponse = await listWebhooks(MAILERSEND_API_KEY, {
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
      const webhookByIdResponse = await webhookById(
        MAILERSEND_API_KEY,
        newWebhook.id
      );

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
      const updateWebhookResponse = await updateWebhook(MAILERSEND_API_KEY, {
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
      const deleteWebhookResponse = await deleteWebhook(
        MAILERSEND_API_KEY,
        newWebhook.id
      );

      expect(deleteWebhookResponse).toBeDefined();
      expect(deleteWebhookResponse.success).toBeTruthy();
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
});
