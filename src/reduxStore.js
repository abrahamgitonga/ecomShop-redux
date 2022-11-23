import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productSlice from "./features/products/productSlice";
// import { cartReducer } from "./redux/reducers/Reducer";

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice
    }
})