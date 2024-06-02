import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import cryptosReducer from "./features/cryptosSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    cryptos: cryptosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
