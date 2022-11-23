import { createSlice } from "@reduxjs/toolkit";
import Cardsdata from "../../components/CardData";

const initialState = {
    product : Cardsdata
}



const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers(builder) {},
})

export default productSlice.reducer;