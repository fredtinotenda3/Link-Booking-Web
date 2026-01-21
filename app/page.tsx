import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import PasskeyModal from "@/components/PasskeyModal";
import { LayoutHeader } from "@/components/LayoutHeader";
import { LayoutFooter } from "@/components/LayoutFooter";
import { SearchParamProps } from "@/types";
import { 
  HOME_SERVICES_PREVIEW, 
  HOME_HERO_DATA, 
  HOME_CTA_DATA 
} from "@/constants/home";

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
              {HOME_HERO_DATA.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="shad-primary-btn" size="lg" asChild>
                <Link href={HOME_HERO_DATA.primaryCta.href}>
                  {HOME_HERO_DATA.primaryCta.text}
                </Link>
              </Button>
              <Button className="shad-gray-btn" size="lg" asChild>
                <Link href={HOME_HERO_DATA.secondaryCta.href}>
                  {HOME_HERO_DATA.secondaryCta.text}
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image - Now using constant */}
        <div className="relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
          <Image
            src={HOME_HERO_DATA.image.src}
            height={800}
            width={1200}
            alt={HOME_HERO_DATA.image.alt}
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
            {HOME_SERVICES_PREVIEW.map((service) => (
              <ServicePreviewCard key={service.id} service={service} />
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
          <h2 className="sub-header mb-6">{HOME_CTA_DATA.title}</h2>
          <p className="text-dark-700 mb-8 text-lg">
            {HOME_CTA_DATA.description}
          </p>
          <Button className="shad-primary-btn px-8 py-6 text-lg" asChild>
            <Link href={HOME_CTA_DATA.cta.href}>
              {HOME_CTA_DATA.cta.text}
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <LayoutFooter />
    </div>
  );
}

// Service Preview Card Component - FIXED: Now uses service.icon from constants
const ServicePreviewCard = ({ 
  service 
}: { 
  service: { 
    id: string; 
    title: string; 
    description: string; 
    icon: string;  // Now this will be used
  } 
}) => {
  return (
    <div className="bg-dark-300 p-6 rounded-lg border border-dark-500">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-dark-400 rounded">
          {/* FIX: Using service.icon from constants instead of hardcoded path */}
          <Image
            src={service.icon}
            width={24}
            height={24}
            alt={`${service.title} icon`}
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