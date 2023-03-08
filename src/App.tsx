import {
  createBrowserRouter as createRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Authors } from "./pages/Authors";
import { Gaussian } from "./pages/Gaussian";

export const App = () => {
  const router = createRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "authors", element: <Authors /> },
        { path: "gaussian", element: <Gaussian /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
