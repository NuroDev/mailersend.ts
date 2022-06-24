# Domains

## Add Domain

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#add-a-domain)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.addDomain({
  name: "google.com",
});
```

```typescript
import { addDomain } from "mailersend.ts";

const result = await addDomain({
  apiKey: "...",
  name: "google.com",
});
```

## Delete Domain

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#delete-a-domain)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.deleteDomain("DOMAIN_ID");
```

```typescript
import { deleteDomain } from "mailersend.ts";

const result = await deleteDomain("API_KEY", "DOMAIN_ID");
```

## DNS Records

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#get-dns-records)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.dnsRecords("DOMAIN_ID");
```

```typescript
import { dnsRecords } from "mailersend.ts";

const result = await dnsRecords("API_KEY", "DOMAIN_ID");
```

## Domain by ID

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#get-a-single-domain)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.domainById("DOMAIN_ID");
```

```typescript
import { domainById } from "mailersend.ts";

const result = await domainById("API_KEY", "DOMAIN_ID");
```

## List Domains

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#get-a-list-of-domains)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.listDomains({
  // ...
});
```

```typescript
import { listDomains } from "mailersend.ts";

const result = await listDomains("API_KEY", {
  // ...
});
```

## Recipients For Domain

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#get-recipients-for-a-domain)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.recipientsForDomain({
  domainId: "...",
});
```

```typescript
import { recipientsForDomain } from "mailersend.ts";

const result = await recipientsForDomain("API_KEY", {
  domainId: "...",
});
```

## Update Domain Settings

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#update-domain-settings)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.updateDomainSettings({
  domainId: "...",
});
```

```typescript
import { updateDomainSettings } from "mailersend.ts";

const result = await updateDomainSettings("API_KEY", {
  domainId: "...",
});
```

## Verification Status

[Official Documentation](https://developers.mailersend.com/api/v1/domains.html#get-verification-status)

---

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.verificationStatus("DOMAIN_ID");
```

```typescript
import { verificationStatus } from "mailersend.ts";

const result = await verificationStatus("API_KEY", "DOMAIN_ID");
```
