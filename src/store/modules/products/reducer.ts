import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  cart: [], //Initial state of the cart
};
import { ICart, IProduct, ICartState } from "../../../types";
export const CartData = createSlice({
  name: "cartData",
  initialState: initialState,
  reducers: {
    addNewItem: (state: ICart, action: PayloadAction<IProduct>) => {
      console.log("Payload", action.payload);
      console.log("State", state);
      state.cart = [...state.cart, action.payload];
    }
  },
});
export const productState = (state: ICartState) => state.cart.cart;
export default CartData.reducer;
