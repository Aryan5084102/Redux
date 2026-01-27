import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
    wishlistItems: [],
    wishlistQuantity: 0
}

const wishlistSlice = createSlice({
    name: "Wishlist",
    initialState,
    reducers: {
        AddtoWishlist: (state, action) => {
            const newWishlistItems = action.payload;
            const existingWishlistItem = state.wishlistItems.find(item => item.id === newWishlistItems.id)

            if(!existingWishlistItem){
                state.wishlistItems.push({...newWishlistItems, quantity: 1})
                state.wishlistQuantity++;
            }else{
                existingWishlistItem.quantity++
            }
        },
    }
})



export const {AddtoWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer