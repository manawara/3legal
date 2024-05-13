import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage, { loader as loaderHomePage } from './pages/HomePage/HomePage'
import Articles from './pages/Articles/Articles'
import ArticleDetail from './pages/ArticleDetail/ArticleDetail'
import Shop, { loader as loaderShopPage } from './pages/Shop/Shop'
import { action as newsLetterAction } from './pages/HomePage/HomePage'
import { action as logoutAction } from './pages/Logout/Logout'
import AuthPage, { action as actionAuth } from './pages/AuthPage/AuthPage'
import { userData as userAuthLoader } from './helpers'
import ShoppingCart from './pages/ShopingCart/ShoppingCart'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    action: newsLetterAction,
    id: 'root',
    loader: userAuthLoader,

    children: [
      {
        index: true,
        element: <HomePage />,
        loader: loaderHomePage,
      },

      {
        path: 'auth',
        element: <AuthPage />,
        action: actionAuth,
      },

      {
        path: '/logout',
        action: logoutAction,
      },
      {
        path: 'articles',
        children: [
          {
            index: true,
            element: <Articles />,
          },
          {
            path: ':id',
            element: <ArticleDetail />,
          },
        ],
      },
      {
        path: 'shop',
        element: <Shop />,
        loader: loaderShopPage,
      },
      {
        path: '/shopping-cart',
        element: <ShoppingCart />,
      },
    ],
  },
])
