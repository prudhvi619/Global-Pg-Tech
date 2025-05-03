import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Quote from "@/assets/images/quote.svg?react";

const reviews = [
  {
    name: "Jane Doe",
    role: "Software Developer",
    text: "The placement support was top-notch. From resume reviews to mock interviews, everything was on point. I felt fully prepared when it mattered the most.",
    rating: 4,
  },
  {
    name: "John Smith",
    role: "Data Analyst",
    text: "The training sessions were so helpful! I worked on real-world projects and learned tools—I got placed within 2 months!",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Cloud Engineer",
    text: "The constant mentoring and interview prepping helped me land my dream job! Highly recommend their approach.",
    rating: 5,
  }
];

export default function PeopleReview() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number) => {
    if (index === current) return "center";
    if ((current + 1) % reviews.length === index) return "right";
    if ((current - 1 + reviews.length) % reviews.length === index)
      return "left";
    return "hidden";
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-8 sm:py-12 bg-gray-50 overflow-hidden">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0066DB] mb-6 sm:mb-8 px-4 text-center">
        WHAT PEOPLE ARE SAYING
      </div>
      
      {/* Quote SVG - Hidden on mobile, responsive positioning on larger screens */}
      <div className="hidden sm:block relative sm:-top-16 md:-top-20 lg:-top-24 sm:left-16 md:left-32 lg:left-80 right-0 justify-center items-center">
        <Quote className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
      </div>
      
      <div className="relative flex items-center justify-center w-full max-w-4xl h-64 sm:h-72 md:h-80 sm:-mt-16 md:-mt-24 lg:-mt-32">
        {reviews.map((review, index) => {
          const position = getPosition(index);

          const baseStyles =
            "absolute w-64 sm:w-72 md:w-80 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl bg-white text-center transition-all duration-700";

          let extraStyles = "";
          let motionProps = {};
          
          // Responsive positioning for different screen sizes
          if (position === "center") {
            extraStyles = "z-30 scale-110 opacity-100";
            motionProps = { scale: 1, opacity: 1, x: 0 };
          } else if (position === "left") {
            extraStyles = "z-20 scale-85 opacity-50";
            // Adjust x-translation for different screen sizes
            motionProps = { 
              scale: 0.9, 
              opacity: 0.5, 
              x: window.innerWidth < 640 ? "-120px" : 
                 window.innerWidth < 768 ? "-180px" : "-220px" 
            };
          } else if (position === "right") {
            extraStyles = "z-20 scale-85 opacity-50";
            // Adjust x-translation for different screen sizes
            motionProps = { 
              scale: 0.9, 
              opacity: 0.5, 
              x: window.innerWidth < 640 ? "120px" : 
                 window.innerWidth < 768 ? "180px" : "220px" 
            };
          } else {
            extraStyles = "hidden";
          }

          return (
            <AnimatePresence key={index}>
              {position !== "hidden" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={motionProps}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                  className={`${baseStyles} ${extraStyles}`}
                >
                  <h3 className="text-base sm:text-lg font-semibold">{review.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{review.role}</p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-2 sm:mt-4">{review.text}</p>
                  <div className="flex justify-center mt-2 sm:mt-4">
                    {Array.from({ length: 5 }).map((_, starIdx) => (
                      <span
                        key={starIdx}
                        className={`text-yellow-400 text-sm sm:text-lg ${
                          starIdx < review.rating ? "opacity-100" : "opacity-30"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>

      <div className="flex space-x-2 mt-4 sm:mt-6">
        {reviews.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-[#0066DB]" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}