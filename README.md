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

const result = await activityList("API_KEY", "DOMAIN_ID");
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

const result = await activityList("API_KEY", "DOMAIN_ID");
```
