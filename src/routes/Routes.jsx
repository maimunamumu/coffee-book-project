import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import DashBoard from "../pages/DashBoard";
import CoffeeCards from "../componet/CoffeeCards";
import CoffeeDetails from "../pages/CoffeeDetails";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:"Page Not Found",
      children:[
        {
            path:"/",
            element: <Home></Home>,
          loader: () => fetch('../categories.json'),
          children:[
            {
                path:"/",
                element: <CoffeeCards></CoffeeCards>,
                loader: () => fetch('../coffees.json')
            },
            {
                path:"/category/:category",
                element: <CoffeeCards></CoffeeCards>,
                loader: () => fetch('../coffees.json')
            },
          ]
        },
        {
            path: "/coffees",
            element:<Coffees></Coffees>,
            loader: () => fetch('../coffees.json')
        },
        {
            path: "/dashboard",
            element:<DashBoard></DashBoard>
        },
        {
          path:"/coffee/:id",
          element:<CoffeeDetails></CoffeeDetails>,
          loader: () => fetch('../coffees.json')
        }
      ]
    },
  
    {
      
    }
  ]);
  export default router