import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Service } from "@/constants/services";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-dark-400 border border-dark-500 rounded-xl p-8 h-full flex flex-col">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-dark-300 rounded-lg flex-shrink-0">
          <Image
            src={service.icon}
            width={32}
            height={32}
            alt={service.title}
            className="size-8"
          />
        </div>
        <h3 className="text-24-bold flex-1">{service.title}</h3>
      </div>
      
      <p className="text-dark-600 mb-6 flex-grow">
        {service.description}
      </p>
      
      <div className="mb-8">
        <h4 className="text-14-semibold text-dark-700 mb-3">Service includes:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-14-regular">
              <div className="size-2 bg-green-500 rounded-full flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto">
        <Button className="shad-gray-btn w-full" asChild>
          <Link href={`/book?service=${encodeURIComponent(service.title)}`}>
            Schedule This Service
          </Link>
        </Button>
      </div>
    </div>
  );
};