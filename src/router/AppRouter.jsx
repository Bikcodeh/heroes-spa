import { createBrowserRouter, Navigate } from "react-router-dom";

import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DCPage } from "../heroes/pages/DCPage";
import { LoginPage } from "../auth/pages/LoginPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/marvel" />,
  },
  {
    path: "marvel",
    element: <MarvelPage />,
  },
  {
    path: "dc",
    element: <DCPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);
