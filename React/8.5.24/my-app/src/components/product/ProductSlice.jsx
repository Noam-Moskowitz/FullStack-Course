import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/`);
        return response.data
    }
);

export const ProductSlice = createSlice({
    name: `products`,
    initialState: [],
    reducers: {},
    extraReducers:builder =>{
        builder
            .addCase(fetchProducts.pending, state => {
            state.status= `loading`
            })
            .addCase(fetchProducts.fulfilled, (state, action)=>{
                state.state = 'succeeded';
                state.items= action.payload
            })
    }
});


export default ProductSlice.reducer;