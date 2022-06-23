<div align="center">
  ⚠️ WARNING: Package is still a work-in-progress & prone to changes ⚠️

  <h1>
    <br/>
    <br/>
    📫
    <br />
    mailersend.ts
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    Lightweight MailerSend Node.js api written in TypeScript</em>
    <br />
    <br />
  
[![Package Version](https://img.shields.io/npm/v/mailersend.ts?label=%20&style=for-the-badge)](https://www.npmjs.com/package/mailersend.ts)
[![Package Monthly Downloads](https://img.shields.io/npm/dm/mailersend.ts?color=blue&label=%20&style=for-the-badge)](https://www.npmjs.com/package/mailersend.ts)
[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://paka.dev/npm/mailersend.ts)

  </sup>
  <br />
  <br />
</div>

## 🚀 Install

Install it locally in your project

```bash
npm i --save mailersend.ts

# Or with Yarn

yarn add mailersend.ts
```

## 🦄 Usage

There are 2 possible methods for using the `mailersend.ts` api, either via importing the API function you wish to call directly.
For example:

```typescript
import { send } from "mailersend.ts";

async function main() {
  try {
    const response = await send({
      apiKey: "...",
      // ...
    });
  } catch (err) {
    console.error(err);
  }
}
main();
```

Or you can use the client object model:

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

async function main() {
  try {
    const response = await client.send({
      // ...
    });
  } catch (err) {
    console.error(err);
  }
}
main();
```

## 📕 Documentation

This is a break down of all modules currently supported & some examples of how to use them.

### Activity

---

#### Get Activity List

[Official Documentation](https://developers.mailersend.com/api/v1/activity.html#get-a-list-of-activities)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.activityList({
  domainId: "...",
});
```

```typescript
import { activityList } from "mailersend.ts";

const result = await activityList("API_KEY", {
  domainId: "...",
});
```

### Analytics

---

#### Get Activity by Country

[Official Documentation](https://developers.mailersend.com/api/v1/analytics.html#opens-by-country)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.activityByCountry({
  date_to: 0,
  date_from: 0,
});
```

```typescript
import { activityByCountry } from "mailersend.ts";

const result = await activityByCountry("API_KEY", {
  date_to: 0,
  date_from: 0,
});
```

#### Get Activity by Date

[Official Documentation](https://developers.mailersend.com/api/v1/analytics.html#activity-data-by-date)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.activityByDate({
  date_to: 0,
  date_from: 0,
});
```

```typescript
import { activityByDate } from "mailersend.ts";

const result = await activityByDate("API_KEY", {
  date_to: 0,
  date_from: 0,
});
```

#### Get Activity by Reading Environment

[Official Documentation](https://developers.mailersend.com/api/v1/analytics.html#opens-by-reading-environment)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.activityByReadingEnvironment({
  date_to: 0,
  date_from: 0,
});
```

```typescript
import { activityByReadingEnvironment } from "mailersend.ts";

const result = await activityByReadingEnvironment("API_KEY", {
  date_to: 0,
  date_from: 0,
});
```

#### Get Activity by User-Agent

[Official Documentation](https://developers.mailersend.com/api/v1/analytics.html#opens-by-user-agent-name)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.activityByUserAgent({
  date_to: 0,
  date_from: 0,
});
```

```typescript
import { activityByUserAgent } from "mailersend.ts";

const result = await activityByUserAgent("API_KEY", {
  date_to: 0,
  date_from: 0,
});
```

### Domains

---

#### Add Domain

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#add-a-domain)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.addDomain({
  name: "google.com",
});
```

```typescript
import { addDomain } from "mailersend.ts";

const result = await addDomain({
  apiKey: "...",
  name: "google.com",
});
```

#### Delete Domain

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#delete-a-domain)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.deleteDomain("DOMAIN_ID");
```

```typescript
import { deleteDomain } from "mailersend.ts";

const result = await deleteDomain("API_KEY", "DOMAIN_ID");
```

#### DNS Records

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#get-dns-records)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.dnsRecords("DOMAIN_ID");
```

```typescript
import { dnsRecords } from "mailersend.ts";

const result = await dnsRecords("API_KEY", "DOMAIN_ID");
```

#### Domain by ID

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#get-a-single-domain)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.domainById("DOMAIN_ID");
```

```typescript
import { domainById } from "mailersend.ts";

const result = await domainById("API_KEY", "DOMAIN_ID");
```

#### List Domains

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#get-a-list-of-domains)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.listDomains({
  // ...
});
```

```typescript
import { listDomains } from "mailersend.ts";

