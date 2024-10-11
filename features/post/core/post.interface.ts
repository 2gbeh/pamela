import { PayloadAction } from "@reduxjs/toolkit";
import { ISlice } from "@/store/store.interface";

export interface PostEntity {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface IPostSlice extends ISlice {
  post: null | PostEntity;
  posts: PostEntity[];
  searchedPosts: PostEntity[];
}

export type CreatePostDto = Omit<PostEntity, "id">;

export type UpdatePostDto = {
  id: number;
  body: {
    title?: string;
    body?: string;
  };
};

export type QueryPostDto = PayloadAction<string>;

export interface IPost {
  id: number;
  title: string;
  description: string;
  user_id: number;
}

export enum PostDtoMapper {
  title = "title",
  description = "body",
  user_id = "userId",
}
