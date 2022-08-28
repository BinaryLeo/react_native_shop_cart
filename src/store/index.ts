import {configureStore} from '@reduxjs/toolkit';
import cartData from './modules/cart/reducer';
export const store = configureStore({
    reducer:{
        //cartData:cartData
        cart: cartData
    }
})