import Link from "next/link";
import Image from "next/image";

const ProductCards = () => {
  return (
    <div className="grid grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Link href="/single-product">
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
      <Link href="/single-product">
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
            <div>
              <p className="text-sm text-gray-600">Library Stool Chair</p>
              <p className="text-lg font-semibold text-gray-800">$20</p>
            </div>
            <button className="bg-[#EDF5FA] py-2 px-3 text-white rounded-md hover:bg-[#027C86] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#535069] mr-2"
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
      <Link href="/single-product">
        <div className="relative p-4 rounded-lg hover:shadow-lg transition bg-[#fff]">
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
            <button className="bg-[#EDF5FA] py-2 px-3 text-[#535069] rounded-md hover:bg-[#027C86] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#535069] mr-2"
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
      <Link href="/single-product">
        <div className="relative p-4 rounded-lg hover:shadow-lg transition bg-[#fff]">
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
            <button className="bg-[#EDF5FA] py-2 px-3 text-white rounded-md hover:bg-[#027C86] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#535069] mr-2"
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
  );
};

export default ProductCards;
