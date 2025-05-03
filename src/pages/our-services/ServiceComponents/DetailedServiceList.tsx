import { DetailedServiceCard } from './DetailedServiceCard';

interface Service {
  id: string;
  // Add other properties of a service here
}

interface DetailedServiceListProps {
  services: Service[];
  isVisible: boolean;
  revealServiceDetails: (id: string) => void;
}

export const DetailedServiceList: React.FC<DetailedServiceListProps> = ({ 
  services, 
  revealServiceDetails 
}) => {
  return (
    <div className="space-y-16">
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id} 
          className="scroll-mt-20"
        >
          <DetailedServiceCard 
            service={service} 
            index={index} 
            revealServiceDetails={revealServiceDetails} 
          />
        </section>
      ))}
    </div>
  );
};