const result = await listDomains("API_KEY", {
  // ...
});
```

#### Recipients For Domain

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#get-recipients-for-a-domain)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.recipientsForDomain({
  domainId: "...",
});
```

```typescript
import { recipientsForDomain } from "mailersend.ts";

const result = await recipientsForDomain("API_KEY", {
  domainId: "...",
});
```

#### Update Domain Settings

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#update-domain-settings)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.updateDomainSettings({
  domainId: "...",
});
```

```typescript
import { updateDomainSettings } from "mailersend.ts";

const result = await updateDomainSettings("API_KEY", {
  domainId: "...",
});
```

#### Verification Status

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#get-verification-status)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.verificationStatus("DOMAIN_ID");
```

```typescript
import { verificationStatus } from "mailersend.ts";

const result = await verificationStatus("API_KEY", "DOMAIN_ID");
```

### Email

---

#### Bulk Email Status

[Official Documentation](https://developers.mailersend.com/api/v1/email.html#get-bulk-email-status)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.bulkEmailStatus("BULK_EMAIL_ID");
```

```typescript
import { bulkEmailStatus } from "mailersend.ts";

const result = await bulkEmailStatus("API_KEY", "BULK_EMAIL_ID");
```

#### Send Email

[Official Documentation](https://developers.mailersend.com/api/v1/email.html#send-an-email)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.sendEmail({
  from: {
    email: "elon@tesla.com",
    name: "Elon Musk",
  },
  to: [
    {
      email: "tim@apple.com",
      name: "Tim Apple",
    },
  ],
});
```

```typescript
import { sendEmail } from "mailersend.ts";

const result = await sendEmail("API_KEY", {
  from: {
    email: "elon@tesla.com",
    name: "Elon Musk",
  },
  to: [
    {
      email: "tim@apple.com",
      name: "Tim Apple",
    },
  ],
});
```

#### Send Bulk Emails

[Official Documentation](https://developers.mailersend.com/api/v1/email.html#send-bulk-emails)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.sendBulkEmails([
  {
    from: {
      email: "elon@tesla.com",
      name: "Elon Musk",
    },
    to: [
      {
        email: "tim@apple.com",
        name: "Tim Apple",
      },
    ],
  },
]);
```

```typescript
import { sendBulkEmails } from "mailersend.ts";

const result = await sendBulkEmails("API_KEY", [
  {
    from: {
      email: "elon@tesla.com",
      name: "Elon Musk",
    },
    to: [
      {
        email: "tim@apple.com",
        name: "Tim Apple",
      },
    ],
  },
]);
```

### Inbound Routing

---

#### Add Inbound Route

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#add-an-inbound-route)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.addInboundRoute({
  domainId: "...",
});
```

```typescript
import { addInboundRoute } from "mailersend.ts";

const result = await addInboundRoute("API_KEY", {
  // ...
});
```

#### Delete Inbound Rate

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#delete-an-inbound-route)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.deleteInboundRoute("INBOUND_ID");
```

```typescript
import { deleteInboundRoute } from "mailersend.ts";

const result = await deleteInboundRoute("API_KEY", "INBOUND_ID");
```

#### List Inbound Routes

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#get-a-list-of-inbound-routes)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.listInboundRoutes({
  // ...
});
```

```typescript
import { listInboundRoutes } from "mailersend.ts";

const result = await listInboundRoutes("API_KEY", {
  // ...
});
```

#### Inbound Route by ID

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#get-a-single-inbound-route)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.inboundRouteById("INBOUND_ID");
```

```typescript
import { inboundRouteById } from "mailersend.ts";

