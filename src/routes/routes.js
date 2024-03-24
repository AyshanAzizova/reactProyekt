import Mainroot from "../pages/Mainroot";
import Home from '../pages/Home'
import ErrorPage from "../pages/ErrorPage";
import Checkout from "../pages/Checkout";

export const ROUTES = [
    {
        path:'/',
        element:<Mainroot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'*',
                element:<ErrorPage/>
            },
            {
                path:'checkout',
                element:<Checkout/>
            }
        ]
    }
]