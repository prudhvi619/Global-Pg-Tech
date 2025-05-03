import { ArrowRight } from 'lucide-react';
import { Service } from './ServiceData';

export const ServiceCard = ({ service, index, startIndex = 0 }: { service: Service; index: number; startIndex?: number }) => (
  <div 
    key={service.id}
    className={`cursor-pointer transition-all duration-500 ease-in-out opacity-0 translate-y-10`}
    style={{ 
      transitionDelay: `${(index + startIndex) * 150}ms`,
      animation: 'fadeInUp 0.5s ease-out forwards',
      animationDelay: `${(index + startIndex) * 150}ms`
    }}
    onClick={() => window.location.href = `#${service.id}`}
  >
    <div className="bg-[#f6faff] rounded-lg p-6 text-center shadow-md border-t-4 border-[#0066DB] lg:h-60">
      <div className="bg-[#0066DB] rounded-full p-3 inline-flex items-center justify-center mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{service.highlight}.</p>
      <div className="flex justify-center">
        <span className="inline-flex items-center text-[#0066DB] font-medium">
          Learn More <ArrowRight className="w-4 h-4 ml-1" />
        </span>
      </div>
    </div>
  </div>
);