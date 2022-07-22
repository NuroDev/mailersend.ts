import { Client } from "./client";

export {
  activityByCountry,
  activityByDate,
  activityByReadingEnvironment,
  activityByUserAgent,
  activityList,
  createToken,
  deleteToken,
  listMessages,
  listTemplates,
  messageInfoById,
  sendBulkEmails,
  sendEmail,
  templateById,
  updateToken,
} from "./modules";

export { Client };

export default Client;
