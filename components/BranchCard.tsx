// components\BranchCard.tsx - CORRECTED VERSION

import Image from "next/image";
import Link from "next/link";
import { BranchDetail } from "@/constants/branches";
import { Button } from "@/components/ui/button";

interface BranchCardProps {
  branch: BranchDetail;
}

export const BranchCard = ({ branch }: BranchCardProps) => {
  return (
    <div className="bg-dark-400 border border-dark-500 rounded-xl overflow-hidden h-full flex flex-col">
      <div className="h-48 bg-dark-300 relative overflow-hidden">
        <div className="absolute top-3 left-3 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            branch.type === 'clinic' 
              ? 'bg-green-500/20 text-green-500' 
              : 'bg-blue-500/20 text-blue-500'
          }`}>
            {branch.type === 'clinic' ? 'Clinic' : 'Mobile Unit'}
          </span>
        </div>
        <div className="w-full h-full bg-gradient-to-b from-transparent to-dark-400/60 absolute z-5"></div>
        <Image
          src={branch.image}
          width={400}
          height={192}
          alt={`${branch.name} location`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-18-bold mb-2">{branch.name}</h3>
        <p className="text-dark-600 text-sm mb-4 line-clamp-2">{branch.address}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-2">
            <Image
              src="/assets/icons/clock.svg"
              width={16}
              height={16}
              alt="Hours"
              className="mt-0.5"
            />
            <div>
              <p className="text-12-semibold text-dark-700">Weekdays</p>
              <p className="text-12-regular text-dark-600">{branch.operatingHours.weekdays}</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Image
              src="/assets/icons/phone.svg"
              width={16}
              height={16}
              alt="Phone"
              className="mt-0.5"
            />
            <p className="text-12-regular text-dark-600">{branch.phone}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-12-semibold text-dark-700 mb-2">Services Information:</h4>
          <div className="flex flex-wrap gap-2">
            {branch.services.slice(0, 3).map((service, idx) => (
              <span 
                key={idx} 
                className="px-2 py-1 bg-dark-300 rounded text-10-regular text-dark-600"
              >
                {service}
              </span>
            ))}
            {branch.services.length > 3 && (
              <span className="px-2 py-1 bg-dark-300 rounded text-10-regular text-dark-600">
                +{branch.services.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-0 mt-auto">
        <div className="flex gap-3">
          <Button className="shad-gray-btn flex-1" size="sm" asChild>
            <Link href={`/locations/${branch.id}`}>
              Location Information
            </Link>
          </Button>
          <Button className="shad-gray-btn flex-1" size="sm" asChild>
            <Link href={`/book?branch=${branch.id}`}>
              Appointment Information
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};