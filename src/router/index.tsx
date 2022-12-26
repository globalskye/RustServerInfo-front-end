import { createBrowserRouter } from "react-router-dom";
import ClanList from "../pages/clans/ClanList";
import ConcreteClan from "../pages/clans/ConcretClan";
import RulesComponent from "../pages/home/components/Rules";
import Home from "../pages/home/Home";
import Home2 from "../pages/home/Home2";
import ConcreteUser from "../pages/users/ConcretUser";
import UsersList from "../pages/users/UsersList";

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
    path: "/users",
    element: <UsersList />,
  },
  {
    path: "/users",
    element: <UsersList />,
  },
  {
    path: "/users/:name",
    element: <ConcreteUser />,
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
    path:"/rules",
    element: <RulesComponent />,
  }
]);

export default router;
