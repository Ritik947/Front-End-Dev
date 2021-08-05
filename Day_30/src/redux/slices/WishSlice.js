import { createSlice } from "@reduxjs/toolkit";

const WishSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: null,
  },
  reducers: {
    addItemInWishlist: (state, action) => {
      state.wishlistItems = [...state.wishlistItems, action.payload];
    },
    removeItemFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addItemINWishlist, removeItemFromWishlist } = WishSlice.actions;
export default WishSlice.reducer;
