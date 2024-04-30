import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage, { loader as loaderHomePage } from './pages/HomePage/HomePage'
import Articles from './pages/Articles/Articles'
import ArticleDetail from './pages/ArticleDetail/ArticleDetail'
import Shop, { loader as loaderShopPage } from './pages/Shop/Shop'
import { action as newsLetterAction } from './pages/HomePage/HomePage'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    action: newsLetterAction,

    children: [
      {
        index: true,
        element: <HomePage />,
        loader: loaderHomePage,
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
    ],
  },
])
