import {
  createBrowserRouter as createRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from "./pages/Root";

export const App = () => {
  const router = createRouter([
    {
      path: "/",
      element: <Root />,
      children: [],
    },
  ]);

  return <RouterProvider router={router} />;
};
