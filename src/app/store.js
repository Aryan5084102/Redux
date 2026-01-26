import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter/counterSlice";
import cartReducer from '../redux/cart/cartSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    },
})

