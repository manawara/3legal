import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage, { loader as loaderHomePage } from './pages/HomePage/HomePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        element: <HomePage />,
        loader: loaderHomePage,
      },
    ],
  },
])
