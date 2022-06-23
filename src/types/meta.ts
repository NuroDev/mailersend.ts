export type Event =
  | "clicked"
  | "delivered"
  | "hard_bounced"
  | "junk"
  | "opened"
  | "processed"
  | "queued"
  | "sent"
  | "soft_bounced"
  | "spam_complaints"
  | "unsubscribed";

export type ScheduleStatus = "scheduled" | "sent" | "error";

export type GroupBy = "ays" | "weeks" | "months" | "years";
