import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/ProductSlice";
import WishlistReducer from "./slices/WishSlice";
import CartReducer from "./slices/CartSlice";

export default configureStore({
  reducer: {
    product: ProductReducer,
    wishlist: WishlistReducer,
    cart: CartReducer,
  },
});
