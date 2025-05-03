interface ServiceHeaderProps {
  isVisible: boolean;
}

export const ServiceHeader = ({ isVisible }: ServiceHeaderProps) => (
    <div 
      className={`text-center mb-12 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      data-section="header"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#0050ab] mb-4">OUR SERVICES</h2>
      <div className="w-24 h-1 bg-[#0050ab] mx-auto mb-8"></div>
    </div>
  );