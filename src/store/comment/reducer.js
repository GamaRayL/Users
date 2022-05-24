import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const commentsAPI = "https://jsonplaceholder.typicode.com/comments";

export const fetchComment = createAsyncThunk(
  "comment/fetchComment",
  async ({ name, email, comment }) => {
    const response = await fetch(commentsAPI, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, comment }),
    });
    return response.data;
  }
);

const initialState = { name: "", email: "", comment: "" };

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    writeInputValue: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { writeInputValue } = commentSlice.actions;
export default commentSlice.reducer;
