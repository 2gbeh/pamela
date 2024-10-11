import { axiosClient } from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PromiseHelper } from "@/utils/helpers/common/promise.helper";
import { StoreHelper } from "@/store/store.helper";
import { M } from "@/constants/MOCK";
import { ROUTE } from "@/constants/ROUTE";
// ///////////////////////////////////////////////
import { PostEntity } from "./post.interface";
import { POST } from "./post.constant";
import { postResource } from "./post.resource";

const { resource, typePrefix, mockApiResponseEntity } = POST;

const getAll = createAsyncThunk<
  PostEntity[],
  { signal: AbortSignal },
  { rejectValue: unknown }
>(typePrefix.getAll, async ({ signal }, thunkAPI) => {
  try {
    let res: unknown;
    if (M.posts.loader) {
      await PromiseHelper.mockApiCall();
      res = postResource.getPosts.data;
    } else {
      const raw = await axiosClient.get(ROUTE.posts, { signal });
      res = raw.data;
    }
    //
    return res as PostEntity[];
  } catch (err) {
    return StoreHelper.thunkError(thunkAPI, resource, typePrefix.getAll, err);
  }
});

// ///////////////////////////////////////////////
const getById = createAsyncThunk<
  PostEntity,
  { id: number; signal: AbortSignal },
  { rejectValue: unknown }
>(typePrefix.getById, async ({ id, signal }, thunkAPI) => {
  try {
    let res: unknown;
    if (M.post.loader) {
      await PromiseHelper.mockApiCall();
      res = mockApiResponseEntity;
    } else {
      const raw = await axiosClient.get(`${ROUTE.posts}/${id}`, { signal });
      res = raw.data;
    }
    //
    return res as PostEntity;
  } catch (err) {
    return StoreHelper.thunkError(thunkAPI, resource, typePrefix.getById, err);
  }
});

// ///////////////////////////////////////////////
const filter = createAsyncThunk<
  PostEntity[],
  { userId: number; signal: AbortSignal },
  { rejectValue: unknown }
>(typePrefix.filter, async ({ userId, signal }, thunkAPI) => {
  try {
    let res: unknown;
    if (M.posts.loader) {
      await PromiseHelper.mockApiCall();
      res = postResource.getPosts.data;
    } else {
      const raw = await axiosClient.get(`${ROUTE.posts}?userId=${userId}`, {
        signal,
      });
      res = raw.data;
    }
    //
    return res as PostEntity[];
  } catch (err) {
    return StoreHelper.thunkError(thunkAPI, resource, typePrefix.filter, err);
  }
});

export const postQueryService = {
  getAll,
  getById,
  filter,
};
