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
  listTemplates,
  messageById,
  sendBulkEmails,
  sendEmail,
  templateById,
  updateToken,
} from "./modules";

export { Client };

export default Client;
