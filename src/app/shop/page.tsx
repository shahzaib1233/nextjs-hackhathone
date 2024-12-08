import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductCards from "../../components/productcards";
import Logobar from "@/components/logobar";

import Image from "next/image";

export default function shop() {
  return (
    <div>
      <Header />
      <Logobar />
      <h2 className="text-2xl pt-12 px-12 font-bold mb-6 bg-white text-black">
        All Products
      </h2>
      <ProductCards />
      <ProductCards />
      <ProductCards />
      <ProductCards />
      <div className="bg-gray-50 min-h-screen pt-20 pb-4">
        {/* Newsletter Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Or Subscribe To The Newsletter
          </h2>
          <form className="flex justify-center items-center gap-2 max-w-md mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full px-4 py-2 border border-t-0 border-r-0 border-l-0 bg-[#F9FAFB] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Open Sans] text-gray-700"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              />
              <button
                type="submit"
                className="px-6 py-2 text-black border border-t-0 border-r-0 border-l-0 bg-[#F9FAFB]  hover:text-gray-300 transition duration-300 font-[Open Sans]"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Instagram Section */}
        <div className="text-center">
          <h2 className="text-2xl  font-extrabold text-gray-700 mb-6">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="p-5">
            {/* Replace with your images */}
            <div className="rounded-lg overflow-hidden ">
              <img src="./images/products.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
