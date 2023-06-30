import { configureStore } from '@reduxjs/toolkit';
import { favouriteProductReducer } from '../features/favouriteProducts/favouriteProductSlice'
export const store = configureStore({
  reducer: {
    favouriteProductReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;