import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchProducts } from "../../services/FetchData";

export const fetchAllProducts = createAsyncThunk(
  "products/ShowAll",
  async (_, thunkAPI) => FetchProducts()
);

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    status: null,
    currentProduct: null,
    products: [],
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
  extraReducers: {
    [fetchAllProducts.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
  },
});

export const { setCurrentProduct, setProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
