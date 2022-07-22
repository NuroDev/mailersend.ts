import { Client } from "./client";

export {
  activityByCountry,
  activityByDate,
  activityByReadingEnvironment,
  activityByUserAgent,
  bulkEmailStatus,
  createToken,
  deleteToken,
  listActivity,
  listMessages,
  listPhoneNumbers,
  listSmsActivity,
  listSmsMessages,
  listTemplates,
  messageById,
  phoneNumberById,
  sendBulkEmails,
  sendEmail,
  sendSms,
  smsActivityById,
  smsMessageById,
  templateById,
  updateToken,
} from "./modules";

export { Client };

export default Client;
