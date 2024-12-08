import Header from "../../components/header";
import Footer from "../../components/footer";
import Logobar from "@/components/logobar";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function FAQSection() {
  return (
    <div>
      <Header />
      <Logobar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center text-black mb-4">
          Questions Looks Here
        </h2>
        <p className="text-gray-700 text-center mb-8">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* FAQ Item 1 */}
          <div className="p-4 border rounded-lg shadow-sm bg-[#F7F7F7] flex justify-between items-start">
            <div>
              <h3 className="text-lg text-black font-medium mb-2">
                What types of chairs do you offer?
              </h3>
              <p className="text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam animi debitis tenetur molestias velit explicabo
                rerum nobis delectus deserunt, est expedita eos molestias quo
                maxime quia ratione.
              </p>
            </div>
            <i className="bi bi-plus text-black text-xl"></i>
          </div>

          {/* FAQ Item 2 */}
          <div className="p-4 border rounded-lg shadow-sm bg-[#F7F7F7] flex justify-between items-start">
            <div>
              <h3 className="text-lg text-black font-medium mb-2">
                How can we get in touch with you?
              </h3>
              <p className="text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam animi debitis tenetur molestias velit explicabo
                rerum nobis delectus deserunt, est expedita eos molestias quo
                maxime quia ratione.
              </p>
            </div>
            <i className="bi bi-plus text-black text-xl"></i>
          </div>

          {/* FAQ Item 3 */}
          <div className="p-4 border rounded-lg shadow-sm bg-[#F7F7F7] flex justify-between items-start">
            <div>
              <h3 className="text-lg text-black font-medium mb-2">
                Do your chairs come with a warranty?
              </h3>
              <p className="text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam animi debitis tenetur molestias velit explicabo
                rerum nobis delectus deserunt, est expedita eos molestias quo
                maxime quia ratione.
              </p>
            </div>
            <i className="bi bi-plus text-black text-xl"></i>
          </div>

          {/* FAQ Item 4 */}
          <div className="p-4 border rounded-lg shadow-sm bg-[#F7F7F7] flex justify-between items-start">
            <div>
              <h3 className="text-lg text-black font-medium mb-2">
                What will be delivered? And When?
              </h3>
              <p className="text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam animi debitis tenetur molestias velit explicabo
                rerum nobis delectus deserunt, est expedita eos molestias quo
                maxime quia ratione.
              </p>
            </div>
            <i className="bi bi-plus text-black text-xl"></i>
          </div>

          {/* FAQ Item 5 */}
          <div className="p-4 border rounded-lg shadow-sm bg-[#F7F7F7] flex justify-between items-start">
            <div>
              <h3 className="text-lg text-black font-medium mb-2">
                Can I try a chair before purchasing?
              </h3>
              <p className="text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam animi debitis tenetur molestias velit explicabo
                rerum nobis delectus deserunt, est expedita eos molestias quo
                maxime quia ratione.
              </p>
            </div>
            <i className="bi bi-plus text-black text-xl"></i>
          </div>

          {/* FAQ Item 6 */}
          <div className="p-4 border rounded-lg shadow-sm bg-[#F7F7F7] flex justify-between items-start">
            <div>
              <h3 className="text-lg text-black font-medium mb-2">
                How do I clean and maintain my Comforty chair?
              </h3>
              <p className="text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam animi debitis tenetur molestias velit explicabo
                rerum nobis delectus deserunt, est expedita eos molestias quo
                maxime quia ratione.
              </p>
            </div>
            <i className="bi bi-plus text-black text-xl"></i>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
