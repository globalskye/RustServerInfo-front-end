import { createBrowserRouter } from "react-router-dom";
import ClanList from "../pages/clans/ClanList";
import ConcreteClan from "../pages/clans/ConcretClan";
import RulesComponent from "../pages/home/components/Rules";
import Home from "../pages/home/Home";
import Home2 from "../pages/home/Home2";
import RegisterForm from "../pages/Theme";
import ConcretePlayer from "../pages/players/ConcretPlayer";
import PlayersList from "../pages/players/PlayersList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home2",
    element: <Home2 />,
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
    path: "/sign-up",
    element: <RegisterForm />,
  },
]);

export default router;
