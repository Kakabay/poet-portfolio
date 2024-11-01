import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import Poems from './pages/poems';
import About from './pages/about';

import PoemsSingle from './pages/poems-single';
import Moments from './pages/moments';
import Books from './pages/books';
import Messages from './pages/messages';
import Contacts from './pages/contacts';
import Register from './pages/register';
import Synlar from './pages/synlar';
import Cabinet from './pages/cabinet';
import MomentsSingle from './pages/moments-single';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoute from './pages/protected-route';

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
        element: <Synlar />,
      },
      {
        path: 'moments',
        element: <Moments />,
      },
      {
        path: 'moments/:id',
        element: <MomentsSingle />,
      },
      {
        path: 'books',
        element: <Books />,
      },
      {
        path: 'messages',
        element: <Messages />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'instruction',
        element: <Register />,
      },
      {
        path: 'cabinet',
        element: (
          <ProtectedRoute>
            <Cabinet />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
