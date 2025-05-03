import { useState, useEffect } from 'react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import {Service, serviceData} from './ServiceComponents/ServiceData.tsx';

const OurServices = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    description: false,
    services: false,
    serviceDetails: {} as Record<string, boolean>,
    contact: false
  });

  // Animation for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [(entry.target as HTMLElement).dataset.section || '']: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    // Start animations for the first visible elements
    setTimeout(() => {
      setIsVisible(prev => ({
        ...prev,
        header: true,
        description: true
      }));
    }, 300);

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Helper function to reveal service details
  interface VisibilityState {
    header: boolean;
    description: boolean;
    services: boolean;
    serviceDetails: Record<string, boolean>;
    contact: boolean;
  }

  const revealServiceDetails = (serviceName: string): void => {
    setIsVisible((prev: VisibilityState) => ({
      ...prev,
      serviceDetails: {
        ...prev.serviceDetails,
        [serviceName]: true
      }
    }));
  };

  const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        revealServiceDetails(service.id);
      }, 300 * (index + 1));
      
      return () => clearTimeout(timer);
    }, [index]);

    return (
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isVisible.serviceDetails[service.id] 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div 
          className={`bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-8 border-t-4 ${
            isHovered ? 'border-blue-600 -translate-y-1' : 'border-blue-400'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/12 mb-4 md:mb-0 flex justify-center">
              <div className="bg-blue-600 rounded-full p-3 inline-flex items-center justify-center">
                {service.icon}
              </div>
            </div>
            
            <div className="md:w-11/12 md:pl-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.advisors.map((advisor, idx) => (
                  <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-lg p-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <span className="text-blue-600 font-bold text-xl">{advisor.name.charAt(0)}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">{advisor.name}</h4>
                    <p className="text-gray-500 text-sm mb-2">{advisor.role}</p>
                    
                    {advisor.contactMethods.length > 0 && (
                      <div className="flex space-x-2 mt-2">
                        {advisor.contactMethods.includes('email') && (
                          <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 py-1 px-3 rounded-full flex items-center text-sm">
                            <Mail className="w-4 h-4 mr-1" /> Email
                          </button>
                        )}
                        {advisor.contactMethods.includes('whatsapp') && (
                          <button className="bg-green-50 hover:bg-green-100 text-green-600 py-1 px-3 rounded-full flex items-center text-sm">
                            <MessageCircle className="w-4 h-4 mr-1" /> WhatsApp
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main render
  return (
    <div className="w-full bg-gray-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div 
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-section="header"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        {/* Description */}
        <div 
          className={`max-w-4xl mx-auto text-center mb-12 transition-all duration-700 ease-out delay-100 ${
            isVisible.description ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-section="description"
        >
          <p className="text-gray-600 text-lg leading-relaxed">
            We offer a range of services designed to support your career journey. From placement assistance and hands-on training 
            to portfolio building and academic project support, we are committed to helping you build the skills, confidence, and 
            connections needed to succeed.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:px-20" data-section="services">
          {serviceData.slice(0, 3).map((service:Service, idx:number) => (
            <div 
              key={service.id}
              className={`cursor-pointer group transition-all duration-500 ease-in-out ${
                isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
              onClick={() => window.location.href = `#${service.id}`}
            >
              <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg border-t-4 border-blue-400 group-hover:border-blue-600 transition-all duration-300">
                <div className="bg-blue-600 rounded-full p-3 inline-flex items-center justify-center mb-4 group-hover:bg-blue-700">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{service.highlight}</p>
                <div className="flex justify-center">
                  <span className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 lg:px-20" data-section="services">
          {serviceData.slice(3, 5).map((service:Service, idx:number) => (
            <div 
              key={service.id}
              className={`cursor-pointer group transition-all duration-500 ease-in-out ${
                isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(idx + 3) * 150}ms` }}
              onClick={() => window.location.href = `#${service.id}`}
            >
              <div className="bg-white h-60 rounded-lg p-6 text-center shadow-md hover:shadow-lg border-t-4 border-blue-400 group-hover:border-blue-600 transition-all duration-300">
                <div className="bg-blue-600 rounded-full p-3 inline-flex items-center justify-center mb-4 group-hover:bg-blue-700">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{service.highlight}.</p>
                <div className="flex justify-center">
                  <span className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Service Sections */}
      <div className="container mx-auto px-4 py-12 lg:px-24">
        {serviceData.map((service:Service, index:number) => (
          <section 
            key={service.id} 
            id={service.id} 
            className="scroll-mt-20 pt-16"
          >
            <ServiceCard service={service} index={index} />
          </section>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div 
          className={`container mx-auto px-4 text-center transition-all duration-700 ease-out ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          data-section="contact"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Need Guidance?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our dedicated experts are ready to assist you at every stage — helping you learn,
            grow, and achieve your career goals with confidence. Reach out to us today.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;