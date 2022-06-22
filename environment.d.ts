declare global {
  namespace NodeJS {
    interface ProcessEnv extends Dict<string> {
      /**
       * @name MAILERSEND_API_KEY
       *
       * @description MailerSend API key
       */
      MAILERSEND_API_KEY: string;

      /**
       * @name NODE_ENV
       *
       * @description Node.js runtime environment
       */
      NODE_ENV: "development" | "production" | string;
    }
  }
}

export {};
