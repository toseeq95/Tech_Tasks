import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-400 text-white px-6 py-4 shadow-md w-full mx-auto rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className=" font-bold sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl">
            Visualization
          </div>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-6 py-2 rounded-md transition duration-300 shadow-md"
          onClick={handleLogout}
        >
          LOGOUT
        </button>
      </div>
    </nav>
  );
}
