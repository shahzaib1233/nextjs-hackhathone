import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductCards from "../../components/productcards";
import Logobar from "@/components/logobar";

import Image from "next/image";

export default function Cart() {
  return (
    <div>
      <Header />
      <Logobar />
      <div className="flex flex-col md:flex-row gap-8 p-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-6">Bag</h2>

          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex items-start gap-6">
              <img
                src="./images/p1.png"
                alt="Library Stool Chair"
                className="w-28 h-28 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">
                  Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-sm text-gray-500">Size: L</p>
                <p className="text-sm text-gray-500">Quantity: 1</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">MRP: $99</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button className="text-gray-400 hover:text-red-500">
                <i className="fas fa-heart"></i>
              </button>
              <button className="text-gray-400 hover:text-red-500">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>

          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex items-start gap-6">
              <img
                src="./images/p1.png"
                alt="Library Stool Chair"
                className="w-28 h-28 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium">Library Stool Chair</h3>
                <p className="text-sm text-gray-500">
                  Ashen Slate/Cobalt Bliss
                </p>
                <p className="text-sm text-gray-500">Size: L</p>
                <p className="text-sm text-gray-500">Quantity: 1</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">MRP: $99</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button className="text-gray-400 hover:text-red-500">
                <i className="fas fa-heart"></i>
              </button>
              <button className="text-gray-400 hover:text-red-500">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6 text-black">Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-sm text-black">Subtotal</p>
              <p className="font-medium text-black">$198.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-black">
                Estimated Delivery & Handling
              </p>
              <p className="font-medium text-black">Free</p>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-4">
              <p className="font-semibold text-black">Total</p>
              <p className="font-semibold text-black">$198.00</p>
            </div>
          </div>
          <button className="mt-6 w-full bg-teal-500 text-white font-medium py-3 rounded-lg hover:bg-teal-600 focus:outline-none">
            Member Checkout
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
