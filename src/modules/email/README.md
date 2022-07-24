# Email

## Bulk Email Status

[Official Documentation](https://developers.mailersend.com/api/v1/email.html#get-bulk-email-status)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";
const client = new Client("API_KEY");
const result = await client.bulkEmailStatus("BULK_EMAIL_ID");
```

```typescript
import { bulkEmailStatus } from "@nuro.dev/mailersend.ts";
const result = await bulkEmailStatus("API_KEY", "BULK_EMAIL_ID");
```

## Send Email

[Official Documentation](https://developers.mailersend.com/api/v1/email.html#send-an-email)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.sendEmail({
  from: {
    email: "elon@spacex.com",
    name: "Elon Musk",
  },
  to: [
    {
      email: "tim@apple.com",
      name: "Tim Apple",
    },
  ],
  subject: "The future of humanity...",
  html: "<h1>Hello World</h1>",
  text: "Hello World",
});
```

```typescript
import { sendEmail } from "@nuro.dev/mailersend.ts";

const result = await sendEmail("API_KEY", {
  from: {
    email: "elon@spacex.com",
    name: "Elon Musk",
  },
  to: [
    {
      email: "tim@apple.com",
      name: "Tim Apple",
    },
  ],
  subject: "The future of humanity...",
  html: "<h1>Hello World</h1>",
  text: "Hello World",
});
```

## Send Bulk Emails

[Official Documentation](https://developers.mailersend.com/api/v1/email.html#send-bulk-emails)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.sendBulkEmails([
  {
    from: {
      email: "elon@spacex.com",
      name: "Elon Musk",
    },
    to: [
      {
        email: "tim@apple.com",
        name: "Tim Apple",
      },
    ],
    subject: "The future of humanity...",
    html: "<h1>Hello World</h1>",
    text: "Hello World",
  },
]);
```

```typescript
import { sendBulkEmails } from "@nuro.dev/mailersend.ts";

const result = await sendBulkEmails("API_KEY", [
  {
    from: {
      email: "elon@spacex.com",
      name: "Elon Musk",
    },
    to: [
      {
        email: "tim@apple.com",
        name: "Tim Apple",
      },
    ],
    subject: "The future of humanity...",
    html: "<h1>Hello World</h1>",
    text: "Hello World",
  },
]);
```
