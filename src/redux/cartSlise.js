import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    productNumber: 0
}

export const createSlice = createSlice({
      name:"cart",
      initialState,
      reducers:{
        addToCart: (state, action) => {

        },
        removeFromCart:(state, action)=>{

        }
      }
});


export const {addToCart,removeFromCart} = createSlice.action;
export default createSlice.reducer;