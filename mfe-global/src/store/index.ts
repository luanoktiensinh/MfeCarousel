import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import globalReducer from "./reducer";

const Store = configureStore({
  reducer: combineReducers({
    global: globalReducer
  }),
});

export { Store };
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();