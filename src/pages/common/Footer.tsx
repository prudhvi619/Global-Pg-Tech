import { forwardRef } from "react";
import Mail from "@/assets/images/mail.svg?react";
import MessageCircle from "@/assets/images/whatspp.svg?react";
import { ArrowUp } from "lucide-react";
import { sendEmail } from "@/utilities/helpers/sendEmail";
import {
  sendWhatsappMessage,
} from "@/utilities/helpers/sendWhatsappMessage";
import { prudhviEmailDetails, prudhviWhatsappDetails } from "@/utilities/constants/UserCreds";

const Footer = forwardRef<HTMLDivElement>((_, ref) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={ref}
      className="bg-[#0C1427] text-gray-400 px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-10 relative"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 w-full md:w-3/5 lg:w-2/3">
          <div className="font-bold text-[#0066DB] mb-3 md:mb-4 text-3xl sm:text-4xl md:text-5xl">
            Global PG Tech
          </div>
          <p className="max-w-lg leading-relaxed text-base sm:text-lg">
            Empowering students with the skills, training, and guidance needed
            to land their dream job. From tech courses to real-time projects and
            placement support — we've got your back.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-4 w-full md:w-2/5 lg:w-1/3">
          <div className="text-white font-semibold mb-3 md:mb-5 text-lg sm:text-xl">
            GET IN TOUCH
          </div>
          <div
            onClick={() => sendEmail(prudhviEmailDetails)}
            className="flex items-center space-x-2 hover:text-white transition cursor-pointer transform hover:scale-105 duration-300"
          >
            <Mail className="w-5 sm:w-6" />
            <span className="text-base sm:text-lg break-all">
              {prudhviEmailDetails.address}
            </span>
          </div>

          <div
            onClick={() => sendWhatsappMessage(prudhviWhatsappDetails)}
            className="flex items-center space-x-3 hover:text-white transition cursor-pointer transform hover:scale-105 duration-300"
          >
            <MessageCircle className="w-5 sm:w-6" />
            <span className="text-base sm:text-lg">GlobalPgTech</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 md:mt-10 text-center text-xs sm:text-sm flex items-center justify-center">
        <span>© 2025 Global PG Tech. All rights reserved</span>
      </div>

      {/* Scroll to Top Hanger */}
      <div
        onClick={scrollToTop}
        className="absolute right-4 bottom-4 md:right-8 md:bottom-8 bg-[#0066DB] text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-400 hover:text-[#0F172A] transition transform hover:scale-110 duration-300 animate-bounce"
      >
        <ArrowUp className="w-5 h-5" />
      </div>
    </footer>
  );
});

export default Footer;
