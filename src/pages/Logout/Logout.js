import { redirect } from 'react-router-dom'

export const action = () => {
  localStorage.removeItem('user')
  return redirect('/')
}
