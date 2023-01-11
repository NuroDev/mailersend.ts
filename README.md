<div align="center">
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
  
[![Package Version](https://img.shields.io/npm/v/@nurodev/mailersend.ts?label=%20&style=for-the-badge)](https://www.npmjs.com/package/@nurodev/mailersend.ts)
[![Package Monthly Downloads](https://img.shields.io/npm/dm/@nurodev/mailersend.ts?color=blue&label=%20&style=for-the-badge)](https://www.npmjs.com/package/@nurodev/mailersend.ts)
[![CI Build](https://img.shields.io/github/actions/workflow/status/nurodev/mailersend.ts/ci.yml?label=%20&logo=github&logoColor=white&style=for-the-badge)](https://github.com/nurodev/mailersend.ts/actions/workflows/ci.yml)
[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://paka.dev/npm/@nurodev/mailersend.ts)

  </sup>
  <br />
  <br />
</div>

## 🚀 Install

Install it locally in your project

```bash
npm i --save @nurodev/mailersend.ts

# Or with Yarn

yarn add @nurodev/mailersend.ts
```

## 🦄 Usage

Here are 2 basic examples of how to use the package using either the direct function handler or the client instance model:

```typescript
import { sendEmail } from "@nurodev/mailersend.ts";

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
import { Client } from "@nurodev/mailersend.ts";

const client = new Client("API_KEY");

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

- [🔥 Activity](src/modules/activity#activity)
- [📈 Analytics](src/modules/analytics#analytics)
- [🏠 Domains](src/modules/domains#domains)
- [💌 Email](src/modules/email#email)
- [💬 Messages](src/modules/messages#messages)
- [🫂 Recipients](src/modules/recipients#recipients)
- [📆 Scheduled Messages](src/modules/scheduledMessages#scheduled-messages)
- [🏗️ Templates](src/modules/templates#templates)
- [🔑 Tokens](src/modules/tokens#tokens)
- [🪝 Webhooks](src/modules/webhooks#webhooks)

<!-- ## 👀 Coming soon

These features are due to be implemented soon / are worked in being added

- [🚦 Inbound Routing](src/modules/inboundRouting#inbound-routing)-->
