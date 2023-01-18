import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    data: null,
    token: null,
    isLogin: null,
  },
  reducers: {
    setAuth(state, action) {
      console.log("test1", action.payload, "test2");
      state.data = action.payload.data;
      state.token = action.payload.token;
      state.isLogin = action.payload.isLogin;
    },
  },
});

export const { setAuth } = auth.actions;
export default auth.reducer;
