import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/reducer";
import postsReducer from "./posts/reducer";
import commentsReducer from "./comments/reducer";
import commentReducer from "./comment/reducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    comment: commentReducer,
  },
});
