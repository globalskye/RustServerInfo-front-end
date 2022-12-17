import { createBrowserRouter } from "react-router-dom";
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
]);

export default router;
