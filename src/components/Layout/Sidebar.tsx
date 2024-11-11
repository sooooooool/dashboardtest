// src/components/Layout/Sidebar.tsx

import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 p-6 bg-white shadow-md">
      <div className="flex items-center mb-6 space-x-4">
        <img
          src="/user-profile.png"
          alt="User"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">User Name</h2>
          <p className="text-sm text-gray-500">info@yourmail.com</p>
        </div>
      </div>
      <ul className="space-y-4">
        <li>
          <Link href="/" legacyBehavior>
            <a className="text-lg font-medium hover:text-primary">Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/settings" legacyBehavior>
            <a className="text-lg font-medium hover:text-primary">Settings</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
