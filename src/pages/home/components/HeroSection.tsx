import { motion } from "framer-motion";
import HeroImage from "@/assets/images/hero.svg?react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24 lg:py-24">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Column - Text Content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Kickstart Your
            <br />
            <motion.span
              className="text-[#0066DB] block md:inline"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {" "}
              Tech Career
            </motion.span>{" "}
            Today
          </motion.h1>
          <motion.p
            className="text-gray-600 my-4 sm:my-6 text-sm sm:text-base lg:text-lg lg:max-w-4/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Master in-demand skills, build your portfolio, and crack interviews
            with Global Pg Tech.
          </motion.p>
          <motion.button
            className="bg-[#0066DB] text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-md hover:bg-blue-900 hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={()=>navigate("/our-services")}
          >
            Get Placed
          </motion.button>
        </div>

        {/* Right Column - Network Graphic */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <HeroImage className="w-full h-auto max-w-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;