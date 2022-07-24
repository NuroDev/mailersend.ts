import { Client } from "./client";

export {
  activityByCountry,
  activityByDate,
  activityByReadingEnvironment,
  activityByUserAgent,
  addDomain,
  bulkEmailStatus,
  createToken,
  createWebhook,
  deleteDomain,
  deleteScheduledMessage,
  deleteToken,
  deleteWebhook,
  dnsRecords,
  domainById,
  listActivity,
  listDomains,
  listMessages,
  listScheduledMessages,
  listTemplates,
  listWebhooks,
  messageById,
  recipientsForDomain,
  scheduledMessageById,
  sendBulkEmails,
  sendEmail,
  templateById,
  updateDomain,
  updateToken,
  updateWebhook,
  verificationStatus,
  webhookById,
} from "./modules";

export { Client };

export default Client;
