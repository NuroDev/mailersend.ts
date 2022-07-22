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
  listSmsMessages,
  listTemplates,
  messageById,
  phoneNumberById,
  sendBulkEmails,
  sendEmail,
  sendSms,
  smsMessageById,
  templateById,
  updateToken,
} from "./modules";

export { Client };

export default Client;
