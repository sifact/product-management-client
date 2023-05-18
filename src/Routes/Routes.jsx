import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Main";

import Login from "../pages/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import Products from "../pages/Products";
import Users from "../pages/Users";
import CreateUser from "../pages/CreateUser";
import CreateProduct from "../pages/CreateProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Login />,
            },
        ],
    },
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Products />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/createProduct",
                element: <CreateProduct />,
            },
            {
                path: "/createUser",
                element: <CreateUser />,
            },
        ],
    },
]);

export default router;
