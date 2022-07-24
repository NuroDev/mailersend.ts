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
  listPhoneNumbers,
  listSmsActivity,
  listSmsMessages,
  listTemplates,
  listWebhooks,
  messageById,
  phoneNumberById,
  recipientsForDomain,
  sendBulkEmails,
  sendEmail,
  sendSms,
  smsActivityById,
  smsMessageById,
  templateById,
  updateDomain,
  updateToken,
  updateWebhook,
  verificationStatus,
  webhookById,
} from "./modules";

export { Client };

export default Client;
