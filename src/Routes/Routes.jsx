import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../ErrorPage/Error";
import AddCraftItem from "../Pages/AddCraftItem";
import AllArtAndCraft from "../Pages/AllArtAndCraft";
import MyArtAndCraft from "../Pages/MyArtAndCraft";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DetailsPage from "../Pages/DetailsPage";
import PrivateRouter from "./PrivateRouter";
import UpdatePage from "../UpdatePage/UpdatePage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://art-store-server-sandy.vercel.app/art')
            },
            {
                path: '/addCraft',
                element: <PrivateRouter><AddCraftItem></AddCraftItem></PrivateRouter>
            },
            {
                path: '/allArt',
                element: <AllArtAndCraft></AllArtAndCraft>,
                loader: () => fetch('https://art-store-server-sandy.vercel.app/art')
            },
            {
                path: '/myArt',
                element: <PrivateRouter><MyArtAndCraft></MyArtAndCraft></PrivateRouter>,
                loader: () => fetch('https://art-store-server-sandy.vercel.app/art')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'details/:id',
                element: <PrivateRouter><DetailsPage></DetailsPage></PrivateRouter>,
                loader: ({ params }) => fetch(`https://art-store-server-sandy.vercel.app/art/${params.id}`)
            },
            {
                path: 'update/:id',
                element: <PrivateRouter><UpdatePage></UpdatePage></PrivateRouter>,
                loader: ({ params }) => fetch(`https://art-store-server-sandy.vercel.app/art/${params.id}`)
            }
        ]
    }
])

export default router;