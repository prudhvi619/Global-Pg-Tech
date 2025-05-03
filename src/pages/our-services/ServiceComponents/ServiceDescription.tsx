interface ServiceDescriptionProps {
  isVisible: boolean;
}

export const ServiceDescription = ({ isVisible }: ServiceDescriptionProps) => (
    <div 
      className={`max-w-4xl mx-auto text-center mb-12 transition-all duration-700 ease-out delay-100 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      data-section="description"
    >
      <p className="text-gray-600 text-lg leading-relaxed">
        We offer a range of services designed to support your career journey. From placement assistance and hands-on training 
        to portfolio building and academic project support, we are committed to helping you build the skills, confidence, and 
        connections needed to succeed.
      </p>
    </div>
  );