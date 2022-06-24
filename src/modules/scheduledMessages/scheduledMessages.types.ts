import type { ScheduleStatus } from "~/types";

export interface ListScheduledMessagesParams extends Record<string, any> {
  domain_id?: string;
  /**
   * Min: 10
   *
   * Max: 100
   *
   * @default 25
   */
  limit?: number;
  page?: number;
  status?: ScheduleStatus;
}
