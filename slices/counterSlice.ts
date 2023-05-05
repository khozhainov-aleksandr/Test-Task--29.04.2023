import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface searchInputState {
  value: string
}

const initialState: searchInputState = {
  value: '',
}

export const searchInputSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchInput: (state, action: PayloadAction<string>) => {
      state.value  = action.payload;
    },
  },
})

export const { searchInput } = searchInputSlice.actions

export default searchInputSlice.reducer