import { createSlice } from "@reduxjs/toolkit";
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    savePost(state, action) {
      state.posts.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        content: action.payload.content,
        author: action.payload.author,
        data: `${new Date().getDate()} ${new Date().toLocaleString("en-us", {
          month: "long",
        })}`,
      });
    },
    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
});
export const { savePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