const result = await inboundRouteById("API_KEY", "INBOUND_ID");
```

#### Updated Inbound Route

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#update-an-inbound-route)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.updateInboundRoute({
  inboundId: "...",
  // ...
});
```

```typescript
import { updateInboundRoute } from "mailersend.ts";

const result = await updateInboundRoute("API_KEY", {
  inboundId: "...",
  // ...
});
```

### Messages

---

#### List Messages

[Official Documentation](https://developers.mailersend.com/api/v1/messages.html#get-a-list-of-messages)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.listMessages({
  // ...
});
```

```typescript
import { listMessages } from "mailersend.ts";

const result = await listMessages("API_KEY", {
  // ...
});
```

#### Message Info by ID

[Official Documentation](https://developers.mailersend.com/api/v1/messages.html#get-information-for-a-single-message)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.messageInfoById("MESSAGE_ID");
```

```typescript
import { messageInfoById } from "mailersend.ts";

const result = await messageInfoById("API_KEY", "MESSAGE_ID");
```

### Scheduled Messages

---

#### Delete Scheduled Message

[Official Documentation](https://developers.mailersend.com/api/v1/message-schedules.html#delete-a-scheduled-message)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.deleteScheduledMessage("MESSAGE_ID");
```

```typescript
import { deleteScheduledMessage } from "mailersend.ts";

const result = await deleteScheduledMessage("API_KEY", "MESSAGE_ID");
```

#### List Scheduled Messages

[Official Documentation](https://developers.mailersend.com/api/v1/message-schedules.html#get-list-of-scheduled-messages)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.listScheduledMessages({
  // ...
});
```

```typescript
import { listScheduledMessages } from "mailersend.ts";

const result = await listScheduledMessages("API_KEY", {
  // ...
});
```

#### Get Scheduled Message by ID

[Official Documentation](https://developers.mailersend.com/api/v1/message-schedules.html#get-a-single-scheduled-message)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.scheduledMessageById("MESSAGE_ID");
```

```typescript
import { scheduledMessageById } from "mailersend.ts";

const result = await scheduledMessageById("API_KEY", "MESSAGE_ID");
```

### Recipients

---

#### Add to Suppression List

[Official Documentation](https://developers.mailersend.com/api/v1/recipients.html#add-recipients-to-a-suppression-list)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.addToSuppressionList({
  domain_id: "...",
  patterns: [],: "...",
  recipients: [],
});
```

```typescript
import { addToSuppressionList } from "mailersend.ts";

const result = await addToSuppressionList("API_KEY", {
  domain_id: "...",
  patterns: [],: "...",
  recipients: [],
});
```

#### List Recipients

[Official Documentation](https://developers.mailersend.com/api/v1/recipients.html#get-recipients)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.listRecipients({
  // ...
});
```

```typescript
import { listRecipients } from "mailersend.ts";

const result = await listRecipients("API_KEY", {
  // ...
});
```

#### Delete From Suppression List

[Official Documentation](https://developers.mailersend.com/api/v1/recipients.html#delete-recipients-from-a-suppression-list)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.deleteFromSuppressionList({
  all: true,
  // OR
  ids: ["..."],
});
```

```typescript
import { deleteFromSuppressionList } from "mailersend.ts";

const result = await deleteFromSuppressionList("API_KEY", {
  all: true,
  // OR
  ids: ["..."],
});
```

#### Delete Recipient

[Official Documentation](https://developers.mailersend.com/api/v1/recipients.html#delete-a-recipient)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.deleteRecipient("RECIPIENT_ID");
```

```typescript
import { deleteRecipient } from "mailersend.ts";

const result = await deleteRecipient("API_KEY", "RECIPIENT_ID");
```

#### Get Recipient by ID

[Official Documentation](https://developers.mailersend.com/api/v1/recipients.html#get-a-single-recipient)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.recipientById("RECIPIENT_ID");
```

```typescript
import { recipientById } from "mailersend.ts";

const result = await recipientById("API_KEY", "RECIPIENT_ID");
```

#### Get Suppression List

[Official Documentation](https://developers.mailersend.com/api/v1/recipients.html#get-recipients-from-a-suppression-list)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.suppressionList({
  // ...
});
```

```typescript
import { suppressionList } from "mailersend.ts";

const result = await suppressionList("API_KEY", {
  // ...
});
```

### Templates

---

#### List Templates

[Official Documentation](https://developers.mailersend.com/api/v1/templates.html#get-templates)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.listTemplates({
  // ...
});
```

```typescript
import { listTemplates } from "mailersend.ts";

const result = await listTemplates("API_KEY", {
  // ...
});
```

#### Delete Template

[Official Documentation](https://developers.mailersend.com/api/v1/templates.html#delete-a-template)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.deleteTemplate("TEMPLATE_ID");
```

```typescript
import { deleteTemplate } from "mailersend.ts";

const result = await deleteTemplate("API_KEY", "TEMPLATE_ID");
```

#### Get Template by ID

[Official Documentation](https://developers.mailersend.com/api/v1/templates.html#get-a-single-template)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.templateById("TEMPLATE_ID");
```

```typescript
import { templateById } from "mailersend.ts";

const result = await templateById("API_KEY", "TEMPLATE_ID");
```

### Tokens

---

#### Create Token

[Official Documentation](https://developers.mailersend.com/api/v1/tokens.html#create-a-token)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.createToken({
  domain_id: "...",
  name: "...",
  scopes: ["..."],
});
```

```typescript
import { createToken } from "mailersend.ts";

const result = await createToken("API_KEY", {
  domain_id: "...",
  name: "...",
  scopes: ["..."],
});
```

#### Delete Token

[Official Documentation](https://developers.mailersend.com/api/v1/tokens.html#delete-a-token)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.deleteToken("TOKEN_ID");
```

```typescript
import { deleteToken } from "mailersend.ts";

const result = await deleteToken("API_KEY", "TOKEN_ID");
```

#### Update Token

[Official Documentation](https://developers.mailersend.com/api/v1/tokens.html#update-a-token)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.updateToken({
  status: "...",
  tokenId: "...",
});
```

```typescript
import { updateToken } from "mailersend.ts";

