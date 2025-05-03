import Target from "@/assets/icons/archery.svg?react";
import Laptop from "@/assets/icons/laptop.svg?react";
import Headphones from "@/assets/icons/headset.svg?react";
import Globe from "@/assets/icons/globe.svg?react";

const features = [
  {
    icon: Target,
    title: "Personalized Mentorship",
    description:
      "Get one-on-one guidance tailored to your career goals. Our mentors help you stay on track, motivated, and industry-ready.",
  },
  {
    icon: Laptop,
    title: "Real-Time Project Experience",
    description:
      "Work on real-world projects that mirror industry challenges. Build a portfolio that speaks louder than a resume.",
  },
  {
    icon: Headphones,
    title: "Post-Course Support",
    description:
      "Our support doesn't end when your course does. Get continued help with placements, upskilling, and career advice.",
  },
  {
    icon: Globe,
    title: "Strong Recruiter Network",
    description:
      "Connect directly with top hiring partners across domains. We help open doors to the opportunities that fit your skills.",
  },
];

export default function WhyStudentsChooseUs() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-8 sm:py-10 md:py-12 bg-white px-4 sm:px-6 md:px-8">
      <h2 className="text-xl sm:text-2xl font-bold text-[#0066DB] mb-6 sm:mb-8 md:mb-12 text-center">
        WHY STUDENTS CHOOSE US
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto w-full">
        {features.map((feature, index) => (
            <div
            key={index}
            className="flex flex-col items-center text-center p-4 sm:p-6 bg-[#F9FBFC] rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
            <div className="bg-blue-50 p-4 sm:p-6 rounded-full mb-3 sm:mb-4">
              <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#0066DB]" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {feature.description}
            </p>
            </div>
        ))}
      </div>
    </div>
  );
}
