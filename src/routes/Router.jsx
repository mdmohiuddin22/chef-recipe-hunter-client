/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Home/Login/Login";
import Blog from "../pages/Home/Blog/Blog";
import ErrorPage from "../pages/Home/Home/ErrorPage/ErrorPage";
import Chefs from "../pages/Chefs/Chefs";
import ChepsInfo from "../pages/ChefsInfo/ChepsInfo";
import Register from "../pages/Home/Home/Registration/Registration";


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
path:'/signup',
element:<Register></Register>
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
         },
         {
         path:'/chefs',
         element:<ChepsInfo></ChepsInfo>
         }
      
        ]
    }
])

export default router;