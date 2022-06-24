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
