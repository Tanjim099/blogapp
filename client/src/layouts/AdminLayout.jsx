import React from "react";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 flex-col overflow-y-auto transition duration-500 ease-in-out">
                <div className="p-6">
                    <Routes>
                        <Route exact path="/admin/dashboard" />
                        <Route path="/admin/posts" />
                        <Route path="/admin/users" />
                    </Routes>
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;