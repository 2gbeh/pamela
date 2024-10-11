import { AxiosError } from "axios";
import { GetThunkAPI, PayloadAction } from "@reduxjs/toolkit";
import { ISlice, IThunkError } from "./store.interface";

export class StoreHelper {
  static thunkError = (
    thunkAPI: GetThunkAPI<unknown>,
    resource: string,
    typePrefix: string,
    error: unknown
  ) => {
    console.log(`🚀 ~ ${resource}ServiceError ~ ${typePrefix}:`, error);
    if (error instanceof AxiosError)
      return thunkAPI.rejectWithValue(error.response?.data?.error?.message);
    return thunkAPI.rejectWithValue((error as IThunkError).message);
  };

  static casePending = (state: ISlice) => {
    state.isLoading = true;
    state.status = "pending";
    state.error = null;
  };

  static caseFulfilled = (state: ISlice) => {
    state.isLoading = false;
    state.status = "succeeded";
    state.error = null;
  };

  static caseRejected = (state: ISlice, action: PayloadAction<unknown>) => {
    state.isLoading = false;
    state.status = "failed";
    state.error = action.payload as string;
  };

  static toApiResponse = (response: unknown, success = true) => ({
    success,
    error: success
      ? null
      : {
          code: 0,
          message: response,
          details: null,
          validationErrors: null,
        },
    result: success ? response : null,
    targetUrl: null,
    unAuthorizedRequest: false,
    __abp: true,
  });
}
