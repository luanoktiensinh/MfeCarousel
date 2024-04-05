import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        background: '#1f3489'
    },
    reducers: {
      setBackground(state, action) {
        state.background = action.payload;
      }
    }
  });
  const { actions, reducer } = globalSlice;
  export const { setBackground } = actions;
  export default reducer;