import { describe, it, expect } from "vitest";

import "dotenv/config";
import {
  createWebhook,
  deleteWebhook,
  listWebhooks,
  webhookById,
} from "./webhooks.module";

const { MAILERSEND_API_KEY: apiKey, MAILERSEND_DOMAIN_ID: domain_id } =
  process.env as Record<string, string>;

describe("Webhooks", () => {
  // it.concurrent("Create Webhook", async () => {
  //   try {
  //     const createWebhookResponse = await createWebhook(apiKey, {
  //       domain_id,
  //       events: ["unsubscribed"],
  //       name: "Example Webhook",
  //       url: "https://example.com/webhook",
  //     });

  //     expect(createWebhookResponse).not.toBeNull();
  //   } catch (error) {
  //     throw error;
  //   }
  // });

  // TODO: Waiting on `createWebhook` types to implement this test
  // it.concurrent("Delete Webhook", async () => {
  //   try {
  //     const newWebhook = await createWebhook(apiKey, {
  //       domain_id,
  //       events: ["unsubscribed"],
  //       name: "CI Test Webhook",
  //       url: "https://example.com/webhook",
  //     });

  //     const deleteWebhookResponse = await deleteWebhook(
  //       apiKey,
  //       "o65qngk20ogwr12z"
  //     );

  //     expect(deleteWebhookResponse).not.toBeNull();
  //     expect(deleteWebhookResponse.success).toEqual(true);
  //   } catch (error) {
  //     throw error;
  //   }
  // });

  it.concurrent("List Webhooks", async () => {
    try {
      const listWebhooksResponse = await listWebhooks(apiKey, {
        domain_id,
      });

      expect(listWebhooksResponse).not.toBeNull();
      expect(Array.isArray(listWebhooksResponse.data)).toEqual(true);
    } catch (error) {
      throw error;
    }
  });

  // it.concurrent("Update Webhook", async () => {
  //   try {
  //     expect(true).toEqual(true);
  //   } catch (error) {
  //     throw error;
  //   }
  // });

  // TODO: Waiting on `createWebhook` types to implement this test
  // it.concurrent("Webhook by ID", async () => {
  //   try {
  //     // const newWebhook = await createWebhook(apiKey, {
  //     //   domain_id,
  //     //   events: ["unsubscribed"],
  //     //   name: "CI Test Webhook",
  //     //   url: "https://example.com/webhook",
  //     // });

  //     const webhookByIdResponse = await webhookById(
  //       apiKey,
  //       webhookByIdResponse.data.id
  //     );

  //     expect(true).toEqual(true);
  //   } catch (error) {
  //     throw error;
  //   }
  // });
});
