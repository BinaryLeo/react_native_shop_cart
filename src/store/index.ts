import {configureStore} from '@reduxjs/toolkit';
import CartData from './modules/cart/reducer';
export default configureStore({
    reducer:{
        cartData:CartData
    }
})