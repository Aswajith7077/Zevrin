import { createBrowserRouter } from "react-router";
import AllStats from "@/pages/AllStats";
import AppLayout from "@/layouts/AppLayout";
import ErrorPage from "@/pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [{ index: true, path: "all-stats", Component: AllStats }],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
