export const storeUser = (data) => {
  localStorage.setItem(
    'user',
    JSON.stringify({
      username: data.username,
      token: data.token,
    })
  )
}

export const userData = () => {
  const user = localStorage.getItem('user') || '""'

  return JSON.parse(user || {})
}

export const calculateCart = (data) => {
  const calc = data.items.reduce((prev, curr) => {
    return prev + curr.price * curr.count
  }, 0)
  return { total: calc + +data.shipping, subtotal: calc }
}
