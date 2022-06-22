export { getActivityList, type ActivityListParams } from "./activity";

export {
  getActivityByCountry,
  getActivityByDate,
  getActivityByReadingEnvironment,
  getActivityByUserAgent,
  type ActivityByCountryParams,
  type ActivityByDateParams,
  type ActivityByReadingEnvironmentParams,
  type ActivityByUserAgentParams,
} from "./analytics";

export {
  addDomain,
  deleteDomain,
  getDnsRecords,
  getRecipientsForDomain,
  getSingleDomain,
  getVerificationStatus,
  listDomains,
  updateDomainSettings,
  type AddDomainParams,
  type DeleteDomainParams,
  type DnsRecordsParams,
  type ListDomainsParams,
  type RecipientsForDomainParams,
  type SingleDomainParams,
  type UpdateDomainSettingsParams,
  type VerificationStatusParams,
} from "./domains";

export {
  bulkEmailStatus,
  send,
  sendBulk,
  type SendBulkParams,
  type SendParams,
} from "./email";

export {
  deleteScheduledMessage,
  listScheduledMessages,
  singleScheduledMessage,
  type ListScheduledMessagesParams,
} from "./scheduledMessages";

export {
  allTemplates,
  deleteTemplate,
  templateById,
  type AllTemplatesParams,
} from "./templates";

