# Phone Numbers

## List SMS Phone Numbers

[Official Documentation](https://developers.mailersend.com/api/v1/sms-numbers.html#get-a-list-of-sms-phone-numbers)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.listPhoneNumbers();
```

```typescript
import { sendEmail } from "@nuro.dev/mailersend.ts";

const result = await listPhoneNumbers("API_KEY");
```
