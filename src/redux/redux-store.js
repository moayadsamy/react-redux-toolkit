import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter-slice";

export const reduxtStore = configureStore({ reducer: counterReducer });