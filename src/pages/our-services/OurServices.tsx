// OurServices.jsx - Main component
import { useState, useEffect } from 'react';
import { ServiceHeader } from './ServiceComponents/ServiceHeader';
import { ServiceDescription } from './ServiceComponents/ServiceDescription';
import { ServiceCardGrid } from './ServiceComponents/ServiceCardGrid';
import { DetailedServiceList } from './ServiceComponents/DetailedServiceList';
import { CallToAction } from './ServiceComponents/CallToAction';
import { serviceData } from './ServiceComponents/ServiceData';

const OurServices = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    description: false,
    services: false,
    serviceDetails: {},
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
  const revealServiceDetails = (serviceName:any) => {
    setIsVisible((prev) => ({
      ...prev,
      serviceDetails: {
        ...prev.serviceDetails,
        [serviceName]: true
      }
    }));
  };

  return (
    <div className="w-full bg-gray-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <ServiceHeader isVisible={isVisible.header} />
        <ServiceDescription isVisible={isVisible.description} />
        <ServiceCardGrid 
          services={serviceData.slice(0, 3)} 
        />
        <ServiceCardGrid 
          services={serviceData.slice(3, 5)} 
          startIndex={3}
          columns={2}
        />
      </div>

      {/* Detailed Service Sections */}
      <div className="container mx-auto px-4 py-12 lg:px-24">
        <DetailedServiceList 
          services={serviceData} 
          isVisible={true} 
          revealServiceDetails={revealServiceDetails} 
        />
      </div>

      {/* Call to Action */}
      <CallToAction isVisible={isVisible.contact} />
    </div>
  );
};

export default OurServices;