# Recipients

## Add to Suppression List

[Official Documentation](https://developers.mailersend.com/api/v1/recipients.html#add-recipients-to-a-suppression-list)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.addToSuppressionList({
  domain_id: "...",
  patterns: [],: "...",
  recipients: [],
});
```

```typescript
import { addToSuppressionList } from "@nuro.dev/mailersend.ts";

const result = await addToSuppressionList("API_KEY", {
  domain_id: "...",
  patterns: [],: "...",
  recipients: [],
});
```

## List Recipients

[Official Documentation](https://developers.mailersend.com/api/v1/recipients.html#get-recipients)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.listRecipients({
  // ...
});
```

```typescript
import { listRecipients } from "@nuro.dev/mailersend.ts";

const result = await listRecipients("API_KEY", {
  // ...
});
```

## Delete From Suppression List

[Official Documentation](https://developers.mailersend.com/api/v1/recipients.html#delete-recipients-from-a-suppression-list)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.deleteFromSuppressionList({
  all: true,
  // OR
  ids: ["..."],
});
```

```typescript
import { deleteFromSuppressionList } from "@nuro.dev/mailersend.ts";

const result = await deleteFromSuppressionList("API_KEY", {
  all: true,
  // OR
  ids: ["..."],
});
```

## Delete Recipient

[Official Documentation](https://developers.mailersend.com/api/v1/recipients.html#delete-a-recipient)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.deleteRecipient("RECIPIENT_ID");
```

```typescript
import { deleteRecipient } from "@nuro.dev/mailersend.ts";

const result = await deleteRecipient("API_KEY", "RECIPIENT_ID");
```

## Get Recipient by ID

[Official Documentation](https://developers.mailersend.com/api/v1/recipients.html#get-a-single-recipient)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.recipientById("RECIPIENT_ID");
```

```typescript
import { recipientById } from "@nuro.dev/mailersend.ts";

const result = await recipientById("API_KEY", "RECIPIENT_ID");
```

## Get Suppression List

[Official Documentation](https://developers.mailersend.com/api/v1/recipients.html#get-recipients-from-a-suppression-list)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.suppressionList({
  // ...
});
```

```typescript
import { suppressionList } from "@nuro.dev/mailersend.ts";

const result = await suppressionList("API_KEY", {
  // ...
});
```
