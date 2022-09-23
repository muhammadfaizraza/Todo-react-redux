import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    content: "kuch nhi ",
    describe: "Kuch nhi",
  },

  {
    id: 1,
    content: "kuch nhi ",
    describe: "Kuch nhi",
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});
export const ExportAll = (state) => state.posts;
export const {postAdded} = postSlice.actions;
export default postSlice.reducer;
