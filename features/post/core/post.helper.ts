import { IPostSlice, QueryPostDto } from "./post.interface";

export class PostHelper {
  static search(state: IPostSlice, action: QueryPostDto) {
    let q = action.payload;
    console.log("🚀 ~ PostHelper ~ search:", q);
    state.posts.filter((post) => {
      if (post.title.search(new RegExp(q, "i")) > -1) {
        state.searchedPosts.push(post);
      }
    });
  }
}
