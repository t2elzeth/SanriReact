import { configureStore } from "@reduxjs/toolkit";
import orders from "./orders";

const store = configureStore({
  reducer: { orders }
});

export default store;


