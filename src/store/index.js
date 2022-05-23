import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/reducer";
import postsReducer from "./posts/reducer";
import commentsReducer from "./comments/reducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});
