import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipes";

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});

export default store;
