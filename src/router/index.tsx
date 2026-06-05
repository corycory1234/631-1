import { createBrowserRouter, Navigate } from "react-router";
import Home from "@/pages/Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/home" replace></Navigate>
    },
    {
      path: "/home",
      element: <Home></Home>
    },
  ],
  {
    basename: "/631-1/", // GitHub 自動部屬, 要對齊 repo 英文名稱
  }
)

export default router;