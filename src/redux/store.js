import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from './cartSlise'

export default configureStore({
       reducer:{
        cart: cartReducer
       }
});