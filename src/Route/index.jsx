import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace={true} />,
    },
    {
      path: "/login",
      element: <Login />,
      exact:true
    },
    {
        path: "/home",
        element: <Home />,
        exact:true
      },
  ]);

