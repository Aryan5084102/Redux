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
                state.items.push({...newItem})
                state.totalQuantity++;

            }else{
                alert("Already add in the cart")
            }

        },

        // RemoveToCart: (state, action) =>{
        //     const id = action.payload;
        //     const existingItem = state.items.find(item => item.id === id )

        //     if(existingItem){
        //         state.totalQuantity--
        //         state.items.filter(item => item.id !== id)
        //     }
        // }
    }
})


export const {AddToCart, RemoveToCart} = cartSlice.actions;
export default cartSlice.reducer;