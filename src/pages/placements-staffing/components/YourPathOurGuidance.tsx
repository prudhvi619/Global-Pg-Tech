import Amazon from "@/assets/icons/amazon.svg?react";
import Apple from "@/assets/icons/apple.svg?react";
import Facebook from "@/assets/icons/facebook.svg?react";
import GE from "@/assets/icons/ge.svg?react";
import Google from "@/assets/icons/google.svg?react";
import Microsoft from "@/assets/icons/microsoft.svg?react";
import Attlasian from "@/assets/icons/attlasian.svg?react";
import Pepsi from "@/assets/icons/pepsi-co.svg?react";
import P_G from "@/assets/icons/PG.svg?react";
import { useEffect } from "react";

export default function YourPathOurGuidance() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes bounce-up {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-25px); }
      }
      
      @keyframes bounce-down {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(25px); }
      }
      
      .bounce-up {
        animation: bounce-up 2s infinite ease-in-out;
      }
      
      .bounce-down {
        animation: bounce-down 2s infinite ease-in-out;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)] bg-gray-50 text-center px-2">
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Desktop positioning preserved exactly, with adjustments for mobile */}
        <div className="absolute left-20 -top-10 md:block" style={{ left: 'clamp(20px, 5vw, 80px)' }}>
          <GE className="w-8 h-8 bounce-up" />
        </div>

        <div className="absolute -left-20 top-28 md:block" style={{ left: 'clamp(-40px, -5vw, -80px)' }}>
          <Amazon className="w-8 h-8 bounce-up" />
        </div>

        <div className="absolute left-0 bottom-16">
          <Attlasian className="w-8 h-8 bounce-up" />
        </div>

        <div className="absolute right-0 bottom-16">
          <Facebook className="w-8 h-8 bounce-up" />
        </div>

        <div className="absolute right-1/4 -bottom-12">
          <P_G className="w-8 h-8 bounce-up" />
        </div>

        <div className="absolute right-20 -top-10 md:block" style={{ right: 'clamp(20px, 5vw, 80px)' }}>
          <Google className="w-8 h-8 bounce-down" />
        </div>

        <div className="absolute -right-20 top-28 md:block" style={{ right: 'clamp(-40px, -5vw, -80px)' }}>
          <Apple className="w-8 h-8 bounce-down" />
        </div>

        <div className="absolute left-1/2 bottom-16 transform -translate-x-1/2">
          <Pepsi className="w-8 h-8 bounce-down" />
        </div>

        <div className="absolute left-1/4 -bottom-6">
          <Microsoft className="w-8 h-8 bounce-down" />
        </div>

        {/* Main content with responsive text */}
        <div className="pt-4 pb-32">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0050ab] mb-2">Your Path</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0050ab] mb-6">
            Our Guidance
          </h2>

          <div className="max-w-xl mx-auto px-4">
            <p className="text-base md:text-lg text-gray-600 mb-2">
              We believe the path to your dream role should feel empowering — not
              overwhelming.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-2">
              With the right guidance, each challenge becomes a chance to grow,
              and each step brings you closer.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              Let's walk the journey together, one purposeful stride at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}