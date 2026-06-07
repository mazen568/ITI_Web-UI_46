import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: localStorage.getItem("lang") || "en",
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export const {changeLang}=langSlice.actions; //for useDispatch => dispatch(changeLang("en")) or dispatch(changeLang("ar"))

export default langSlice.reducer;
