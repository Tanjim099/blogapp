// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-[#003366] text-white w-64 space-y-6 p-6">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <nav className="space-y-2">
                <Link to="/admin/dashboard" className="block p-2 transition duration-300 hover:bg-blue-800 rounded">
                    Dashboard
                </Link>
                <Link to="/admin/posts" className="block p-2 transition duration-300 hover:bg-blue-800 rounded">
                    Posts
                </Link>
                <Link to="/admin/users" className="block p-2 transition duration-300 hover:bg-blue-800 rounded">
                    Users
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
