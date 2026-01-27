import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddToCart: (state, action)  => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)

            if(!existingItem){
                state.items.push({...newItem, quantity: 1})
                state.totalQuantity++
            }else{
                existingItem.quantity++;
                alert("Already add in the cart")
            }
        },

        RemoveToCart: (state, action) =>{
            const Id = action.payload;
            const existingItem = state.items.find(item => item.id === Id )

            if(existingItem){
                state.totalQuantity -= existingItem.quantity
                state.items = state.items.filter(item => item.id !== Id)
            }

        }
    }
})


export const {AddToCart, RemoveToCart} = cartSlice.actions;
export default cartSlice.reducer;