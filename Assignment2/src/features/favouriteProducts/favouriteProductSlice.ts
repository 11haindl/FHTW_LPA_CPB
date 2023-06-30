import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
export interface Product {
  barcode: string;
  name: string;
}
const initialState: Array<Product> = [
    {
        barcode: '8076800195057',
        name: 'Spaghetti Barilla',
    }
]
export const favouriteProductSlice = createSlice({
  name: "favouriteProduct",
  initialState,
  reducers: {
    addFavouriteProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
  },
});
export const { addFavouriteProduct } = favouriteProductSlice.actions;
export const favouriteProductSelector = (state: RootState) => state.favouriteProductReducer;
export const { actions: favouriteProductActions, reducer: favouriteProductReducer} = favouriteProductSlice
export default favouriteProductReducer;