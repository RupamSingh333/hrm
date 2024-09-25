"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiHome, FiInfo, FiMail, FiFileText, FiLogIn, FiUser, FiLock, FiLogOut } from "react-icons/fi";
import Link from "next/link"; // Import Link from Next.js
import { useSession, signOut } from "next-auth/react"; // Import useSession and signOut

const FrontendHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { data: session } = useSession(); // Get session data

  const menuItems = [
    { name: "Home", icon: <FiHome />, path: "/" },
    { name: "About", icon: <FiInfo />, path: "/about" },
    { name: "Contact", icon: <FiMail />, path: "/contact" },
    { name: "Terms & Conditions", icon: <FiFileText />, path: "/terms" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = () => {
    signOut({ callbackUrl: '/login' }); // Logout and redirect to login page
  };

  return (
    <div className="font-sans fixed top-0 left-0 right-0">
      <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">CodeLabs India</div>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.path} className="text-white hover:text-gray-200 flex items-center transition duration-300">
                {item.icon}
                <span className="ml-1">{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            {session ? ( // Check if user is logged in
              <div className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <img
                    src={session.user.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"} // Use user's image or a default one
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </button>
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <FiUser className="mr-2" /> Profile
                    </Link>
                    <Link href="/change-password" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <FiLock className="mr-2" /> Change Password
                    </Link>
                    <a onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center cursor-pointer">
                      <FiLogOut className="mr-2" /> Logout
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <Link href={'/login'} className="text-white hover:text-gray-200 flex items-center transition duration-300">
                <FiLogIn className="mr-2" /> Sign In
              </Link>
            )}
            <button onClick={toggleMenu} className="md:hidden text-white ml-4 focus:outline-none">
              <FaBars size={24} />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.path} className="block text-white hover:text-gray-200 py-2 px-4 flex items-center">
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default FrontendHeader;
