import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    setValue: (state, action) => {
      state.count = action.payload; // Atualiza com o valor do input
    },
  },
});

export const { increment, decrement, setValue } = counterSlice.actions;
export default counterSlice.reducer;
