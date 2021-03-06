import { createSlice } from "@reduxjs/toolkit";

const initialrefetchState = {
  refetchCount: 0,
};
const refetchSlice = createSlice({
  name: "refetch",
  initialState: initialrefetchState,
  reducers: {
    refetch(state, action) {
      if (!action.payload) {
        state.refetchCount++;
      }
    },
  },
});

export const refetchActions = refetchSlice.actions;
export default refetchSlice;
