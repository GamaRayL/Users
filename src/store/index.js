import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/reducer";
import postsReducer from "./posts/reducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});
