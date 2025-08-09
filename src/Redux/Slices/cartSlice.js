import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice=createSlice({
    name:"myCart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{

            const existingProduct=state.find(product=>product.id==action.payload.id)
            
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
                toast.success(`${action.payload.title} quantity increased`)
                
            }
            else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price}) 
                toast.success(`${action.payload.title} added to Cart`)
            }
        },

        quantityincrease:(state,action)=>{
            const existingProduct=state.find(pro=>pro.id==action.payload)
            // console.log(existingProduct);
            
           if(existingProduct){
             existingProduct.quantity++
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
           }
        },
        quantitydecrease:(state,action)=>{
            const existingProduct=state.find(pro=>pro.id==action.payload)

           if(existingProduct){
             existingProduct.quantity--
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
           }
        },
        removeFromCart:(state,action)=>{
            return state.filter(pro=>pro.id!=action.payload)
        },
        emptyCart:(state,action)=>{
            return []
        }
    }
})

export const {addToCart,quantityincrease,quantitydecrease,removeFromCart,emptyCart}=cartSlice.actions
export default cartSlice.reducer