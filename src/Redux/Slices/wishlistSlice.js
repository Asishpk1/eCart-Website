import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishlistSlice=createSlice({
    name:'mywishlist',
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{

            state.push(action.payload)
            toast.success(`${action.payload.title} added to Wishlist`)
        },
        removeFromWishlist:(state,action)=>{
           return state.filter(item=>item.id!=action.payload)
        }
    }
})


export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions
export default wishlistSlice.reducer