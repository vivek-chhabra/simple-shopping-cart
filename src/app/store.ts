import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slice/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
