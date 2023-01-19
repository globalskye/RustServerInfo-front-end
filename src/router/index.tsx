import { createBrowserRouter } from "react-router-dom";
import RegisterForm from "../pages/auth/Register";

import ClanList from "../pages/clans/ClanList";
import ConcreteClan from "../pages/clans/ConcretClan";
import RulesComponent from "../pages/home/components/Rules";
import Home from "../pages/home/Home";

import ConcretePlayer from "../pages/players/ConcretPlayer";
import PlayersList from "../pages/players/PlayersList";

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
    element: <Home />,
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
    path: "/test",
    element: <RegisterForm />
  },
  {
    path: "/rules",
    element: <RulesComponent />,
  },
]);

export default router;
