### Tokens

---

#### Create Token

[Official Documentation](https://developers.mailersend.com/api/v1/tokens.html#create-a-token)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.createToken({
  domain_id: "...",
  name: "...",
  scopes: ["..."],
});
```

```typescript
import { createToken } from "mailersend.ts";

const result = await createToken("API_KEY", {
  domain_id: "...",
  name: "...",
  scopes: ["..."],
});
```

#### Delete Token

[Official Documentation](https://developers.mailersend.com/api/v1/tokens.html#delete-a-token)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.deleteToken("TOKEN_ID");
```

```typescript
import { deleteToken } from "mailersend.ts";

const result = await deleteToken("API_KEY", "TOKEN_ID");
```

#### Update Token

[Official Documentation](https://developers.mailersend.com/api/v1/tokens.html#update-a-token)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.updateToken({
  status: "...",
  tokenId: "...",
});
```

```typescript
import { updateToken } from "mailersend.ts";

const result = await updateToken("API_KEY", {
  status: "...",
  tokenId: "...",
});
```
