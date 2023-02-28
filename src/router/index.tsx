import { createBrowserRouter } from "react-router-dom";
import AdminPage from "../pages/admin/AdminPage";

import ClanList from "../pages/clans/ClanList";
import ConcreteClan from "../pages/clans/ConcretClan";
import RulesComponent from "../pages/home/components/Rules";
import Home from "../pages/home/Home";

import ConcretePlayer from "../pages/players/ConcretPlayer";
import PlayersList from "../pages/players/PlayersList";
import ProfilePage from "../pages/profile/Profile";

import ShopPage from "../pages/shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },

  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/players",
    element: <PlayersList />,
  },

  {
    path: "/players/:name",
    element: <ConcretePlayer />,
  },
  {
    path: "/clans",
    element: <ClanList />,
  },
  {
    path: "/clans/:name",
    element: <ConcreteClan />,
  },

  {
    path: "/rules",
    element: <RulesComponent />,
  },
  {
    path:"/admin",
    element: <AdminPage />
  }
]);

export default router;
