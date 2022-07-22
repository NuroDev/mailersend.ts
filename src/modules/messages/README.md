# Messages

## List Messages

[Official Documentation](https://developers.mailersend.com/api/v1/messages.html#get-a-list-of-messages)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

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

## Message by ID

[Official Documentation](https://developers.mailersend.com/api/v1/messages.html#get-information-for-a-single-message)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.messageById("MESSAGE_ID");
```

```typescript
import { messageById } from "@nuro.dev/mailersend.ts";

const result = await messageById("API_KEY", "MESSAGE_ID");
```
