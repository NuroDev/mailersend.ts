# Activity

## Get Activity List

[Official Documentation](https://developers.mailersend.com/api/v1/activity.html#get-a-list-of-activities)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.listActivity({
  domainId: "...",
});
```

```typescript
import { listActivity } from "@nuro.dev/mailersend.ts";

const result = await listActivity("API_KEY", {
  domainId: "...",
});
```
