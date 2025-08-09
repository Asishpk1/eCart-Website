import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from './Slices/productSlice'
import wishlistSliceReducer from './Slices/wishlistSlice'
import cartSliceReducer from './Slices/cartSlice'


const eCartStore=configureStore({
    reducer:{
        productReducer:productSliceReducer,
        wishlistReducer:wishlistSliceReducer,
        cartReducer:cartSliceReducer

    }
})

export default eCartStore