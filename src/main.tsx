import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Poems from './pages/poems';
import About from './pages/about';

import './index.css';
import PoemsSingle from './pages/poems-single';
import Moments from './pages/moments';
import Comments from './pages/comments';
import Books from './pages/books';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'poems',
        element: <Poems />,
      },
      {
        path: 'poems/:id',
        element: <PoemsSingle />,
      },
      {
        path: 'comments',
        element: <Comments />,
      },
      {
        path: 'moments',
        element: <Moments />,
      },
      {
        path: 'books',
        element: <Books />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
