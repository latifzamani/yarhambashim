import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { lazy } from "react";
import DashboardLayoutInt from "../Dashboard/DashboardLayoutInt";
import VerifyEmail from "./VerifyEmail";


// const Home=lazy(()=>import('../views/Home'));
const Home=lazy(()=>import('../Pages/Home'))
const Media=lazy(()=>import('../Pages/Media'))
const AboutUs=lazy(()=>import('../Pages/AboutUs'))
const ContactUs=lazy(()=>import('../Pages/ContactUs'))
const Donation=lazy(()=>import('../Pages/Donation'))
const EventReadMore=lazy(()=>import('../Pages/EventReadMore'))
const ProjectReadMore=lazy(()=>import('../Pages/ProjectReadMore'))
const WhatWD=lazy(()=>import('../Pages/WhatWD'))
const Dashboard=lazy(()=>import('../Dashboard/pages/Dashboard'));
const Login =lazy(()=>import('../Pages/Login'));
const Register=lazy(()=>import('../Pages/Register'));
const DMedia=lazy(()=>import('../Dashboard/pages/Media'));
const Info=lazy(()=>import('../Dashboard/pages/Info'));
const Users=lazy(()=>import('../Dashboard/pages/Users'));
const AddProject=lazy(()=>import('../Dashboard/pages/AddProject'));


const Router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'media',
                element:<Media/>
            },
            {
                path:'aboutUs',
                element:<AboutUs/>
            },
            {
                path:'contact',
                element:<ContactUs/>
            },
            {
                path:'donation',
                element:<Donation/>
            },
            {
                path:'eventreadmore/:id',
                element:<EventReadMore/>
            },
            {
                path:'/projectreadmore',
                element:<ProjectReadMore/>
            },
            {
                path:'/projectreadmore/:id',
                element:<ProjectReadMore/>
            },
            {
                path:'/whatwd',
                element:<WhatWD/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayoutInt/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/dashboard/addProject',
                element:<AddProject/>
            },
            {
                path:'/dashboard/editProject/:id',
                element:<AddProject/>
            },
            {
                path:'/dashboard/register',
                element:<Register/>
            },
            {
                path:'/dashboard/media',
                element:<DMedia/>
            },
            {
                path:'/dashboard/info',
                element:<Info/>
            },
            {
                path:'/dashboard/users',
                element:<Users/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/verifyemail',
        element:<VerifyEmail/>
    }
])

export default Router;


// private Route
// const PrivateRoute=({children})=>{
//     const token=localStorage.getItem('SMSTOKEN');
//     return token ? children : <Navigate to='/login' replace/>
// }
// export PrivateRoute;
// private Route
