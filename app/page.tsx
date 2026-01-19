import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import PasskeyModal from "@/components/PasskeyModal";
import { LayoutHeader } from "@/components/LayoutHeader";
import { LayoutFooter } from "@/components/LayoutFooter";
import { SearchParamProps } from "@/types";
import { HOME_SERVICES_PREVIEW } from "@/constants/home";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams?.admin === "true";
  
  return (
    <div className="min-h-screen">
      {isAdmin && <PasskeyModal />}
      
      {/* Header/Navigation */}
      <LayoutHeader activePage="home" />
      
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row min-h-[80vh]">
        <div className="container my-auto py-12 lg:py-0">
          <div className="max-w-2xl">
            <h1 className="header mb-6">
              Eye Care at <span className="text-dark-600">Link Opticians</span>
            </h1>
            <p className="text-dark-700 mb-8 text-lg">
              Optometry services with diagnostic technology. 
              Schedule your appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="shad-primary-btn" size="lg" asChild>
                <Link href="/book">Schedule Appointment</Link>
              </Button>
              <Button className="shad-gray-btn" size="lg" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
          <Image
            src="/assets/images/eye-care-hero.png"
            height={800}
            width={1200}
            alt="Eye examination at Link Opticians"
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-dark-400 py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="text-center mb-12">
            <h2 className="sub-header mb-4">Eye Care Services</h2>
            <p className="text-dark-700 max-w-2xl mx-auto">
              Optometry services for vision needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_SERVICES_PREVIEW.map((service, index) => (
              <ServicePreviewCard key={index} service={service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="shad-gray-btn" asChild>
              <Link href="/services">All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-[5%] text-center">
          <h2 className="sub-header mb-6">Schedule Your Eye Exam</h2>
          <p className="text-dark-700 mb-8 text-lg">
            Appointments can be scheduled online.
          </p>
          <Button className="shad-primary-btn px-8 py-6 text-lg" asChild>
            <Link href="/book">Schedule Appointment</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <LayoutFooter />
    </div>
  );
}

// Service Preview Card Component
const ServicePreviewCard = ({ service }: { service: { title: string; description: string } }) => {
  return (
    <div className="bg-dark-300 p-6 rounded-lg border border-dark-500">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-dark-400 rounded">
          <Image
            src="/assets/icons/eye.png"
            width={24}
            height={24}
            alt="Eye care"
          />
        </div>
        <h3 className="text-18-bold">{service.title}</h3>
      </div>
      <p className="text-dark-600">
        {service.description}
      </p>
    </div>
  );
};