# Inbound Routing

## Add Inbound Route

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#add-an-inbound-route)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.addInboundRoute({
  domainId: "...",
});
```

```typescript
import { addInboundRoute } from "@nuro.dev/mailersend.ts";

const result = await addInboundRoute("API_KEY", {
  // ...
});
```

## Delete Inbound Rate

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#delete-an-inbound-route)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.deleteInboundRoute("INBOUND_ID");
```

```typescript
import { deleteInboundRoute } from "@nuro.dev/mailersend.ts";

const result = await deleteInboundRoute("API_KEY", "INBOUND_ID");
```

## List Inbound Routes

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#get-a-list-of-inbound-routes)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.listInboundRoutes({
  // ...
});
```

```typescript
import { listInboundRoutes } from "@nuro.dev/mailersend.ts";

const result = await listInboundRoutes("API_KEY", {
  // ...
});
```

## Inbound Route by ID

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#get-a-single-inbound-route)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.inboundRouteById("INBOUND_ID");
```

```typescript
import { inboundRouteById } from "@nuro.dev/mailersend.ts";

const result = await inboundRouteById("API_KEY", "INBOUND_ID");
```

## Updated Inbound Route

[Official Documentation](https://developers.mailersend.com/api/v1/inbound.html#update-an-inbound-route)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("...");

const result = await client.updateInboundRoute({
  inboundId: "...",
  // ...
});
```

```typescript
import { updateInboundRoute } from "@nuro.dev/mailersend.ts";

const result = await updateInboundRoute("API_KEY", {
  inboundId: "...",
  // ...
});
```
