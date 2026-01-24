// app\(public)\services\page.tsx - CORRECTED VERSION

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingTable } from "@/components/PricingTable";
import { 
  SERVICES_DATA, 
  INSURANCE_PARTNERS, 
  PAYMENT_OPTIONS,
  COST_SAVINGS 
} from "@/constants/services";

export const metadata: Metadata = {
  title: "Services | Link Opticians",
  description: "Optometry services available. Medical aid claims and cash payment options.",
  keywords: [
    "eye examination",
    "optometry services",
    "eye care",
    "medical aid",
    "opticians",
    "Link Opticians"
  ],
  openGraph: {
    title: "Services | Link Opticians",
    description: "Optometry services",
    type: "website",
    url: "https://linkopticians.co.zw/services",
    images: [
      {
        url: "/assets/images/medical-aid-accepted.jpeg",
        width: 1200,
        height: 600,
        alt: "Medical aid services information"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Link Opticians",
    description: "Optometry services",
    images: ["/assets/images/medical-aid-accepted.jpeg"]
  },
  alternates: {
    canonical: "https://linkopticians.co.zw/services"
  }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section aria-labelledby="hero-heading" className="bg-gradient-to-b from-dark-400 to-dark-300 py-16">
          <div className="mx-auto max-w-7xl px-[5%] text-center">
            <h1 id="hero-heading" className="header mb-6">
              Services at <span className="text-green-500">Link Opticians</span>
            </h1>
            <p className="text-dark-700 text-lg max-w-3xl mx-auto mb-8">
              Optometry services with diagnostic equipment. Services available for patients with medical aid coverage and cash payment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="shad-gray-btn" size="lg" asChild>
                <Link href="#pricing">Service Details</Link>
              </Button>
              <Button className="shad-gray-btn" size="lg" asChild>
                <Link href="/contact">Contact for Information</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section aria-label="Service features" className="py-12 bg-green-600/10">
          <div className="mx-auto max-w-7xl px-[5%]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-3xl mb-4">🏥</div>
                <h2 className="text-18-bold mb-2">Our Laboratory</h2>
                <p className="text-dark-600">
                  Lenses manufactured at our clinic
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl mb-4">💳</div>
                <h2 className="text-18-bold mb-2">Payment Options</h2>
                <p className="text-dark-600">
                  Medical aid claims and cash payment
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl mb-4">⚕️</div>
                <h2 className="text-18-bold mb-2">Professional Services</h2>
                <p className="text-dark-600">
                  Optometry services by qualified practitioners
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section aria-labelledby="services-heading" className="py-16">
          <div className="mx-auto max-w-7xl px-[5%]">
            <header className="text-center mb-12">
              <h2 id="services-heading" className="sub-header mb-4">Optometry Services</h2>
              <p className="text-dark-700 max-w-2xl mx-auto">
                Professional eye care services
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES_DATA.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section id="pricing" aria-labelledby="pricing-heading" className="py-16 bg-dark-300">
          <div className="mx-auto max-w-7xl px-[5%]">
            <header className="text-center mb-12">
              <h2 id="pricing-heading" className="sub-header mb-4">Service Details</h2>
              <p className="text-dark-700 max-w-2xl mx-auto">
                Service information for cash payment and medical aid
              </p>
            </header>
            
            <div className="mb-8">
              <PricingTable />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-dark-400 border border-dark-500 rounded-xl p-6">
                <h3 className="text-18-bold mb-4">Service Information</h3>
                <ul className="space-y-3" role="list">
                  {COST_SAVINGS.map((saving, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 size-2 bg-green-500 rounded-full"></div>
                      <span className="text-dark-600">{saving}</span>
                    </li>
                  ))}
                </ul>
              </article>
              
              <article className="bg-dark-400 border border-dark-500 rounded-xl p-6">
                <h3 className="text-18-bold mb-4">Payment Methods</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {PAYMENT_OPTIONS.map((option, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-dark-300 rounded-full text-sm"
                    >
                      {option}
                    </span>
                  ))}
                </div>
                <div className="p-4 bg-dark-300 rounded-lg">
                  <p className="text-sm text-dark-600">
                    Medical aid coverage varies by plan. Contact for specific coverage information.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Medical Aid Information */}
        <section aria-labelledby="medical-aid-heading" className="py-16">
          <div className="mx-auto max-w-7xl px-[5%]">
            <header className="text-center mb-12">
              <h2 id="medical-aid-heading" className="sub-header mb-4">Medical Aid Information</h2>
              <p className="text-dark-700 max-w-2xl mx-auto">
                Medical aid coverage information. Cash payment also available.
              </p>
            </header>
            
            {/* Medical Aid Image */}
            <div className="mb-12">
              <div className="bg-dark-400 border border-dark-500 rounded-2xl p-8">
                <div className="relative rounded-xl overflow-hidden border border-dark-500">
                  <Image
                    src="/assets/images/medical-aid-accepted.jpeg"
                    width={1200}
                    height={600}
                    alt="Information about medical aid services"
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INSURANCE_PARTNERS.map((partner) => (
                <article 
                  key={partner.name} 
                  className="bg-dark-400 border border-dark-500 rounded-xl p-6"
                >
                  <h3 className="text-18-bold mb-2">{partner.name}</h3>
                  <p className="text-dark-600 text-sm mb-3">{partner.description}</p>
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-green-500">COVERAGE INFORMATION:</span>
                    <p className="text-sm">{partner.coverage}</p>
                  </div>
                  {partner.notes && (
                    <p className="text-xs text-dark-600 italic">{partner.notes}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnostic Equipment Information */}
        <section aria-labelledby="equipment-heading" className="bg-dark-300 py-16">
          <div className="mx-auto max-w-7xl px-[5%]">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <header>
                  <h2 id="equipment-heading" className="sub-header mb-6">
                    Diagnostic Equipment
                  </h2>
                  <p className="text-dark-700 mb-6">
                    Equipment used for eye examinations
                  </p>
                </header>
                <ul className="space-y-4" role="list">
                  <li className="flex items-center gap-3">
                    <div className="size-2 bg-green-500 rounded-full"></div>
                    <span className="text-16-semibold">Digital retinal imaging</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-2 bg-green-500 rounded-full"></div>
                    <span className="text-16-semibold">Optical coherence tomography</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-2 bg-green-500 rounded-full"></div>
                    <span className="text-16-semibold">Auto-refraction & keratometry</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="size-2 bg-green-500 rounded-full"></div>
                    <span className="text-16-semibold">Visual field analyzer</span>
                  </li>
                </ul>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden border border-dark-500">
                  <Image
                    src="/assets/images/eye-tech.png"
                    width={800}
                    height={600}
                    alt="Eye examination equipment"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section aria-labelledby="cta-heading" className="py-16">
          <div className="mx-auto max-w-4xl px-[5%] text-center">
            <article className="bg-dark-400 border border-dark-500 rounded-2xl p-12">
              <header className="mb-8">
                <h2 id="cta-heading" className="sub-header mb-6">Eye Examinations</h2>
                <p className="text-dark-700 mb-8 text-lg max-w-2xl mx-auto">
                  Appointments available.
                </p>
              </header>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                  <Link href="/book">Book Appointment</Link>
                </Button>
                <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                  <Link href="/contact">Contact Our Clinics</Link>
                </Button>
              </div>
              <footer className="pt-8 border-t border-dark-500">
                <p className="text-sm text-dark-600">
                  Medical aid claims processed according to plan coverage.
                </p>
              </footer>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}