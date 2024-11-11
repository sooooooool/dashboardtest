// src/components/Layout/Header.js

import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded-lg"
      />
    </header>
  );
};

export default Header;
