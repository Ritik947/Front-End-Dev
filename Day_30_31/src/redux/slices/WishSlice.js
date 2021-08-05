import { createSlice } from "@reduxjs/toolkit";

const WishSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: JSON.parse(localStorage.getItem("wishlistStore")) || [],
  },
  reducers: {
    addItemInWishlist: (state, action) => {
      state.wishlistItems = [...state.wishlistItems, action.payload];
      localStorage.setItem(
        "wishlistStore",
        JSON.stringify(state.wishlistItems)
      );
    },
    removeItemFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "wishlistStore",
        JSON.stringify(state.wishlistItems)
      );
    },
  },
});

export const { addItemInWishlist, removeItemFromWishlist } = WishSlice.actions;
export default WishSlice.reducer;
