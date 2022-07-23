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
  deleteToken,
  deleteWebhook,
  dnsRecords,
  domainById,
  listActivity,
  listDomains,
  listMessages,
  listTemplates,
  listWebhooks,
  messageById,
  recipientsForDomain,
  sendBulkEmails,
  sendEmail,
  templateById,
  updateDomainSettings,
  updateToken,
  updateWebhook,
  verificationStatus,
  webhookById,
} from "./modules";

export { Client };

export default Client;
