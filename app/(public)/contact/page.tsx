
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
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-dark-400 to-dark-300">
        <div className="mx-auto max-w-7xl px-[5%] text-center">
          <h1 className="header mb-6">
            Contact <span className="text-green-500">Information</span>
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
              <h2 className="text-24-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                {CONTACT_DATA.contactInfo.map((info, index) => (
                  <ContactInfoCard key={index} info={info} />
                ))}
              </div>

              {/* Map Information */}
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
                      Location Information
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-dark-400 border border-dark-500 rounded-xl p-8">
                <h2 className="text-24-bold mb-2">Contact Information</h2>
                <p className="text-dark-700 mb-8">
                  For questions or appointment information, complete the form below.
                </p>
                
                <ContactForm />
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h2 className="text-24-bold mb-8">Information</h2>
                
                <div className="space-y-4">
                  {FAQ_DATA.map((faq, index) => (
                    <FAQCard key={index} faq={faq} />
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-dark-700 mb-4">
                    For additional information, contact:{" "}
                    <span className="text-green-500 font-semibold">{CONTACT_DATA.phone.main}</span>
                  </p>
                  <Button className="shad-gray-btn" asChild>
                    <Link href={`tel:${CONTACT_DATA.phone.main.replace(/\D/g, "")}`}>
                      Contact Information
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
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
                  Emergency Contact: {CONTACT_DATA.phone.emergency}
                </Link>
              </Button>
              <Button className="shad-gray-btn" asChild>
                <Link href={`/book?type=emergency&reason=${encodeURIComponent(CONTACT_DATA.emergency.appointmentReason)}`}>
                  Emergency Appointment Information
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-[5%] text-center">
          <div className="bg-dark-400 border border-dark-500 rounded-2xl p-12">
            <h2 className="sub-header mb-6">Appointment Information</h2>
            <p className="text-dark-700 mb-8 text-lg max-w-2xl mx-auto">
              Appointment booking information available.
            </p>
            <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
              <Link href="/book">Appointment Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}