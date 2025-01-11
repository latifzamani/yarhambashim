import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { lazy } from "react";


// const Home=lazy(()=>import('../views/Home'));
const Home=lazy(()=>import('../Pages/Home'))
const Media=lazy(()=>import('../Pages/Media'))
const AboutUs=lazy(()=>import('../Pages/AboutUs'))
const ContactUs=lazy(()=>import('../Pages/ContactUs'))


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
            }
        ]
    },
    // {
    //     path:'/login',
    //     element:<Login/>
    // }
])

export default Router;


// private Route
// const PrivateRoute=({children})=>{
//     const token=localStorage.getItem('SMSTOKEN');
//     return token ? children : <Navigate to='/login' replace/>
// }
// export PrivateRoute;
// private Route
