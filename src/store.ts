import { configureStore } from '@reduxjs/toolkit'
import searchInputState from '../slices/counterSlice';

export const store = configureStore({
  reducer: {
    searchInput: searchInputState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;