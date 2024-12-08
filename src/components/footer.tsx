import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F5F7FA] px-6 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {/* Company Info Section */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/images/logo.png"
              alt="Comforty Logo"
              className="h-10 w-10 mr-3"
            />
            <p className="text-lg font-semibold text-[#272343]">Comforty</p>
          </div>
          <p className="text-sm text-[#6C6C6C]">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="mt-4 flex space-x-4">
            {/* Social Media Icons */}
            <img src="/images/social.png" alt="Facebook" className="h-6" />
          </div>
        </div>

        {/* Categories Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4">
            Category
          </h2>
          <ul className="space-y-2 text-sm text-[#6C6C6C]">
            {[
              "Sofa",
              "Armchair",
              "Wing Chair",
              "Desk Chair",
              "Wooden Chair",
              "Park Bench",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4">Support</h2>
          <ul className="space-y-2 text-sm text-[#6C6C6C]">
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-semibold text-[#2C2C2C] mb-4">
            Newsletter
          </h2>
          <p className="text-sm text-[#6C6C6C] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 border border-[#D1D5DB] rounded-l-md focus:outline-none"
            />
            <button className="bg-[#029FAE] text-white px-4 rounded-r-md hover:bg-[#027C86]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-center px-6">
        {/* Copyright */}
        <p className="text-sm text-[#6C6C6C] text-center md:text-left">
          @ 2021 - Blogy - Designed & Developed by Zakirsoft
        </p>
        {/* Payment Methods */}
        <img
          src="/images/logos.png"
          alt="Payment Methods"
          className="mt-4 md:mt-0 h-6"
        />
      </div>
    </footer>
  );
};

export default Footer;
