import { axiosClient } from "@/lib/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PromiseHelper } from "@/utils/helpers/common/promise.helper";
import { StoreHelper } from "@/store/store.helper";
import { M } from "@/constants/MOCK";
import { ROUTE } from "@/constants/ROUTE";
// ///////////////////////////////////////////////
import { PostEntity, CreatePostDto, UpdatePostDto } from "./post.interface";
import { POST } from "./post.constant";

const { resource, typePrefix, mockApiResponseEntity } = POST;

const add = createAsyncThunk(
  typePrefix.add,
  async (body: CreatePostDto, thunkAPI) => {
    try {
      let res: unknown;
      if (M.post.action) {
        await PromiseHelper.mockApiCall();
        res = mockApiResponseEntity;
      } else {
        const raw = await axiosClient.post(ROUTE.posts, body);
        res = raw.data;
      }
      //
      return res as PostEntity;
    } catch (err) {
      return StoreHelper.thunkError(thunkAPI, resource, typePrefix.add, err);
    }
  }
);

// ///////////////////////////////////////////////
const edit = createAsyncThunk(
  typePrefix.edit,
  async (payload: UpdatePostDto, thunkAPI) => {
    try {
      let res: unknown;
      if (M.post.action) {
        await PromiseHelper.mockApiCall();
        res = mockApiResponseEntity;
      } else {
        const raw = await axiosClient.patch(
          `${ROUTE.posts}/${payload.id}`,
          payload.body
        );
        res = raw.data;
      }
      //
      return res as PostEntity;
    } catch (err) {
      return StoreHelper.thunkError(thunkAPI, resource, typePrefix.edit, err);
    }
  }
);

// ///////////////////////////////////////////////
const remove = createAsyncThunk(
  typePrefix.remove,
  async (id: number, thunkAPI) => {
    try {
      let res: unknown;
      if (M.post.action) {
        await PromiseHelper.mockApiCall();
        res = mockApiResponseEntity;
      } else {
        const raw = await axiosClient.delete(`${ROUTE.posts}/${id}`);
        res = raw.data;
      }
      //
      return res as PostEntity;
    } catch (err) {
      return StoreHelper.thunkError(thunkAPI, resource, typePrefix.remove, err);
    }
  }
);

export const postMutationService = {
  add,
  edit,
  remove,
};
