/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Home/Login/Login";
import Blog from "../pages/Home/Blog/Blog";

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
         }
        ]
    }
])

export default router;