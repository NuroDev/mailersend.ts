# Messages

## List Messages

[Official Documentation](https://developers.mailersend.com/api/v1/messages.html#get-a-list-of-messages)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.listMessages({
  // ...
});
```

```typescript
import { listMessages } from "@nuro.dev/mailersend.ts";

const result = await listMessages("API_KEY", {
  // ...
});
```

## Message Info by ID

[Official Documentation](https://developers.mailersend.com/api/v1/messages.html#get-information-for-a-single-message)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.messageInfoById("MESSAGE_ID");
```

```typescript
import { messageInfoById } from "@nuro.dev/mailersend.ts";

const result = await messageInfoById("API_KEY", "MESSAGE_ID");
```
