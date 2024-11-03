import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import DashBoard from "../pages/DashBoard";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path: "/coffees",
            element:<Coffees></Coffees>
        },
        {
            path: "/dashboard",
            element:<DashBoard></DashBoard>
        },
      ]
    },
  
    {
      
    }
  ]);
  export default router