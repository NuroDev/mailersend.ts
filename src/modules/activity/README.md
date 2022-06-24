# Activity

## Get Activity List

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

const result = await activityList("API_KEY", {
  domainId: "...",
});
```
