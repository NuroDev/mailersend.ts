# Analytics

## Get Activity by Country

[Official Documentation](https://developers.mailersend.com/api/v1/analytics.html#opens-by-country)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.activityByCountry({
  date_to: 0,
  date_from: 0,
});
```

```typescript
import { activityByCountry } from "@nuro.dev/mailersend.ts";

const result = await activityByCountry("API_KEY", {
  date_to: 0,
  date_from: 0,
});
```

## Get Activity by Date

[Official Documentation](https://developers.mailersend.com/api/v1/analytics.html#activity-data-by-date)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.activityByDate({
  date_to: 0,
  date_from: 0,
});
```

```typescript
import { activityByDate } from "@nuro.dev/mailersend.ts";

const result = await activityByDate("API_KEY", {
  date_to: 0,
  date_from: 0,
});
```

## Get Activity by Reading Environment

[Official Documentation](https://developers.mailersend.com/api/v1/analytics.html#opens-by-reading-environment)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.activityByReadingEnvironment({
  date_to: 0,
  date_from: 0,
});
```

```typescript
import { activityByReadingEnvironment } from "@nuro.dev/mailersend.ts";

const result = await activityByReadingEnvironment("API_KEY", {
  date_to: 0,
  date_from: 0,
});
```

## Get Activity by User-Agent

[Official Documentation](https://developers.mailersend.com/api/v1/analytics.html#opens-by-user-agent-name)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.activityByUserAgent({
  date_to: 0,
  date_from: 0,
});
```

```typescript
import { activityByUserAgent } from "@nuro.dev/mailersend.ts";

const result = await activityByUserAgent("API_KEY", {
  date_to: 0,
  date_from: 0,
});
```
