import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { lazy } from "react";


// const Home=lazy(()=>import('../views/Home'));
const Home=lazy(()=>import('../Pages/Home'))
const Media=lazy(()=>import('../Pages/Media'))

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
                path:'/media',
                element:<Media/>
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
