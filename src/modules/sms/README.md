# SMS

## Send SMS

[Official Documentation](https://developers.mailersend.com/api/v1/sms.html#send-an-sms)

---

```typescript
import { Client } from "@nuro.dev/mailersend.ts";

const client = new Client("API_KEY");

const result = await client.sendSms({
  from: "+19191234567",
  to: ["+19191234567", "+19199876543"],
  text: "Hey {{name}}! This is just a friendly hello :D",
});
```

```typescript
import { sendEmail } from "@nuro.dev/mailersend.ts";

const result = await sendSms("API_KEY", {
  from: "+19191234567",
  to: ["+19191234567", "+19199876543"],
  text: "Hey {{name}}! This is just a friendly hello :D",
});
```
