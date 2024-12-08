"use client"; // This ensures the component is rendered on the client-side

import React, { useState } from "react";
import Link from "next/link";

export default function Logobar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      {/* Header with Logo and Cart Button */}
      <div className="container flex justify-between items-center bg-[#F0F2F3] text-[#272343] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3">
        <div className="flex items-center">
          <Link href="/" className="flex">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <p className="text-[#272343] pt-1 text-lg font-medium">Comforty</p>
          </Link>
        </div>

        {/* Cart Button */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center bg-white shadow-md rounded-md px-4 py-2 hover:shadow-lg transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#272343] mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 6h15l-1.5 9h-13z" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            <span className="text-[#272343] text-sm font-medium mr-2">
              <Link href="/cart">Cart</Link>
            </span>
            <div className="bg-[#25C1A9] text-white text-xs font-semibold rounded-full h-6 w-6 flex items-center justify-center">
              3
            </div>
          </button>
        </div>

        {/* Hamburger Menu (Mobile view) */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#272343] text-2xl">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="container flex justify-between items-center bg-white text-[#272343] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3">
        <nav className={`w-full ${isMenuOpen ? "block" : "hidden"} lg:block`}>
          <ul className="text-[#636270] flex flex-col sm:flex-row gap-6 justify-center sm:justify-start">
            <li className="text-[#308F98]">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">
                <span className="text-gray-700 hover:text-blue-600 transition">
                  Shop
                </span>
              </Link>
            </li>
            <li>
              <Link href="/single-product">Product</Link>
            </li>
            <li>Pages</li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="hidden sm:flex items-center whitespace-nowrap">
          <p className="text-[#636270] text-sm flex items-center">
            Contact:{" "}
            <span className="text-black font-semibold ml-1">
              (808) 555-0111
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
