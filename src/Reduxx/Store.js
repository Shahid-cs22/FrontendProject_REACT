import { configureStore,  } from "@reduxjs/toolkit";
import AddToCart from "../Pages/AddCart/AddTOCart";

export const Store= configureStore({
    reducer:{
        cart: AddToCart
    }
})