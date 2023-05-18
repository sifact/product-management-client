import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="flex ">
            <Sidebar className="" />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;
