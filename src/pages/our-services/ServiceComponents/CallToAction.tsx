import { prudhviWhatsappDetails } from "@/utilities/constants/UserCreds";
import {
  sendWhatsappMessage,
} from "@/utilities/helpers/sendWhatsappMessage";

export const CallToAction = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div className="bg-[linear-gradient(91.7deg,_#0066DB_0%,_#16929D_100%)] py-16 lg:mx-24 lg:mb-10 lg:rounded-lg">
      <div
        className={`container mx-auto px-4 text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        data-section="contact"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Need Guidance?</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Our dedicated experts are ready to assist you at every stage — helping
          you learn, grow, and achieve your career goals with confidence. Reach
          out to us today.
        </p>
        <button
          onClick={() => sendWhatsappMessage(prudhviWhatsappDetails)}
          className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 hover:cursor-pointer"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};
