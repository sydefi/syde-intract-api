export interface VerificationPayload {
  address?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;
  email?: string;
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
