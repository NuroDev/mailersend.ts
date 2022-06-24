# Email

## Bulk Email Status

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

## Send Email

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

## Send Bulk Emails

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
