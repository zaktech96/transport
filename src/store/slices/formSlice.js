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
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});

export const { changeName, changeCost } = formSlice.actions; // Change ".action" to ".actions"
export const formReducer = formSlice.reducer;
