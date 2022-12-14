import {
   createSlice,
  PayloadAction
 }
  from "@reduxjs/toolkit";

export const initialState = {
  cart: [], //Initial state of the cart
};
import { ICart, IProduct, ICartState } from "../../../types";
export const CartData = createSlice({
  name: "cartData",
  initialState: initialState,
  reducers: {
    addNewItem: (state: ICart, action: PayloadAction<IProduct>) => {
     
      state.cart = [...state.cart, action.payload];
    },
    removeCartItem: (state: ICart, action: PayloadAction<number>) => {
      const { payload } = action;
      state.cart.splice(payload, 1)
    },
  },
});

export const { addNewItem, removeCartItem} = CartData.actions;
export const cardStateData = (state: ICartState) => state.cart.cart;
export default CartData.reducer;
