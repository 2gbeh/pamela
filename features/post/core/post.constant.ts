import { StoreHelper } from "@/store/store.helper";

export const POST = {
  resource: "post",
  typePrefix: {
    getAll: "post/getAll",
    getById: "post/getById",
    add: "post/add",
    edit: "post/edit",
    remove: "post/remove",
    search: "post/search",
    filter: "post/filter",
  },
  mockApiResponseEntity: {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
};
