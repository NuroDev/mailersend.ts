import { Client } from "./client";

export {
  activityByCountry,
  activityByDate,
  activityByReadingEnvironment,
  activityByUserAgent,
  bulkEmailStatus,
  createToken,
  createWebhook,
  deleteToken,
  deleteWebhook,
  listActivity,
  listMessages,
  listTemplates,
  listWebhooks,
  messageById,
  sendBulkEmails,
  sendEmail,
  templateById,
  updateToken,
  updateWebhook,
  webhookById,
} from "./modules";

export { Client };

export default Client;
