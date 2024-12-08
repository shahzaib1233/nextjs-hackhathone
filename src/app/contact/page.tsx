import Header from "../../components/header";
import Footer from "../../components/footer";
import Logobar from "@/components/logobar";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Contact() {
  return (
    <div>
      <Header />
      <Logobar />
      <div className="bg-white min-h-screen py-16 px-6 md:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get In Touch With Us
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>

        {/* Main Section */}
        <div className="grid p-10 md:grid-cols-2 gap-16">
          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <i className="bi bi-geo-alt text-2xl text-black"></i>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600 text-sm">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <i className="bi bi-telephone text-2xl text-black"></i>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600 text-sm">
                  Mobile: +1 (841) 546-6789
                </p>
                <p className="text-gray-600 text-sm">
                  Hotline: +1 (864) 456-6789
                </p>
              </div>
            </div>
            {/* Working Time */}
            <div className="flex items-start space-x-4">
              <i className="bi bi-clock text-2xl text-black"></i>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Working Time
                </h3>
                <p className="text-gray-600 text-sm">
                  Monday–Friday: 9:00–22:00
                </p>
                <p className="text-gray-600 text-sm">
                  Saturday–Sunday: 9:00–21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white shadow-lg rounded-md p-8">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-2 text-gray-700 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-2 text-gray-700 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="This is optional"
                  className="w-full mt-2 px-4 py-2 text-gray-700 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  placeholder="Write your message here..."
                  rows="4"
                  className="w-full mt-2 px-4 py-2 text-gray-700 border rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-teal-500 text-white rounded-md font-medium hover:bg-teal-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 bg-[#F4F4F4] p-10 mb-[-60px] md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="space-y-4">
            <i className="bi bi-star text-3xl text-black"></i>
            <h3 className="text-lg font-semibold text-gray-800">
              High Quality
            </h3>
            <p className="text-gray-600 text-sm">Crafted from top materials</p>
          </div>
          {/* Feature 2 */}
          <div className="space-y-4">
            <i className="bi bi-shield-check text-3xl text-black"></i>
            <h3 className="text-lg font-semibold text-gray-800">
              Warranty Protection
            </h3>
            <p className="text-gray-600 text-sm">Over 2 years</p>
          </div>
          {/* Feature 3 */}
          <div className="space-y-4">
            <i className="bi bi-headset text-3xl text-black"></i>
            <h3 className="text-lg font-semibold text-gray-800">
              24/7 Support
            </h3>
            <p className="text-gray-600 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
