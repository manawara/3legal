import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext({
  items: {},
  addItem: () => {},
})

const ADD_CART = 'ADD_CART'

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      const item = action.data
      let updateItems = [...state.items]
      const findIndex = updateItems.findIndex((el) => el.uid === item.uid)
      if (findIndex === -1) {
        item.count = 1
        updateItems.push(item)
      } else {
        const existingItem = state.items[findIndex]
        const updateItem = {
          ...existingItem,
          count: existingItem.count + 1,
        }
        updateItems[findIndex] = updateItem
      }

      return {
        ...state,
        items: updateItems,
      }

    default:
      break
  }
  return state
}

export const CartContexProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })

  const addItem = (data) => {
    dispatchCartAction({ type: ADD_CART, data })
  }
  const cartItem = {
    items: cart.items,
    addItem,
  }
  return <CartContext.Provider value={cartItem}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  const context = useContext(CartContext)
  return context
}
export default CartContext
