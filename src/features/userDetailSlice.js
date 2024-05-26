import { createSlice } from "@reduxjs/toolkit";

export const userDetail = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: true,
    error: null,
  },
});

export default userDetail.reducer;
