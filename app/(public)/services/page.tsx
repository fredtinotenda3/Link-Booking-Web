import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SERVICES_DATA } from "@/constants/services";
import { ServiceCard } from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-dark-400 border-b border-dark-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-[5%] py-4">
          <Link href="/">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="Link Opticians"
              className="h-8 w-fit"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-14-medium hover:text-green-500 transition">Home</Link>
            <Link href="/services" className="text-14-medium text-green-500">Services</Link>
            <Link href="/about" className="text-14-medium hover:text-green-500 transition">About</Link>
            <Link href="/contact" className="text-14-medium hover:text-green-500 transition">Contact</Link>
            <Button className="shad-primary-btn" asChild>
              <Link href="/book">Book Now</Link>
            </Button>
          </nav>
          
          <Link href="/?admin=true" className="text-green-500 text-sm">
            Admin
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-400 to-dark-300 py-16">
        <div className="mx-auto max-w-7xl px-[5%] text-center">
          <h1 className="header mb-6">
            Our <span className="text-green-500">Eye Care</span> Services
          </h1>
          <p className="text-dark-700 text-lg max-w-3xl mx-auto mb-8">
            Comprehensive optometry services designed to protect and enhance your vision at every stage of life.
          </p>
          <Button className="shad-primary-btn" size="lg" asChild>
            <Link href="/book">Book Appointment</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-dark-300 py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="sub-header mb-6">
                Advanced <span className="text-green-500">Technology</span>
              </h2>
              <p className="text-dark-700 mb-6">
                We invest in the latest diagnostic and treatment technology to ensure accurate results and optimal eye health.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="size-2 bg-green-500 rounded-full"></div>
                  <span className="text-16-semibold">Digital Retinal Imaging</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-2 bg-green-500 rounded-full"></div>
                  <span className="text-16-semibold">Optical Coherence Tomography (OCT)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-2 bg-green-500 rounded-full"></div>
                  <span className="text-16-semibold">Auto-refraction & Keratometry</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-2 bg-green-500 rounded-full"></div>
                  <span className="text-16-semibold">Visual Field Analyzer</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden border border-dark-500">
                <Image
                  src="/assets/images/eye-tech.png"
                  width={800}
                  height={600}
                  alt="Advanced eye examination technology"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-[5%] text-center">
          <div className="bg-dark-400 border border-dark-500 rounded-2xl p-12">
            <h2 className="sub-header mb-6">Schedule Your Eye Exam Today</h2>
            <p className="text-dark-700 mb-8 text-lg max-w-2xl mx-auto">
              Your vision is priceless. Take the first step toward clearer, healthier eyes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="shad-primary-btn px-8 py-6 text-lg" asChild>
                <Link href="/book">Book Online Now</Link>
              </Button>
              <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black-800 border-t border-dark-500 py-8">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="Link Opticians"
                className="h-8 w-fit mb-4"
              />
              <p className="text-dark-600 text-sm">
                Professional Eye Care Services
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <Link href="/" className="text-14-regular hover:text-green-500">Home</Link>
              <Link href="/services" className="text-14-regular text-green-500">Services</Link>
              <Link href="/about" className="text-14-regular hover:text-green-500">About</Link>
              <Link href="/contact" className="text-14-regular hover:text-green-500">Contact</Link>
              <Link href="/book" className="text-14-regular hover:text-green-500">Book Online</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-dark-500 text-center">
            <p className="text-dark-600 text-sm">
              © 2026 Link Opticians. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}