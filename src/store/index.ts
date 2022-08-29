import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import cartData from './modules/cart/reducer';
import  productData  from './modules/products/reducer';

const rootReducers = combineReducers({
    cart:cartData,
    products:productData
})

export const store = configureStore({
    reducer: rootReducers
        
    
})