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
       * @name MAILERSEND_DOMAIN_ID
       *
       * @description MailerSend domain unique identifier
       */
      MAILERSEND_DOMAIN_ID: string;

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
