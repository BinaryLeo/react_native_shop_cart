import {createSlice} from '@reduxjs/toolkit';

export const initialState ={
cart:[]
}
import { ICart } from '../../../types';
export const CartData =createSlice({
    name:'cartData',
    initialState:initialState,
    reducers: {
        addNewItem:(state: ICart,action)=>{
            console.log('Payload',action.payload);
            console.log('State',state);
            state.cart= [...state.cart, action.payload];
        }
    }
})

export const {addNewItem} =CartData.actions
export const cardStateData = (state:any) => state.cartData
export default CartData.reducer
