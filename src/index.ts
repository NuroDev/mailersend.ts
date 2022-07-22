import { Client } from "./client";

export {
  activityByCountry,
  activityByDate,
  activityByReadingEnvironment,
  activityByUserAgent,
  activityList,
  bulkEmailStatus,
  createToken,
  deleteToken,
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
