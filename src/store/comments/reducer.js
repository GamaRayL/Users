import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const commentsAPI = "https://jsonplaceholder.typicode.com/comments";

export const fetchCommentsData = createAsyncThunk(
  "comments/fetchCommentsData",

  async function () {
    const commentsResponse = await fetch(commentsAPI);
    const commentsData = await commentsResponse.json();
    return commentsData;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    commentsEntities: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCommentsData.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCommentsData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.commentsEntities = action.payload;
    },
    [fetchCommentsData.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export default commentsSlice.reducer;
