import Header from "../../components/header";
import Footer from "../../components/footer";
import Logobar from "@/components/logobar";

export default function About() {
  return (
    <div className="font-sans">
      <Header />
      <Logobar />

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#007580] text-white p-8 rounded-lg flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Us - Comforty</h2>
            <p className="text-sm leading-relaxed">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. From elegant armchairs to cozy
              loungers, our carefully curated collection blends style and
              functionality, offering chairs that seamlessly blend style with
              relaxation.
            </p>
          </div>
          <div className="mt-8">
            <button className="bg-[#258992] w-full md:w-auto text-white font-medium px-6 py-3 rounded-lg hover:bg-[#1c6d78] transition">
              View Collection
            </button>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src="./images/p1.png"
            alt="Chair"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-black mb-8">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg bg-[#F9F9F9] text-center shadow-lg">
            <i className="bi bi-truck text-[#007580] text-4xl mb-4 block"></i>
            <h3 className="font-semibold text-lg text-[#007580] mb-2">
              Next Day as Standard
            </h3>
            <p className="text-sm text-gray-700">
              Order before 3pm and get your items delivered the next day as
              standard.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#F9F9F9] text-center shadow-lg">
            <i className="bi bi-check-circle text-[#007580] text-4xl mb-4 block"></i>
            <h3 className="font-semibold text-lg text-[#007580] mb-2">
              Made by True Artisans
            </h3>
            <p className="text-sm text-gray-700">
              Handcrafted chair pieces made with passion and craftsmanship.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#F9F9F9] text-center shadow-lg">
            <i className="bi bi-book text-[#007580] text-4xl mb-4 block"></i>
            <h3 className="font-semibold text-lg text-[#007580] mb-2">
              Unbeatable Prices
            </h3>
            <p className="text-sm text-gray-700">
              For all our iconic chair products, you'll find better prices
              everywhere.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-[#F9F9F9] text-center shadow-lg">
            <i className="bi bi-tree text-[#007580] text-4xl mb-4 block"></i>
            <h3 className="font-semibold text-lg text-[#007580] mb-2">
              Recyclable Packaging
            </h3>
            <p className="text-sm text-gray-700">
              We use 100% recyclable materials to minimize our ecological
              footprint.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          Our Popular Products
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="p-6 border rounded-lg text-center bg-gray-100 lg:col-span-2">
            <img
              src="images/2.png"
              alt="Product 1"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="font-semibold text-lg mb-2 text-black">
              The Popular Suede Sofa
            </h3>
            <p className="text-teal-700 font-bold">$250.00</p>
          </div>

          <div className="p-6 border rounded-lg text-center bg-gray-100">
            <img
              src="images/3.png"
              alt="Product 2"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="font-semibold text-lg mb-2 text-black">
              The Darcy Chair
            </h3>
            <p className="text-teal-700 font-bold">$99.00</p>
          </div>

          <div className="p-6 border rounded-lg text-center bg-gray-100">
            <img
              src="images/4.png"
              alt="Product 3"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="font-semibold text-lg mb-2 text-black">
              The Candy Chair
            </h3>
            <p className="text-teal-700 font-bold">$89.00</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
