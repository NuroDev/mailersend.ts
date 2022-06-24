# Templates

## List Templates

[Official Documentation](https://developers.mailersend.com/api/v1/templates.html#get-templates)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.listTemplates({
  // ...
});
```

```typescript
import { listTemplates } from "mailersend.ts";

const result = await listTemplates("API_KEY", {
  // ...
});
```

## Delete Template

[Official Documentation](https://developers.mailersend.com/api/v1/templates.html#delete-a-template)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.deleteTemplate("TEMPLATE_ID");
```

```typescript
import { deleteTemplate } from "mailersend.ts";

const result = await deleteTemplate("API_KEY", "TEMPLATE_ID");
```

## Get Template by ID

[Official Documentation](https://developers.mailersend.com/api/v1/templates.html#get-a-single-template)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.templateById("TEMPLATE_ID");
```

```typescript
import { templateById } from "mailersend.ts";

const result = await templateById("API_KEY", "TEMPLATE_ID");
```
