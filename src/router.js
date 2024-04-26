import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage, { loader as loaderHomePage } from './pages/HomePage/HomePage'
import Articles from './pages/Articles/Articles'
import ArticleDetail from './pages/ArticleDetail/ArticleDetail'
import Shop from './pages/Shop/Shop'
import { action as newsLetterAction } from './pages/HomePage/HomePage'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        index: true,
        element: <HomePage />,
        loader: loaderHomePage,
        action: newsLetterAction,
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
      },
    ],
  },
])
