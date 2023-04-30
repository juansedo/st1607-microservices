import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bicycles from "./pages/Bicycles/Bicycles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "bicycles",
    element: <Bicycles />,
  }
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
