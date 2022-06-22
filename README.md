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
  
[![Package Version](https://img.shields.io/npm/v/mailersend.ts?label=%20&style=for-the-badge)](https://www.npmjs.com/package/mailersend.ts)
[![Package Monthly Downloads](https://img.shields.io/npm/dm/mailersend.ts?color=blue&label=%20&style=for-the-badge)](https://www.npmjs.com/package/mailersend.ts)
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

There are 2 possible methods for using the `mailersend.ts` api, either via importing the API function you wish to call directly.
For example:

```typescript
import { send } from "mailersend.ts";

async function main() {
  try {
    const response = await send({
      apiKey: "...",
      // ...
    });
  } catch (err) {
    console.error(err);
  }
}
main();
```

Or you can use the client object model:

```typescript
import { Client } from "mailersend.ts";

const client = new Client({
  apiKey: "...",
});

async function main() {
  try {
    const response = await client.send({
      // ...
    });
  } catch (err) {
    console.error(err);
  }
}
main();
```
