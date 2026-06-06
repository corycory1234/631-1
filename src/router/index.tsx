import { createBrowserRouter, Navigate } from "react-router";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" replace />,
        },
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ],
  {
    basename: "/631-1/", // GitHub 自動部屬, 要對齊 repo 英文名稱
  }
)

export default router;