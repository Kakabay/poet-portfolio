import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/home';
import Poems from './pages/poems';

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
        path: 'poems',
        element: <Poems />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
