import { createBrowserRouter } from "react-router";
import AllStats from "@/pages/stats.page";
import AppLayout from "@/layouts/app.layout";
import ErrorPage from "@/pages/error.page";
import MessagesPage from "@/pages/integrations/Messaging.page";
import ExploreDealsPage from "@/pages/explore/explore-deals.page";
import ConnectionsPage from "@/pages/connections/connections.page";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, path: "stats", Component: AllStats },
      {
        path: "integrations",
        children: [
          {
            path: "messaging",
            Component: MessagesPage,
          },
        ],
      },
      { index: true, path: "explore-deals", Component: ExploreDealsPage },
      { index: true, path: "connections", Component: ConnectionsPage },
      { index: true, path: "nearby-deals", Component: ConnectionsPage },
      { index: true, path: "credits", Component: ConnectionsPage },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
