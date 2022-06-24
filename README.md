<div align="center">
  ⚠️ WARNING: Package is still a work-in-progress & prone to changes ⚠️

  <h1>
    <br/>
    <br/>
    📫
    <br />
    mailersend.ts
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    Lightweight MailerSend Node.js api written in TypeScript</em>
    <br />
    <br />
  
[![Package Version](https://img.shields.io/npm/v/mailersend.ts?label=%20&style=for-the-badge)](https://www.npmjs.com/package/mailersend.ts)
[![Package Monthly Downloads](https://img.shields.io/npm/dm/mailersend.ts?color=blue&label=%20&style=for-the-badge)](https://www.npmjs.com/package/mailersend.ts)
[![CI Build](https://img.shields.io/github/workflow/status/nurodev/mailersend.ts/CI?label=%20&logo=github&logoColor=white&style=for-the-badge)](https://github.com/NuroDev/mailersend.ts/actions/workflows/ci.yml)
[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://paka.dev/npm/mailersend.ts)

  </sup>
  <br />
  <br />
</div>

## 🚀 Install

Install it locally in your project

```bash
npm i --save mailersend.ts

# Or with Yarn

yarn add mailersend.ts
```

## 🦄 Usage

Here are 2 basic examples of how to use the package using either the direct function handler or the client instance model:

```typescript
import { sendEmail } from "mailersend.ts";

const result = await sendEmail("API_KEY", {
  from: {
    email: "elon@spacex.com",
    name: "Elon Musk",
  },
  to: [
    {
      email: "tim@apple.com",
      name: "Tim Apple",
    },
  ],
  subject: "The future of humanity...",
  html: "<h1>Hello World</h1>",
  text: "Hello World",
});
```

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

const result = await client.sendEmail({
  from: {
    email: "elon@spacex.com",
    name: "Elon Musk",
  },
  to: [
    {
      email: "tim@apple.com",
      name: "Tim Apple",
    },
  ],
  subject: "The future of humanity...",
  html: "<h1>Hello World</h1>",
  text: "Hello World",
});
```

## 📕 Documentation

To view the documentation on how to use each module, view the README.md for each module:

- [Activity](src/modules/activity/README.md)
- [Analytics](src/modules/analytics/README.md)
- [Domains](src/modules/domains/README.md)
- [Email](src/modules/email/README.md)
- [Inbound Routing](src/modules/inboundrouting/README.md)
- [Messages](src/modules/messages/README.md)
- [Recipients](src/modules/recipients/README.md)
- [Scheduled Messages](src/modules/scheduledmessages/README.md)
- [Templates](src/modules/templates/README.md)
- [Tokens](src/modules/tokens/README.md)
- [Webhooks](src/modules/webhooks/README.md)
