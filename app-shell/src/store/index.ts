import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import globalReducer from "./reducer";
// import globalReducer from "GLOBAL/global-slide";
// console.log(globalReducer.toString());
const globalReducer = {
    global: await import("GLOBAL/global-slide").then(
      (module) => module.default
    ),
  };
export const store = configureStore({
    reducer: combineReducers({
        ...globalReducer
    }),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;