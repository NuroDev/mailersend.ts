# Inbound Routing

## Add Inbound Route

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#add-an-inbound-route)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.addInboundRoute({
  domainId: "...",
});
```

```typescript
import { addInboundRoute } from "mailersend.ts";

const result = await addInboundRoute("API_KEY", {
  // ...
});
```

## Delete Inbound Rate

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#delete-an-inbound-route)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.deleteInboundRoute("INBOUND_ID");
```

```typescript
import { deleteInboundRoute } from "mailersend.ts";

const result = await deleteInboundRoute("API_KEY", "INBOUND_ID");
```

## List Inbound Routes

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#get-a-list-of-inbound-routes)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.listInboundRoutes({
  // ...
});
```

```typescript
import { listInboundRoutes } from "mailersend.ts";

const result = await listInboundRoutes("API_KEY", {
  // ...
});
```

## Inbound Route by ID

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#get-a-single-inbound-route)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.inboundRouteById("INBOUND_ID");
```

```typescript
import { inboundRouteById } from "mailersend.ts";

const result = await inboundRouteById("API_KEY", "INBOUND_ID");
```

## Updated Inbound Route

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#update-an-inbound-route)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.updateInboundRoute({
  inboundId: "...",
  // ...
});
```

```typescript
import { updateInboundRoute } from "mailersend.ts";

const result = await updateInboundRoute("API_KEY", {
  inboundId: "...",
  // ...
});
```
