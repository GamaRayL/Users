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

// export const addNewComment = createAsyncThunk(
//   "comments/addNewComment",
//   async function (name, email, body) {
//     try {
//       const comment = {
//         name: name,
//         email: email,
//         body: body,
//         postId: 1,
//       };
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/comments",
//         {
//           method: "POST",
//           headers: { "Content-type": "application/json; charset=UTF-8" },
//           body: JSON.stringify(comment),
//         }
//       );
//       if (!response.ok) {
//         console.log("Server error");
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       return error;
//     }
//   }
// );

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
