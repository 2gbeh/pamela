export interface ThunkAPI {
  dispatch: Function;
  getState: Function;
  extra?: any;
  requestId: string;
  signal: AbortSignal;
}

export interface IThunkError {
  message: string;
}

export interface ISlice {
  isLoading: boolean;
  status?: "idle" | "pending" | "succeeded" | "failed";
  error: null | string;
}

export interface IApiResponse {
  result: null | Record<string, unknown>;
  targetUrl: null | string;
  success: boolean;
  error: null | {
    code: number;
    message: string;
    details: null;
    validationErrors: null;
  };
  unAuthorizedRequest: boolean;
  __abp: boolean;
}
