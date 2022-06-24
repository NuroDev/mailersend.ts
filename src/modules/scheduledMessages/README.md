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
