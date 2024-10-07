import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Poems from "./pages/poems";
import About from "./pages/about";

import "./index.css";
import PoemsSingle from "./pages/poems-single";
import Moments from "./pages/moments";
import Comments from "./pages/synlar";
import Books from "./pages/books";
import Messages from "./pages/messages";
import Contacts from "./pages/contacts";
import Instruction from "./pages/instruction";
import Synlar from "./pages/synlar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "poems",
        element: <Poems />,
      },
      {
        path: "poems/:id",
        element: <PoemsSingle />,
      },
      {
        path: "comments",
        element: <Synlar />,
      },
      {
        path: "moments",
        element: <Moments />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "instruction",
        element: <Instruction />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
