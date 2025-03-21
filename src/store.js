import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./redux/PasteSlice";

const store = configureStore({
  reducer: {
    pastes: pasteReducer,
  },
});

export default store;
