import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartOpen: false,
    cartItems: JSON.parse(localStorage.getItem("cartStore")) || [],
  },
  reducers: {
    addItemInCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      localStorage.setItem("cartStore", JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartStore", JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      state.cartItems[action.payload.index].quantity += action.payload.qty;
      localStorage.setItem("cartStore", JSON.stringify(state.cartItems));
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { addItemInCart, removeItemFromCart, updateQuantity, toggleCart } =
  CartSlice.actions;
export default CartSlice.reducer;
