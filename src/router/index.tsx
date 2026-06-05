import { createBrowserRouter, Navigate } from "react-router";
import type { RouteObject } from "react-router";
import Home from "@/pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" replace></Navigate>
  },
  {
    path: "/home",
    element: <Home></Home>
  }
];

const router = createBrowserRouter(routes);
export default router;