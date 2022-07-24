import { Client } from "./client";

export {
  activityByCountry,
  activityByDate,
  activityByReadingEnvironment,
  activityByUserAgent,
  addDomain,
  addToSuppressionList,
  bulkEmailStatus,
  createToken,
  createWebhook,
  deleteDomain,
  deleteFromSuppressionList,
  deleteRecipient,
  deleteScheduledMessage,
  deleteToken,
  deleteWebhook,
  dnsRecords,
  domainById,
  listActivity,
  listDomains,
  listMessages,
  listPhoneNumbers,
  listRecipients,
  listScheduledMessages,
  listSmsActivity,
  listSmsMessages,
  listSuppressions,
  listTemplates,
  listWebhooks,
  messageById,
  phoneNumberById,
  recipientById,
  recipientsForDomain,
  scheduledMessageById,
  sendBulkEmails,
  sendEmail,
  sendSms,
  smsActivityById,
  smsMessageById,
  templateById,
  updateDomain,
  updatePhoneNumber,
  updateToken,
  updateWebhook,
  verificationStatus,
  webhookById,
} from "./modules";

export { Client };

export default Client;
