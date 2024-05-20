import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Main/Home";
import About from "../Pages/About/Main/About";
import SignUp from "../Pages/SignUp/Main/SignUp";
import SignIn from "../Pages/SignIn/Main/SignIn";
import Profile from "../Pages/Profile/Main/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
export default router;
