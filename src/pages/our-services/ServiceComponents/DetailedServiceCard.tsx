import { useEffect, useState, useRef } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { handleEmailClick, handleWhatsAppClick } from "@/utilities/utils/advisorContactUtil";

interface Advisor {
  name: string;
  role: string;
  contactMethods: string[];
}

export const DetailedServiceCard = ({
  service,
  index,
  revealServiceDetails,
}: {
  service: any;
  index: number;
  revealServiceDetails: (id: any) => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Array of gradient color combinations with matching darker text colors
  const colorSchemes = [
    {
      gradient: "bg-gradient-to-r from-pink-200 to-rose-200",
      text: "text-rose-700",
    },
    {
      gradient: "bg-gradient-to-r from-blue-200 to-cyan-200",
      text: "text-blue-800",
    },
    {
      gradient: "bg-gradient-to-r from-amber-100 to-yellow-200",
      text: "text-amber-800",
    },
    {
      gradient: "bg-gradient-to-r from-emerald-100 to-teal-200",
      text: "text-emerald-800",
    },
    {
      gradient: "bg-gradient-to-r from-violet-100 to-purple-200",
      text: "text-violet-800",
    },
    {
      gradient: "bg-gradient-to-r from-red-100 to-orange-200",
      text: "text-red-800",
    },
    {
      gradient: "bg-gradient-to-r from-lime-100 to-green-200",
      text: "text-lime-800",
    },
    {
      gradient: "bg-gradient-to-r from-sky-100 to-indigo-200",
      text: "text-sky-800",
    },
    {
      gradient: "bg-gradient-to-r from-fuchsia-100 to-pink-200",
      text: "text-fuchsia-800",
    },
    {
      gradient: "bg-gradient-to-r from-teal-100 to-cyan-200",
      text: "text-teal-800",
    },
  ];

  useEffect(() => {
    const getThreshold = () => {
      const width = window.innerWidth;
      if (width >= 1024) return 0.5; // Desktop
      if (width >= 768) return 0.4; // Tablet
      return 0.2; // Mobile
    };

    const observer = new IntersectionObserver(
      (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        revealServiceDetails(service.id);
        observer.unobserve(entries[0].target);
      }
      },
      { threshold: getThreshold() }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [service.id, revealServiceDetails]);

  // Determine if this is an even or odd index for alternating layout
  const isEven = index % 2 === 0;

  // Animation classes based on index (even/odd)
  const animationClass = isEven
    ? "transform translate-x-[-100px] opacity-0"
    : "transform translate-x-[100px] opacity-0";

  const visibleClass = "transform translate-x-0 opacity-100";

  // Select different color scheme for each card
  const cardColorScheme = colorSchemes[index % colorSchemes.length];

  // Handle click events for contact buttons
  const onEmailClick = (advisorName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    // Call the email handler function from advisorContactUtil
    handleEmailClick(advisorName);
  };

  const onWhatsAppClick = (advisorName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    // Call the WhatsApp handler function from advisorContactUtil
    handleWhatsAppClick(advisorName);
  };

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visibleClass : animationClass
      }`}
    >
      <div className="bg-white rounded-lg p-6 shadow-lg mb-8 border-t-4 border-[#0066DB]">
        {/* Desktop Layout (Alternating left/right) */}
        <div className="hidden lg:flex flex-row items-center">
          {/* SVG Image - Left side on even indexes */}
          {isEven && (
            <div className="w-[36%] mr-8">
              <div className="bg-blue-50 rounded-lg p-4 flex justify-center items-center">
                <img src={service.svgImage} alt={service.title} />
              </div>
            </div>
          )}

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="bg-[#0066DB] rounded-full p-3 inline-flex items-center justify-center mr-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {service.title}
              </h3>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.advisors.map((advisor: Advisor, idx: number) => {
                // For each advisor, use a different color scheme within this card
                const advisorColorIdx = (index + idx) % colorSchemes.length;
                const advisorColor = colorSchemes[advisorColorIdx];

                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-gray-50 rounded-lg p-4"
                  >
                    {/* Avatar with gradient background and darker text */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${advisorColor.gradient}`}
                    >
                      <span
                        className={`font-bold text-xl ${advisorColor.text}`}
                      >
                        {advisor.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-800">
                      {advisor.name}
                    </h4>
                    <p className="text-gray-500 text-sm mb-2">{advisor.role}</p>

                    {advisor.contactMethods.length > 0 && (
                        <div className="flex space-x-2 mt-2">
                        {advisor.contactMethods.includes("email") && (
                          <button 
                            className="bg-blue-50 text-[#0066DB] py-1 px-3 rounded-full flex items-center text-sm transition-colors duration-300 hover:bg-blue-500 hover:text-white hover:cursor-pointer"
                            onClick={(e) => onEmailClick(advisor.name, e)}
                          >
                            <Mail className="w-4 h-4 mr-1" /> Email
                          </button>
                        )}
                        {advisor.contactMethods.includes("whatsapp") && (
                          <button 
                            className="bg-green-50 text-green-600 py-1 px-3 rounded-full flex items-center text-sm transition-colors duration-300 hover:bg-green-500 hover:text-white hover:cursor-pointer"
                            onClick={(e) => onWhatsAppClick(advisor.name, e)}
                          >
                            <MessageCircle className="w-4 h-4 mr-1" /> WhatsApp
                          </button>
                        )}
                        </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SVG Image - Right side on odd indexes */}
          {!isEven && (
            <div className="w-[36%] ml-8">
              <div className="bg-blue-50 rounded-lg p-4 flex justify-center items-center">
                <img src={service.svgImage} alt={service.title} />
              </div>
            </div>
          )}
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          <div className="flex items-center mb-4">
            <div
              className={`${cardColorScheme.gradient} rounded-full p-3 inline-flex items-center justify-center mr-4`}
            >
              <div className={`${cardColorScheme.text}`}>{service.icon}</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {service.title}
            </h3>
          </div>

          <div className="mb-6">
            <div className="bg-blue-50 rounded-lg p-4 mb-4 flex justify-center items-center">
              <img src={service.svgImage} alt={service.title} />
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.advisors.map((advisor: Advisor, idx: number) => {
              // For each advisor, use a different color scheme within this card
              const advisorColorIdx = (index + idx) % colorSchemes.length;
              const advisorColor = colorSchemes[advisorColorIdx];

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-gray-50 rounded-lg p-4"
                >
                  {/* Avatar with gradient background and darker text */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${advisorColor.gradient}`}
                  >
                    <span className={`font-bold text-xl ${advisorColor.text}`}>
                      {advisor.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800">
                    {advisor.name}
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">{advisor.role}</p>

                  {advisor.contactMethods.length > 0 && (
                    <div className="flex space-x-2 mt-2">
                      {advisor.contactMethods.includes("email") && (
                        <button 
                          className="bg-blue-50 text-[#0066DB] py-1 px-3 rounded-full flex items-center text-sm transition-colors duration-300 hover:bg-blue-500 hover:text-white hover:cursor-pointer"
                          onClick={(e) => onEmailClick(advisor.name, e)}
                        >
                          <Mail className="w-4 h-4 mr-1" /> Email
                        </button>
                      )}
                      {advisor.contactMethods.includes("whatsapp") && (
                        <button 
                          className="bg-green-50 text-green-600 py-1 px-3 rounded-full flex items-center text-sm transition-colors duration-300 hover:bg-green-500 hover:text-white hover:cursor-pointer"
                          onClick={(e) => onWhatsAppClick(advisor.name, e)}
                        >
                          <MessageCircle className="w-4 h-4 mr-1" /> WhatsApp
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};