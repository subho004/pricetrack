// src/store/configureStore.ts

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/coinReducer"; // Replace with your actual reducer

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, devTools, or other configurations as needed
});

export default store;
