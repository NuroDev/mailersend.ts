# Templates

## List Templates

[Official Documentation](https://developers.mailersend.com/api/v1/templates.html#get-templates)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.listTemplates({
  // ...
});
```

```typescript
import { listTemplates } from "@nuro.dev/mailersend.ts";

const result = await listTemplates("API_KEY", {
  // ...
});
```

## Get Template by ID

[Official Documentation](https://developers.mailersend.com/api/v1/templates.html#get-a-single-template)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.templateById("TEMPLATE_ID");
```

```typescript
import { templateById } from "@nuro.dev/mailersend.ts";

const result = await templateById("API_KEY", "TEMPLATE_ID");
```
