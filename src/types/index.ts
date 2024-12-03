export interface VerificationPayload {
  address?: string;
  twitter?: string;
  telegram?: string;
  startTimestamp?: string;
  endTimestamp?: string;
}

export interface ApiResponse {
  error: {
    code: number;
    message: string;
  };
  data: {
    result: boolean;
  };
}
