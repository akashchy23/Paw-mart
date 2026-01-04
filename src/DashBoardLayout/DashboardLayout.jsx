import React from 'react';
import Navbar from '../Component/Navbar';
import Sidebar from '../Component/Sidebar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Navbar />
            </div>
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
