import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/forms/ContactForm";
import { ContactInfoCard } from "@/components/ContactInfoCard";
import { FAQCard } from "@/components/FAQCard";
import { CONTACT_DATA, FAQ_DATA } from "@/constants/contact";

export default function ContactPage() {
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
            <Link href="/services" className="text-14-medium hover:text-green-500 transition">Services</Link>
            <Link href="/about" className="text-14-medium hover:text-green-500 transition">About</Link>
            <Link href="/contact" className="text-14-medium text-green-500">Contact</Link>
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
      <section className="py-16 bg-gradient-to-b from-dark-400 to-dark-300">
        <div className="mx-auto max-w-7xl px-[5%] text-center">
          <h1 className="header mb-6">
            Contact <span className="text-green-500">Link Opticians</span>
          </h1>
          <p className="text-dark-700 text-lg max-w-3xl mx-auto mb-8">
            {CONTACT_DATA.hero.description}
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1">
              <h2 className="text-24-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                {CONTACT_DATA.contactInfo.map((info, index) => (
                  <ContactInfoCard key={index} info={info} />
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="border border-dark-500 rounded-xl overflow-hidden">
                <div className="h-48 bg-dark-300 flex items-center justify-center">
                  <div className="text-center">
                    <Image
                      src="/assets/icons/map.svg"
                      width={48}
                      height={48}
                      alt="Map"
                      className="mx-auto mb-3 opacity-50"
                    />
                    <p className="text-dark-600 text-sm">{CONTACT_DATA.map.placeholder}</p>
                  </div>
                </div>
                <div className="p-4 bg-dark-400">
                  <p className="text-14-semibold mb-1">{CONTACT_DATA.map.title}</p>
                  <p className="text-dark-600 text-sm">{CONTACT_DATA.map.address}</p>
                  <Button className="shad-gray-btn w-full mt-4" size="sm" asChild>
                    <Link href={CONTACT_DATA.map.directionsUrl} target="_blank">
                      Get Directions
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-dark-400 border border-dark-500 rounded-xl p-8">
                <h2 className="text-24-bold mb-2">Send Us a Message</h2>
                <p className="text-dark-700 mb-8">
                  Have questions? Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <ContactForm />
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h2 className="text-24-bold mb-8">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {FAQ_DATA.map((faq, index) => (
                    <FAQCard key={index} faq={faq} />
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-dark-700 mb-4">
                    Still have questions? Call us directly at{" "}
                    <span className="text-green-500 font-semibold">{CONTACT_DATA.phone.main}</span>
                  </p>
                  <Button className="shad-primary-btn" asChild>
                    <Link href={`tel:${CONTACT_DATA.phone.main.replace(/\D/g, "")}`}>
                      Call Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-8 bg-red-900/20 border-y border-red-800">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-red-800 rounded-lg">
                <Image
                  src="/assets/icons/emergency.svg"
                  width={24}
                  height={24}
                  alt="Emergency"
                  className="size-6"
                />
              </div>
              <div>
                <h3 className="text-16-semibold">{CONTACT_DATA.emergency.title}</h3>
                <p className="text-dark-600 text-sm">{CONTACT_DATA.emergency.subtitle}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-800 hover:bg-red-700 text-white" asChild>
                <Link href={`tel:${CONTACT_DATA.phone.emergency.replace(/\D/g, "")}`}>
                  Emergency Hotline: {CONTACT_DATA.phone.emergency}
                </Link>
              </Button>
              <Button className="shad-gray-btn" asChild>
                <Link href={`/book?type=emergency&reason=${encodeURIComponent(CONTACT_DATA.emergency.appointmentReason)}`}>
                  Book Emergency Visit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-[5%] text-center">
          <div className="bg-dark-400 border border-dark-500 rounded-2xl p-12">
            <h2 className="sub-header mb-6">Prefer to Book Online?</h2>
            <p className="text-dark-700 mb-8 text-lg max-w-2xl mx-auto">
              Schedule your appointment in less than 2 minutes with our online booking system.
            </p>
            <Button className="shad-primary-btn px-8 py-6 text-lg" asChild>
              <Link href="/book">Book Appointment Online</Link>
            </Button>
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
                {CONTACT_DATA.footer.tagline}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <Link href="/" className="text-14-regular hover:text-green-500">Home</Link>
              <Link href="/services" className="text-14-regular hover:text-green-500">Services</Link>
              <Link href="/about" className="text-14-regular hover:text-green-500">About</Link>
              <Link href="/contact" className="text-14-regular text-green-500">Contact</Link>
              <Link href="/book" className="text-14-regular hover:text-green-500">Book Online</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-dark-500 text-center">
            <p className="text-dark-600 text-sm">
              © 2024 Link Opticians. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}