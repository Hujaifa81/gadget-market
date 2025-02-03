import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CardDetails from "../pages/CardDetails";
import Dashboard from "../pages/Dashboard";
import Cards from "../components/Cards";
import Statistics from "../pages/Statistics";
import Signin from "../pages/Signin";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"), 
        children: [
          {
            index: true,
            element: <Cards />,
            loader: () => fetch("/data.json"),
          },
          {
            path: "/category/:id",
            element: <Cards />,
            loader: () => fetch("/data.json"),
          },
        ],
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "statistics",
        element: <Statistics />,
        loader:() => fetch("/data.json"),
      },
      {
        path: "details/:id",
        element: <CardDetails />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "category/:id/details/:id",
        element: <CardDetails />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "signin",
        element: <Signin />
        
      },
    ],
  },
]);
