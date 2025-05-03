import { useEffect, useRef, useState } from "react";
import StatDesign from "@/assets/images/stat-design.svg?react";
import Launch from "@/assets/images/launch.svg?react";
import Suitcase from "@/assets/images/suitcase.svg?react";
import CountUp from "react-countup";

const statsData = [
    { value: 500, label: "students placed", animate: true },
    { value: 50, label: "hiring partners", animate: true },
    { value: 24, label: "placement support", animate: true },
];

const Stats = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartAnimation(true);
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <div ref={statsRef} className="bg-[#0F172A] relative overflow-hidden py-12 sm:py-16 md:py-20">
            {/* SVG decorations - Hide on mobile, show on larger screens */}
            <div className="hidden sm:block absolute bottom-0 left-0">
                <StatDesign className="w-20 h-auto sm:w-32 md:w-auto" />
            </div>
            <div className="hidden sm:block absolute top-0 right-0">
                <Launch className="w-20 h-auto sm:w-32 md:w-auto" />
            </div>
            
            {/* Stats container */}
            <div className="w-full px-4 flex flex-col sm:flex-row justify-around items-center gap-10 sm:gap-4 z-10 relative">
                {statsData.map((stat, index) => (
                    <div key={index} className="w-full sm:w-1/3 max-w-xs flex flex-col items-center">
                        <div className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#0066DB] flex flex-col justify-center items-center mx-auto">
                            <Suitcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                        </div>
                        <div className="pt-2 flex flex-col text-center">
                            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                                {startAnimation && stat.animate ? (
                                    <CountUp end={stat.value} duration={2} />
                                ) : (
                                    stat.value
                                )}
                                {stat.label === "placement support" && "x7"}
                            </span>
                            <span className="text-base sm:text-xl md:text-2xl text-[#BEBEBE]">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;