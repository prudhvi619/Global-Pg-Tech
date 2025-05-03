import { ServiceCard } from "./ServiceCard";

export const ServiceCardGrid = ({
  services,
  startIndex = 0,
  columns = 3,
}: {
  services: any[];
  startIndex?: number;
  columns?: number;
}) => (
  <div
    className={`grid grid-cols-1 ${
      columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
    } gap-6 mb-12 lg:px-20`}
    data-section="services"
  >
    {services.map((service, idx) => (
      <ServiceCard
        key={service.id}
        service={service}
        index={idx}
        startIndex={startIndex}
      />
    ))}
  </div>
);
