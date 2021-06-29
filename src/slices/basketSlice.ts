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
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index < 0) {
        state.items = [...state.items, action.payload]
      } else {
        state.items[index].quantity += 1
      }
    },
    removeFromBasket: (state, action: PayloadAction<IItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    updateInBasket: (state, action: PayloadAction<IItem>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      state.items[index] = action.payload
    },
  },
})

export const { addToBasket, removeFromBasket, updateInBasket } =
  basketSlice.actions

export const selectItems = (state: RootState): IItem[] => state.basket.items
export const selectTotal = (state: RootState): number =>
  state.basket.items.reduce(
    (total, curr) => total + curr.price * curr.quantity,
    0
  )

export default basketSlice.reducer
