import About from "../../Components/Pages/About/About";
import Login from "../../Components/Pages/Authentication/Login/Login";
import Registration from "../../Components/Pages/Authentication/Registration/Registration";
import Home from "../../Components/Pages/Home/Home";
import NotFound from "../../Components/Pages/NotFound/NotFound";
import Profile from "../../Components/Pages/Profile/Profile";
import Main from "../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])