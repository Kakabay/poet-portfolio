import "./index.css";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./pages/protected-route";
import { routes } from "./lazy-routes";
import { Spin } from "./components/shared";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      path: route.path,
      element: (
        <Suspense fallback={<Spin />}>
          {route.path === "cabinet" ? (
            <ProtectedRoute>{<route.element />}</ProtectedRoute>
          ) : (
            <route.element />
          )}
        </Suspense>
      ),
    })),
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
