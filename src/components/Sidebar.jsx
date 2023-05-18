import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await newRequest.post("auth/logout");
            localStorage.setItem("currentUser", null);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    return (
        <div className="bg-gray-800 text-gray-100 h-screen w-64">
            {/* Sidebar content */}
            <div className="p-6 relative">
                <h2 className="text-2xl font-bold">Sidebar</h2>
                {/* Add your sidebar items here */}
                <ul
                    className="mt-4 relative "
                    style={{ height: "Calc(100vh - 100px)" }}
                >
                    <li className="py-2 hover:text-gray-200">
                        <NavLink
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }
                            to="/dashboard"
                        >
                            products
                        </NavLink>
                    </li>
                    {currentUser.role === "admin" && (
                        <li className="py-2 hover:text-gray-200">
                            <NavLink to="/users">Users</NavLink>
                        </li>
                    )}
                    {currentUser.role === "admin" && (
                        <li className="py-2 hover:text-gray-200">
                            <NavLink to="/createUser">Create User</NavLink>
                        </li>
                    )}
                    <li className="py-2 hover:text-gray-200">
                        <NavLink to="/createProduct">Create product</NavLink>
                    </li>
                    <li
                        className="py-2 hover:text-gray-200 absolute bottom-10"
                        onClick={handleLogout}
                    >
                        <button className="px-3 py-2 bg-white text-gray-950 rounded-sm ">
                            Logout
                        </button>
                    </li>
                    {/* ... */}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
