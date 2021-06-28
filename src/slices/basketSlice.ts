import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@app/store'
import { IItem } from '@/@types/item'

interface BasketState {
  items: IItem[]
}

const initialState: BasketState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IItem>) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action: PayloadAction<IItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectItems = (state: RootState): IItem[] => state.basket.items

export default basketSlice.reducer
