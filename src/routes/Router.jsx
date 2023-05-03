/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Home/Login/Login";
import Blog from "../pages/Home/Blog/Blog";
import ErrorPage from "../pages/Home/Home/ErrorPage/ErrorPage";
import Chefs from "../pages/Chefs/Chefs";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
         {
            path:'/login',
            element:<Login></Login>
         },
         {
            path:'/blog',
            element:<Blog></Blog>
         },
         {
            path:'*',
            element:<ErrorPage></ErrorPage>
         },
         {
            path: '/chef/:id',
            element:<Chefs></Chefs>
         }
        ]
    }
])

export default router;