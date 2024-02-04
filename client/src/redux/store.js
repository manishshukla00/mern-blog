import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: {
    user: rootReducer,
  },
});
