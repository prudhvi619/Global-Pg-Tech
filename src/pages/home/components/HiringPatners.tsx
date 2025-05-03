import Amazon from "@/assets/images/companies/Amazon.png";
import Adobe from "@/assets/images/companies/Adobe.png";
import Apple from "@/assets/images/companies/Apple.png";
import Microsoft from "@/assets/images/companies/Microsoft.png";
import Meta from "@/assets/images/companies/Meta.png";
import Qualcomm from "@/assets/images/companies/Qualcomm.png";
import HoneyWell from "@/assets/images/companies/Honeywell.png";
import Invesco from "@/assets/images/companies/Invesco.png";

const companies = [
    { src: Amazon, alt: "Amazon", scale: "scale-110" },
    { src: HoneyWell, alt: "Honeywell", scale: "scale-110" },
    { src: Invesco, alt: "Invesco", scale: "scale-110" },
    { src: Meta, alt: "Meta", scale: "scale-110" },
    { src: Qualcomm, alt: "Qualcomm", scale: "scale-110" },
    { src: Adobe, alt: "Adobe", scale: "scale-130" },
    { src: Apple, alt: "Apple", scale: "scale-120" },
    { src: Microsoft, alt: "Microsoft", scale: "scale-120" },
];

const HiringPatners = () => {
    return (
        <div className="py-12 sm:py-16 md:py-20 flex flex-col justify-center px-4 z-50">
            <div className="text-lg sm:text-xl font-semibold text-center text-[#7B7B7B] pb-8 sm:pb-12 md:pb-16">
                HIRING PARTNERS
            </div>
            
            {/* Mobile layout - single column for xs screens */}
            <div className="grid grid-cols-2 gap-8 sm:hidden">
                {companies.map((company, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <img
                            src={company.src}
                            alt={company.alt}
                            className={`h-8 transform transition-transform ${company.scale ? `hover:${company.scale}` : ""}`}
                        />
                    </div>
                ))}
            </div>
            
            {/* Tablet & Desktop layout */}
            <div className="hidden sm:flex flex-col gap-12 md:gap-16">
                {[0, 1].map((row) => (
                    <div
                        key={row}
                        className="flex flex-wrap justify-around items-center"
                    >
                        {companies.slice(row * 4, row * 4 + 4).map((company, index) => (
                            <div key={index} className="px-2 sm:px-4 md:px-6 flex justify-center">
                                <img
                                    src={company.src}
                                    alt={company.alt}
                                    className={`h-6 sm:h-8 md:h-10 transform transition-transform ${company.scale ? `hover:${company.scale}` : ""}`}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HiringPatners;