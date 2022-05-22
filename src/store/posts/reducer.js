import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const postsAPI = "https://jsonplaceholder.typicode.com/posts";

export const fetchPostsData = createAsyncThunk(
  "posts/fetchPostsData",

  async function () {
    const postsResponse = await fetch(postsAPI);
    const postsData = await postsResponse.json();
    return postsData;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    postsEntities: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPostsData.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchPostsData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.postsEntities = action.payload;
    },
    [fetchPostsData.rejected]: (state, action) => {},
  },
});

export default postsSlice.reducer;
