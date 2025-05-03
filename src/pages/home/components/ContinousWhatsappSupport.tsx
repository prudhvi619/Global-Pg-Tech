import { prudhviWhatsappDetails } from "@/utilities/constants/UserCreds";
import { sendWhatsappMessage } from "@/utilities/helpers/sendWhatsappMessage";
import Whatsapp from "@/assets/icons/whatsapp.svg?react";

export const ContinousWhatsappSupport = ({
  isVisible,
}: {
  isVisible: boolean;
}) => {
  return (
    <div className="bg-[linear-gradient(91.7deg,_#0066DB_0%,_#16929D_100%)] py-16 lg:mx-20 lg:mb-10 lg:rounded-lg">
      <div
        className={`container mx-auto px-4 text-center transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        data-section="contact"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Never Miss a New Opportunity!
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Join our exclusive WhatsApp group where we post the latest full-time
          job openings shared in the past 24 hours. Stay ahead and never miss an
          opportunity!
        </p>
        <button
          onClick={() => sendWhatsappMessage(prudhviWhatsappDetails)}
          className="bg-white text-[#0066DB] hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 hover:cursor-pointer"
        >
          <div className="flex items-center justify-center gap-1">
            <Whatsapp className="w-6 h-6 mr-1 text-green-600" /> 
            <span>Join Group Now</span>
          </div>
        </button>
      </div>
    </div>
  );
};
