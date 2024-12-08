import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductCards from "../../components/productcards";
import Logobar from "@/components/logobar";

import Image from "next/image";

export default function Single_product() {
  return (
    <div>
      <Header />
      <Logobar />
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10 bg-white shadow-lg rounded-lg">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/p2.png" // Replace with the actual image path
            alt="Library Stool Chair"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
            Library Stool Chair
          </h2>

          {/* Price with background */}
          <p className="inline-block bg-teal-50 text-teal-700 font-medium text-lg px-5 py-2 rounded-full mb-6 shadow-sm">
            $20.00 USD
          </p>

          <p className="text-base text-gray-600 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>

          {/* Add To Cart Button */}
          <button className="flex items-center justify-center bg-teal-600 text-white text-base font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-teal-700 transition">
            <i className="bi bi-cart-plus mr-3 text-xl"></i>
            Add To Cart
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl pt-12 px-12 font-bold mb-6 bg-white text-black">
            Feature Products
          </h2>
        </div>
        <div>
          <p className="text-xl pt-14 px-12 font-bold mb-6 bg-white text-black cursor-pointer">
            View All
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Product Card 1 */}
        <div className="relative p-4 rounded-lg hover:shadow-lg transition bg-[#fff]">
          <div className="absolute top-8 left-10 bg-green-500 text-white text-xs font-medium uppercase px-2 py-1 rounded">
            New
          </div>
          <img
            src="./images/p1.png"
            alt="Library Stool Chair"
            className="w-full h-[312px] object-cover rounded-md"
          />
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm font-medium text-gray-800">
              Library Stool Chair
            </p>
            <p className="text-lg font-semibold text-teal-600">$20</p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="relative p-4 rounded-lg hover:shadow-lg transition bg-[#fff]">
          <div className="absolute top-8 left-10 bg-[#F5813F] text-white text-xs font-medium uppercase px-2 py-1 rounded">
            Sale
          </div>
          <img
            src="./images/p2.png"
            alt="Library Stool Chair"
            className="w-full h-[312px] object-cover rounded-md"
          />
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm font-medium text-gray-800">
              Library Stool Chair
            </p>
            <p className="text-lg font-semibold text-teal-600">$20</p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="relative p-4 rounded-lg hover:shadow-lg transition bg-[#fff]">
          <img
            src="./images/p3.png"
            alt="Library Stool Chair"
            className="w-full h-[312px] object-cover rounded-md"
          />
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm font-medium text-gray-800">
              Library Stool Chair
            </p>
            <p className="text-lg font-semibold text-teal-600">$20</p>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="relative p-4 rounded-lg hover:shadow-lg transition bg-[#fff]">
          <img
            src="./images/p4.png"
            alt="Library Stool Chair"
            className="w-full h-[312px] object-cover rounded-md"
          />
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm font-medium text-gray-800">
              Library Stool Chair
            </p>
            <p className="text-lg font-semibold text-teal-600">$20</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