const result = await updateToken("API_KEY", {
  status: "...",
  tokenId: "...",
});
```

### Webhooks

---

#### Create Webhook

[Official Documentation](https://developers.mailersend.com/api/v1/webhooks.html#create-a-webhook)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.createWebhook({
  domain_id: "...",
  events: ["..."],
  name: "...",
  url: "...",
  // ...
});
```

```typescript
import { createWebhook } from "mailersend.ts";

const result = await createWebhook("API_KEY", {
  domain_id: "...",
  events: ["..."],
  name: "...",
  url: "...",
  // ...
});
```

#### Delete Webhook

[Official Documentation](https://developers.mailersend.com/api/v1/webhooks.html#delete-a-webhook)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.deleteWebhook("WEBHOOK_ID");
```

```typescript
import { deleteWebhook } from "mailersend.ts";

const result = await deleteWebhook("API_KEY", "WEBHOOK_ID");
```

#### List Webhooks

[Official Documentation](https://developers.mailersend.com/api/v1/webhooks.html#list-webhooks)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.listWebhooks({
  domain_id: "...",
});
```

```typescript
import { listWebhooks } from "mailersend.ts";

const result = await listWebhooks("API_KEY", {
  domain_id: "...",
});
```

#### Update Webhook

[Official Documentation](https://developers.mailersend.com/api/v1/webhooks.html#update-a-webhook)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.updateWebhook({
  webhookId: "...",
  // ...
});
```

```typescript
import { updateWebhook } from "mailersend.ts";

const result = await updateWebhook("API_KEY", {
  webhookId: "...",
  // ...
});
```

#### Get Webhook by ID

[Official Documentation](https://developers.mailersend.com/api/v1/webhooks.html#get-a-webhook)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.webhookById("WEBHOOK_ID");
```

```typescript
import { webhookById } from "mailersend.ts";

const result = await webhookById("API_KEY", "WEBHOOK_ID");
```
