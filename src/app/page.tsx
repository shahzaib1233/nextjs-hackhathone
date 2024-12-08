import Image from "next/image";
// pages/_app.js
import Header from "../components/header";
import Footer from "../components/footer";
import Logobar from "@/components/logobar";
import ProductCards from "@/components/productcards";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <Logobar />
      <div className="container bg-white px-6 md:px-16 justify-between items-center">
        <div className="bg-[#F5F7FA] flex flex-col md:flex-row items-center px-6 md:px-12 py-16 rounded-bl-3xl">
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <p className="text-sm font-medium text-[#6C6C6C] uppercase">
              Welcome to Chairy
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-[#2C2C2C] leading-tight">
              Best Furniture Collection For Your Interior.
            </h1>
            <button className="flex items-center justify-center mx-auto md:mx-0 space-x-2 w-[140px] h-[45px] bg-[#029FAE] text-white font-medium rounded-md hover:bg-[#027C86] transition duration-300">
              <span>Shop Now</span>
              <span className="text-lg">&rarr;</span>
            </button>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="./images/banner.png"
              alt="Chair Image"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="md:px-2 md:pt-2 flex justify-center md:justify-start">
          <img
            src="./images/company-logo.png"
            alt="Company Logo"
            className=""
          />
        </div>
      </div>

      <div className="bg-white px-12 py-3">
        <h2 className="text-2xl font-bold mb-6 text-black">
          Featured Products
        </h2>
        <div className="bg-white px-12 py-3">
          <h2 className="text-2xl font-bold mb-6 text-black">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <Link href="/single-product">
              <div className="relative p-4 rounded-lg hover:shadow-lg transition bg-[#fff] cursor-pointer">
                <div className="absolute top-8 left-10 bg-green-500 text-white text-xs font-medium uppercase px-2 py-1 rounded">
                  New
                </div>
                <img
                  src="./images/p1.png"
                  alt="Library Stool Chair"
                  className="w-full h-[312px] object-cover rounded-md"
                />
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-sm text-gray-600">Library Stool Chair</p>
                    <p className="text-lg font-semibold text-gray-800">$20</p>
                  </div>
                  <button className="bg-[#029FAE] py-2 px-3 text-white rounded-md hover:bg-[#027C86] transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#fff] mr-2"
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
                  </button>
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link href="/single-product">
              <div className="relative p-4 rounded-lg hover:shadow-lg transition bg-[#fff] cursor-pointer">
                <div className="absolute top-8 left-10 bg-[#F5813F] text-white text-xs font-medium uppercase px-2 py-1 rounded">
                  Sale
                </div>
                <img
                  src="./images/p2.png"
                  alt="Library Stool Chair"
                  className="w-full h-[312px] object-cover rounded-md"
                />
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-sm text-gray-600">Library Stool Chair</p>
                    <p className="text-lg font-semibold text-gray-800">$20</p>
                  </div>
                  <button className="bg-[#029FAE] py-2 px-3 text-white rounded-md hover:bg-[#027C86] transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#fff] mr-2"
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
                  </button>
                </div>
              </div>
            </Link>

            {/* Product 3 */}
            <Link href="/single-product">
              <div className="relative p-4 rounded-lg hover:shadow-lg transition bg-[#fff] cursor-pointer">
                <img
                  src="./images/p3.png"
                  alt="Library Stool Chair"
                  className="w-full h-[312px] object-cover rounded-md"
                />
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-sm text-gray-600">Library Stool Chair</p>
                    <p className="text-lg font-semibold text-gray-800">$20</p>
                  </div>
                  <button className="bg-[#029FAE] py-2 px-3 text-white rounded-md hover:bg-[#027C86] transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#fff] mr-2"
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
                  </button>
                </div>
              </div>
            </Link>

            {/* Product 4 */}
            <Link href="/single-product">
              <div className="relative p-4 rounded-lg hover:shadow-lg transition bg-[#fff] cursor-pointer">
                <img
                  src="./images/p4.png"
                  alt="Library Stool Chair"
                  className="w-full h-[312px] object-cover rounded-md"
                />
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-sm text-gray-600">Library Stool Chair</p>
                    <p className="text-lg font-semibold text-gray-800">$20</p>
                  </div>
                  <button className="bg-[#029FAE] py-2 px-3 text-white rounded-md hover:bg-[#027C86] transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#fff] mr-2"
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
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <section className="bg-white px-6 py-12">
        {/* Top Categories */}
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-[#2C2C2C] mb-6">
            Top Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Card 1 */}
            <div className="relative group">
              <img
                src="/images/c3.png"
                alt="Wing Chair"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Category Card 2 */}
            <div className="relative group">
              <img
                src="/images/c2.png"
                alt="Wooden Chair"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                <h3 className="text-lg font-semibold">Wooden Chair</h3>
                <p className="text-sm">157 Products</p>
              </div>
            </div>
            {/* Category Card 3 */}
            <div className="relative group">
              <img
                src="/images/c1.png"
                alt="Desk Chair"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Explore Section */}
        {/* Explore New and Popular Styles */}
        <div className="container mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Large Image */}
            <div className="relative md:col-span-2">
              <img
                src="/images/e1.png"
                alt="Orange Chair"
                className="w-full h-auto "
              />
              <div className="absolute left-[-10px] top-[95%] transform -rotate-90 origin-left text-gray-700 font-extrabold text-3xl">
                EXPLORE NEW AND POPULAR STYLES
              </div>
            </div>
            {/* Small Images */}
            <div className="grid grid-cols-2 gap-4 md:col-span-2">
              <img
                src="/images/p4.png"
                alt="Style 1"
                className="w-full h-auto "
              />
              <img
                src="/images/p1.png"
                alt="Style 2"
                className="w-full h-auto "
              />
              <img
                src="/images/e2.png"
                alt="Style 3"
                className="w-full h-auto "
              />
              <img
                src="/images/p4.png"
                alt="Style 4"
                className="w-full h-auto "
              />
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-2xl text-center font-bold mb-6 bg-white text-black">
        Featured Products
      </h2>

      <ProductCards />
      <ProductCards />

      <Footer />
    </main>
  );
}
