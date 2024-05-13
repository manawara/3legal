import React, { createContext, useCallback, useContext, useReducer } from 'react'

const CartContext = createContext({
  items: {},
  addItem: () => {},
  updateAmount: () => {},
  status: {},
  shipping: '',
})

const ADD_CART = 'ADD_CART'
const DELETE_CART = 'DELETE_CART'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const UPDATE_SHIPPING = 'UPDATE_SHIPPING'
const UPDATE_STATUS = 'UPDATE_STATUS'
const UPDATE_AMOUNT = 'UPDATE_AMOUNT'
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

    case DELETE_CART: {
      const id = action.id

      let updateItems = [...state.items]
      const findIndex = updateItems.findIndex((el) => el.uid === id)
      if (findIndex === -1) {
        return state
      } else {
        const existingItem = state.items[findIndex]
        if (existingItem.count === 1) {
          updateItems = updateItems.filter((el) => el.uid !== id)
        } else {
          const updateItem = {
            ...existingItem,
            count: existingItem.count - 1,
          }
          updateItems[findIndex] = updateItem
        }
      }

      return {
        ...state,
        items: updateItems,
      }
    }
    case DELETE_PRODUCT: {
      let items = [...state.items]
      items = items.filter((el) => el.uid !== action.id)

      return { ...state, items }
    }
    case UPDATE_SHIPPING: {
      const value = action.value
      return { ...state, shipping: value }
    }
    case UPDATE_STATUS: {
      const status = action.data.status
      const active = action.data.active
      return { ...state, status, active }
    }
    case UPDATE_AMOUNT: {
      const subtotal = action.data.subtotal
      const total = action.data.total
      return {
        ...state,
        amount: {
          subtotal,
          total,
        },
      }
    }

    default:
      break
  }
  return state
}

export const CartContexProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    status: 'shoppingcart',
    shipping: 0,
    active: 1,
    amount: {
      subtotal: 0,
      total: 0,
    },
  })

  const addItem = (data) => {
    dispatchCartAction({ type: ADD_CART, data })
  }
  const deleteItem = (id) => {
    dispatchCartAction({ type: DELETE_CART, id })
  }
  const deleteProduct = (id) => {
    dispatchCartAction({ type: DELETE_PRODUCT, id })
  }

  const updateShipping = (e) => {
    const value = e.target.value
    dispatchCartAction({ type: UPDATE_SHIPPING, value })
  }
  const updateStatus = (status, active) => {
    dispatchCartAction({ type: UPDATE_STATUS, data: { status, active } })
  }
  const updateAmount = useCallback((data) => {
    dispatchCartAction({ type: UPDATE_AMOUNT, data })
  }, [])
  // const updateShipping = (e) => {
  //   const value = e.target.value
  //   dispatchCartAction({ type: UPDATE_SHIPPING, value })
  // }

  const cartItem = {
    items: cart.items,
    status: cart.status,
    active: cart.active,
    shipping: cart.shipping,
    amount: cart.amount,
    updateShipping,
    updateStatus,
    updateAmount,
    addItem,
    deleteItem,
    deleteProduct,
  }
  return <CartContext.Provider value={cartItem}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  const context = useContext(CartContext)
  return context
}
export default CartContext
