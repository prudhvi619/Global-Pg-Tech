import { useState, useEffect } from "react";

interface CircularNumberProps {
  number: string;
  title: string;
  description: string;
}

export default function OurCommitment() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const CircularNumber = ({
    number,
    title,
    description,
  }: CircularNumberProps) => {
    return (
      <div className={`flex ${isMobile ? 'flex-col items-center text-center' : 'items-center'} mb-8 sm:mb-4`}>
        <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white border-4 sm:border-8 md:border-12 border-[#073E82] flex items-center justify-center ${isMobile ? 'mb-4' : 'mr-4'}`}>
          <span className="text-[#0066DB] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{number}</span>
        </div>
        <div>
          <h3 className="text-blue-500 font-semibold text-lg sm:text-xl">{title}</h3>
          <p className="text-gray-300 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    );
  };

  const commitmentItems = [
    {
      number: "01",
      title: "Resume & Portfolio Building",
      description:
        "Craft an industry-ready profile that stands out to recruiters.",
    },
    {
      number: "02",
      title: "Mock Interviews & Guidance",
      description:
        "Sharpen your interview skills with real-time practice and expert tips.",
    },
    {
      number: "03",
      title: "Ongoing Mentorship",
      description:
        "Support continues beyond training — advice, feedback, and career tips.",
    },
    {
      number: "04",
      title: "Job Matching & Referrals",
      description:
        "Connect with relevant job openings across our hiring partner network.",
    },
  ];

  return (
    <div className="bg-gray-900 py-8 sm:py-12 md:py-16 px-4">
      {isMobile ? (
        // Mobile layout - vertical stacked design
        <div className="max-w-lg mx-auto">
          {/* Central heading */}
          <div className="w-full flex justify-center mb-10">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-white border-4 sm:border-8 border-[#073E82] flex flex-col items-center justify-center text-center">
              <div className="text-[#0066DB] font-semibold text-xl sm:text-2xl">OUR</div>
              <div className="text-[#0066DB] font-semibold text-xl sm:text-2xl">COMMITMENT</div>
              <div className="text-[#0066DB] font-semibold text-xl sm:text-2xl">TO YOUR</div>
              <div className="text-[#0066DB] font-semibold text-xl sm:text-2xl">SUCCESS</div>
            </div>
          </div>

          {/* Items stacked vertically */}
          {commitmentItems.map((item, index) => (
            <CircularNumber
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      ) : (
        // Desktop layout - with centered circle
        <div className="max-w-6xl mx-auto relative">
          {/* Central circle with text */}
          <div className="absolute md:left-1/8 lg:left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <div className="w-56 h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-white border-y-8 lg:border-y-12 xl:border-y-16 border-r-8 lg:border-r-12 xl:border-r-16 border-[#073E82] flex flex-col items-center justify-center text-center">
              <div className="text-[#0066DB] font-semibold text-xl lg:text-2xl xl:text-3xl">OUR</div>
              <div className="text-[#0066DB] font-semibold text-xl lg:text-2xl xl:text-3xl">COMMITMENT</div>
              <div className="text-[#0066DB] font-semibold text-xl lg:text-2xl xl:text-3xl">TO YOUR</div>
              <div className="text-[#0066DB] font-semibold text-xl lg:text-2xl xl:text-3xl">SUCCESS</div>
            </div>
          </div>

          {/* Tablet layout - circle at top */}
          <div className="md:hidden justify-center mb-10">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-white border-4 sm:border-8 border-[#073E82] flex flex-col items-center justify-center text-center">
              <div className="text-[#0066DB] font-semibold text-xl sm:text-2xl">OUR</div>
              <div className="text-[#0066DB] font-semibold text-xl sm:text-2xl">COMMITMENT</div>
              <div className="text-[#0066DB] font-semibold text-xl sm:text-2xl">TO YOUR</div>
              <div className="text-[#0066DB] font-semibold text-xl sm:text-2xl">SUCCESS</div>
            </div>
          </div>

          <div className="pl-0 md:pl-12 lg:pl-32 xl:pl-36">
            {/* Top Item */}
            <div className="flex mb-10 justify-center md:justify-start lg:pl-48">
              <CircularNumber
                number={commitmentItems[0].number}
                title={commitmentItems[0].title}
                description={commitmentItems[0].description}
              />
            </div>

            {/* Middle Items */}
            <div className="flex justify-center md:justify-end mb-10 md:pr-4 lg:pr-16">
              <CircularNumber
                number={commitmentItems[1].number}
                title={commitmentItems[1].title}
                description={commitmentItems[1].description}
              />
            </div>

            <div className="flex justify-center md:justify-end mb-10 md:pr-4 lg:pr-9">
              <CircularNumber
                number={commitmentItems[2].number}
                title={commitmentItems[2].title}
                description={commitmentItems[2].description}
              />
            </div>

            {/* Bottom Item */}
            <div className="flex justify-center md:justify-start lg:pl-48">
              <CircularNumber
                number={commitmentItems[3].number}
                title={commitmentItems[3].title}
                description={commitmentItems[3].description}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}