import { PayloadAction } from "@reduxjs/toolkit";
import { ISlice } from "@/store/store.interface";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IUserSlice extends ISlice {
  user: null | IUser;
  users: null | IUser[];
}

export interface UserEntity {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type CreateUserDto = Omit<UserEntity, "id">;

export type UpdateUserDto = Partial<Omit<UserEntity, "id" | "email">>;

export type QueryUserDto = Pick<UserEntity, "name" | "username">;

export enum UserDtoMapper {
  name = "name",
  username = "username",
  email = "email",
  address = "address",
  phone = "phone",
  website = "website",
  company = "company",
}
