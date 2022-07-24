# Webhooks

## Create Webhook

[Official Documentation](https://developers.mailersend.com/api/v1/webhooks.html#create-a-webhook)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.createWebhook({
  domain_id: "...",
  events: ["..."],
  name: "...",
  url: "...",
  // ...
});
```

```typescript
import { createWebhook } from "@nuro.dev/mailersend.ts";

const result = await createWebhook("API_KEY", {
  domain_id: "...",
  events: ["..."],
  name: "...",
  url: "...",
  // ...
});
```

## List Webhooks

[Official Documentation](https://developers.mailersend.com/api/v1/webhooks.html#list-webhooks)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.listWebhooks({
  domain_id: "...",
});
```

```typescript
import { listWebhooks } from "@nuro.dev/mailersend.ts";

const result = await listWebhooks("API_KEY", {
  domain_id: "...",
});
```

## Webhook by ID

[Official Documentation](https://developers.mailersend.com/api/v1/webhooks.html#get-a-webhook)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.webhookById("WEBHOOK_ID");
```

```typescript
import { webhookById } from "@nuro.dev/mailersend.ts";

const result = await webhookById("API_KEY", "WEBHOOK_ID");
```

## Update Webhook

[Official Documentation](https://developers.mailersend.com/api/v1/webhooks.html#update-a-webhook)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.updateWebhook({
  webhookId: "...",
  // ...
});
```

```typescript
import { updateWebhook } from "@nuro.dev/mailersend.ts";

const result = await updateWebhook("API_KEY", {
  webhookId: "...",
  // ...
});
```

## Delete Webhook

[Official Documentation](https://developers.mailersend.com/api/v1/webhooks.html#delete-a-webhook)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.deleteWebhook("WEBHOOK_ID");
```

```typescript
import { deleteWebhook } from "@nuro.dev/mailersend.ts";

const result = await deleteWebhook("API_KEY", "WEBHOOK_ID");
```
