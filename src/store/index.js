import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./store/users/reducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
