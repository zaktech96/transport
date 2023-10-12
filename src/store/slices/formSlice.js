import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "test",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changecCost(state, action) {
      state.cost = action.payload;
    },
  },
});

export const { changeName, changeCost } = formSlice.action;
export const formReducer = formSlice.reducer;
