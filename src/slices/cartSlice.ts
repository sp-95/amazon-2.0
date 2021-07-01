import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@app/store'
import type ICartItem from '@/@types/cartItem'

interface CartState {
  items: ICartItem[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )

      if (index < 0) {
        state.items = [...state.items, action.payload]
      } else {
        state.items[index].quantity += 1
      }
    },
    removeFromCart: (state, action: PayloadAction<ICartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    updateInCart: (state, action: PayloadAction<ICartItem>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      state.items[index] = action.payload
    },
  },
})

export const { addToCart, removeFromCart, updateInCart } = cartSlice.actions

export const selectItems = (state: RootState): ICartItem[] => state.cart.items
export const selectSelectedItems = (state: RootState): ICartItem[] =>
  state.cart.items.filter((item) => item.checked)
export const selectTotal = (state: RootState): number =>
  state.cart.items
    .filter((item) => item.checked)
    .reduce((total, curr) => total + curr.price * curr.quantity, 0)

export default cartSlice.reducer
