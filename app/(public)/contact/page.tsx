// app/(public)/contact/page.tsx - UPDATED WITH SOCIAL MEDIA
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/forms/ContactForm";
import { ContactInfoCard } from "@/components/ContactInfoCard";
import { FAQCard } from "@/components/FAQCard";
import { CONTACT_DATA, FAQ_DATA } from "@/constants/contact";
import { SOCIAL_MEDIA_LINKS, SOCIAL_MEDIA_CONFIG, getWhatsAppUrl } from "@/constants/social";

export default function ContactPage() {
  // Get social media links for contact page
  const contactSocialLinks = SOCIAL_MEDIA_LINKS.filter(platform => 
    SOCIAL_MEDIA_CONFIG.contactPage.includes(platform.id)
  );

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
              <h2 className="text-24-bold mb-8">Practice Contact Details</h2>
              
              <div className="space-y-6 mb-12">
                {CONTACT_DATA.contactInfo.map((info, index) => (
                  <ContactInfoCard key={index} info={info} />
                ))}
              </div>

              {/* Social Media Section - NEW */}
              <div className="mb-12">
                <h3 className="text-18-bold mb-6">Connect With Us</h3>
                <div className="bg-dark-400 border border-dark-500 rounded-xl p-6">
                  <p className="text-dark-600 mb-4">
                    Follow us on social media for updates, eye care tips, and practice news.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {contactSocialLinks.map((platform) => (
                      <a
                        key={platform.id}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-dark-300 hover:bg-dark-500 border border-dark-500 rounded-lg transition-all hover:scale-105 group flex-1 min-w-[140px]"
                        aria-label={`Follow us on ${platform.name}`}
                        title={platform.description}
                      >
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <Image
                            src={platform.icon}
                            alt={platform.name}
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-14-semibold text-white">
                          {platform.name}
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* WhatsApp Quick Action */}
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-500/20 rounded-full">
                        <Image
                          src="/assets/icons/social/whatsapp.svg"
                          alt="WhatsApp"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div>
                        <h4 className="text-16-semibold text-white">Quick WhatsApp Inquiry</h4>
                        <p className="text-sm text-dark-600">Get quick responses</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        asChild
                        className="bg-green-500 hover:bg-green-600 text-white flex-1"
                      >
                        <Link
                          href={getWhatsAppUrl("Hello, I'd like to book an appointment")}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Book Appointment
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="shad-gray-btn flex-1 border-green-500/50 hover:border-green-500"
                      >
                        <Link
                          href={getWhatsAppUrl("Hello, I have a general inquiry")}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          General Inquiry
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
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
                      View on Map
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-dark-400 border border-dark-500 rounded-xl p-8">
                <h2 className="text-24-bold mb-2">Contact Form</h2>
                <p className="text-dark-700 mb-8">
                  For inquiries or appointment requests, please use the form below.
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
                    For further inquiries, please call:{" "}
                    <span className="text-green-500 font-semibold">{CONTACT_DATA.phone.main}</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="shad-gray-btn" asChild>
                      <Link href={`tel:${CONTACT_DATA.phone.main.replace(/\D/g, "")}`}>
                        Call Practice
                      </Link>
                    </Button>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white"
                      asChild
                    >
                      <Link
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/assets/icons/social/whatsapp.svg"
                          alt="WhatsApp"
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                        Message on WhatsApp
                      </Link>
                    </Button>
                  </div>
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
                  Emergency: {CONTACT_DATA.phone.emergency}
                </Link>
              </Button>
              <Button className="shad-gray-btn" asChild>
                <Link href={`/book?type=emergency`}>
                  Request Emergency Appointment
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
            <h2 className="sub-header mb-6">Appointment Booking</h2>
            <p className="text-dark-700 mb-8 text-lg max-w-2xl mx-auto">
              Appointment requests can be submitted online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                <Link href="/book">Request an Appointment</Link>
              </Button>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg"
                asChild
              >
                <Link
                  href={getWhatsAppUrl("Hello, I'd like to book an appointment")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/icons/social/whatsapp.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  Book via WhatsApp
                </Link>
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-dark-500">
              <p className="text-sm text-dark-600">
                Prefer to message? Use WhatsApp for quick responses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}