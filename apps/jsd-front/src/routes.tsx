import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateBicycle from "./pages/Bicycles/Create/CreateBicycle";
import Bicycles from "./pages/Bicycles/Bicycles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "bicycles",
    element: <Bicycles />,
  },
  {
    path: "bicycles/new",
    element: <CreateBicycle />,
  }
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
