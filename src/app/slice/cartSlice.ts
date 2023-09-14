import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Item = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    qty: number;
};
export type CartType = {
    cartItems: Item[] | null;
};

const initialState: CartType = {
    cartItems: null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            if (state.cartItems) {
                state.cartItems.forEach((item, idx) => {
                    if (item.id === action.payload.id) {
                        // @ts-expect-error
                        state.cartItems[idx] = action.payload;
                    }
                });
                if (state.cartItems.every((item) => item.id !== action.payload.id)) {
                    state.cartItems.push(action.payload);
                }
            } else {
                state.cartItems = [action.payload];
            }
        },
        deductItem: (state, action: PayloadAction<{ qty: number; id: number }>) => {
            if (state.cartItems) {
                state.cartItems.forEach((item, idx) => {
                    if (item.id === action.payload.id) {
                        if (item.qty !== 1) {
                            // @ts-expect-error
                            state.cartItems[idx] = { ...state.cartItems[idx], qty: action.payload.qty };
                        } else if (item.qty === 1) {
                            // @ts-expect-error
                            state.cartItems = state.cartItems?.filter((item) => item.id !== action.payload.id);
                        }
                    }
                });
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            if (state.cartItems) {
                if (state.cartItems.every((item) => item.id !== action.payload)) {
                    alert("the item is not available in the cart");
                    return;
                }
                state.cartItems = state.cartItems?.filter((item) => item.id !== action.payload);
            } else {
                alert("the item is not available in the cart");
            }
        },
    },
});

// actions
export const { addItem, deductItem, removeItem } = cartSlice.actions;

// reducer
export const cartReducer = cartSlice.reducer;
