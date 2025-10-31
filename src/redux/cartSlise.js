import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productsNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addProductExists = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity, 10);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity, 10),
        });
      }
      state.productsNumber += parseInt(action.payload.quantity, 10);
    },
    removeFromCart: (state, action) => {
      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );
      if (productToRemove) {
        state.productsNumber -= productToRemove.quantity;
        const index = state.products.findIndex(
          (product) => product.id === action.payload
        );
        state.products.splice(index, 1);
      }
    },
    incrementInCart: (state, action) => {
      const itemInc = state.products.find((item) => item.id === action.payload);
      if (itemInc) {
        itemInc.quantity += 1;
        state.productsNumber += 1;
      }
    },
    decrementInCart: (state, action) => {
      const itemDec = state.products.find((item) => item.id === action.payload);
      if (itemDec) {
        if (itemDec.quantity === 1) {
          const index = state.products.findIndex(
            (item) => item.id === action.payload
          );
          state.products.splice(index, 1);
        } else {
          itemDec.quantity--;
        }
        state.productsNumber--;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementInCart, decrementInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
