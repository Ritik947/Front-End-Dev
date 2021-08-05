import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./slices/ProductSlice";
import WishlistReducer from "./slices/WishSlice";

export default configureStore({
  reducer: {
    product: ProductReducer,
    wishlist: WishlistReducer,
  },
});
