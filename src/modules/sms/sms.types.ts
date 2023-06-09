export interface SendSmsParams extends Record<string, any> {
  from: string;
  /**
   * Min: 1
   *
   * Max: 50
   */
  to: Array<string>;
  /**
   * Max lenght: 2048
   */
  text: string;
  personalization?: Array<{
    data: Record<string, any>;
    phone_number: string;
  }>;
}

export type SendSmsResponse =
  | {
      success: true;
    }
  | {
      message: string;
      errors: Record<keyof SendSmsParams, Array<string>>;
      success: false;
    };
