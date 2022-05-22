import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const usersAPI = "https://jsonplaceholder.typicode.com/users";

export const fetchUsersData = createAsyncThunk(
  "users/fetchUsersData",

  async function () {
    const usersResponse = await fetch(usersAPI);
    const usersData = await usersResponse.json();
    return usersData;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersEntities: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUsersData.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchUsersData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.usersEntities = action.payload;
    },
    [fetchUsersData.rejected]: (state, action) => {},
  },
});


export default usersSlice.reducer;
