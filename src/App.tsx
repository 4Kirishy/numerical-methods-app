import {
  createBrowserRouter as createRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";

export const App = () => {
  const router = createRouter([
    {
      path: "/",
      element: <Root />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};
