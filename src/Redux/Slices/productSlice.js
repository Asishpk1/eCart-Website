import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
    const result=await axios('https://dummyjson.com/products') // get method is default
    localStorage.setItem("allProducts",JSON.stringify(result.data.products))
    return result.data.products 
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        searchProducts:[],
        loading:false,
        error:""
    },
    reducers:{
        searchingProduct:(state,action)=>{
            state.allProducts=state.dummyAllProducts.filter(pro=>pro.title.toLowerCase().includes(action.payload))
            
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.dummyAllProducts=action.payload
            state.loading=false
            state.error=""
        })
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.allProducts=[]
            state.loading=true
            state.error=""
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.allProducts=[]
            state.loading=false
            state.error="API CALL Failed. Please try again after sometime."
        })
    }
})

export const {searchingProduct} = productSlice.actions
export default productSlice.reducer