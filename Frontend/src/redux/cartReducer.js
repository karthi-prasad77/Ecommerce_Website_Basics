import { createSlice } from "@reduxjs/toolkit";

// Intial state
const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            // check condition : item available and add to cart
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        // remove item from the cart
        removeItem: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload)
        },
        // reset the cart (empty the cart)
        resetCart: (state, action) => {
            state.products = [] // empty array
        },
    },
});

// functionalities for cart operations
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;