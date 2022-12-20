import { createBrowserRouter } from "react-router-dom";
import ClanList from "../pages/clans/ClanList";
import ConcreteClan from "../pages/clans/ConcretClan";
import Home from "../pages/home/Home";
import ConcreteUser from "../pages/users/ConcretUser";
import UsersList from "../pages/users/UsersList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
]);

export default router;
