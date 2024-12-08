"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-[#272343] text-[#A8A7B1] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {/* Left Section */}
        <div className="flex items-center mb-3 sm:mb-0">
          <i className="fa fa-check pr-2"></i>
          <p className="text-sm text-center sm:text-left">
            Free Shipping On All Orders Over $50
          </p>
        </div>

        {/* Right Section */}
        <div>
          <ul className="flex flex-wrap space-x-4 sm:space-x-6 items-center text-sm">
            {/* Language Selector */}
            <li className="flex items-center cursor-pointer hover:text-teal-500">
              Eng
              <i className="fa fa-chevron-down pl-1"></i>
            </li>

            {/* FAQs */}
            <li className="cursor-pointer hover:text-teal-500">
              <Link href="/faq">Faqs</Link>
            </li>

            {/* Need Help */}
            <li className="flex items-center cursor-pointer hover:text-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M12 2a10 10 0 11-10 10A10 10 0 0112 2z"
                />
              </svg>
              <Link href="/contact">Need Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
