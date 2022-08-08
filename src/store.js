import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./components/moviesSlice";
const store = configureStore({
  reducer: {
      moviesSlice:moviesSlice
  }
});
export default store