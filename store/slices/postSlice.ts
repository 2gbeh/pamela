import { createSlice } from "@reduxjs/toolkit";
import { StoreHelper } from "../store.helper";
import {
  IPostSlice,
  QueryPostDto,
  POST,
  PostHelper,
  postQueryService,
  postMutationService,
} from "@/features/post";

const initialState = {
  isLoading: false,
  status: "idle",
  error: null,
  //
  post: null,
  posts: [],
  searchedPosts: [],
} satisfies IPostSlice as IPostSlice;

const postSlice = createSlice({
  name: POST.resource,
  initialState,
  reducers: {
    search: (state, action: QueryPostDto) => PostHelper.search(state, action),
  },
  extraReducers: (builder) => {
    builder.addCase(postQueryService.getAll.pending, StoreHelper.casePending);
    builder.addCase(postQueryService.getAll.fulfilled, (state, action) => {
      StoreHelper.caseFulfilled(state);
      state.posts = action.payload;
    });
    builder.addCase(postQueryService.getAll.rejected, StoreHelper.caseRejected);
    // ///////////////////////////////////////////////
    builder.addCase(postQueryService.getById.pending, StoreHelper.casePending);
    builder.addCase(postQueryService.getById.fulfilled, (state, action) => {
      StoreHelper.caseFulfilled(state);
      state.post = action.payload;
    });
    builder.addCase(postQueryService.getById.rejected, StoreHelper.caseRejected);
  },
});

export const { reducer: postReducer, actions: postActions } = postSlice;

export const postService = { ...postQueryService, ...postMutationService };
