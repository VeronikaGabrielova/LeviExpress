import React from "react";
import { createRoot } from "react-dom/client";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Home } from "../Home";
import Reservation from "../Reservation";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

export const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

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
        path: "/reservation/:id",
        element: <Reservation />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
