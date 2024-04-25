import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const ADD_CART = 'ADD_CART'

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      break

    default:
      break
  }
}

export const CartContexProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] })

  const cartItem = {
    items: cart.items,
  }
  return <CartContext.Provider value={cartItem}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  const context = useContext(CartContext)
  return context
}
export default CartContext
