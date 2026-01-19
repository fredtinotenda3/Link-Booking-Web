import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ABOUT_DATA, TEAM_MEMBERS, VALUES } from "@/constants/about";
import { TeamCard } from "@/components/TeamCard";
import { ValueCard } from "@/components/ValueCard";

export default function AboutPage() {
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
            <Link href="/about" className="text-14-medium text-green-500">About</Link>
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
      <section className="relative py-16 bg-gradient-to-b from-dark-400 to-dark-300">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="header mb-6">
                About <span className="text-green-500">Link Opticians</span>
              </h1>
              <p className="text-dark-700 text-lg mb-8">
                {ABOUT_DATA.hero.description}
              </p>
              <div className="flex flex-wrap gap-6">
                {ABOUT_DATA.stats.map((stat, index) => (
                  <div key={index} className="bg-dark-400 border border-dark-500 rounded-lg p-4 min-w-[140px]">
                    <p className="text-32-bold text-green-500">{stat.value}</p>
                    <p className="text-dark-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-dark-500">
                <Image
                  src={ABOUT_DATA.images.clinicInterior}
                  width={800}
                  height={600}
                  alt="Modern clinic interior"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="sub-header mb-6">Our Story</h2>
            <p className="text-dark-700 text-lg">
              {ABOUT_DATA.story}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-24-bold">Why Choose Us?</h3>
              <ul className="space-y-4">
                {ABOUT_DATA.whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 size-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-16-semibold">{item.title}</p>
                      <p className="text-dark-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative rounded-xl overflow-hidden border border-dark-500">
              <Image
                src={ABOUT_DATA.images.examRoom}
                width={600}
                height={500}
                alt="Modern examination room"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-dark-300">
        <div className="mx-auto max-w-7xl px-[5%]">
          <h2 className="sub-header text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <h2 className="sub-header text-center mb-12">Meet Our Expert Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 bg-dark-300">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="sub-header mb-6">Community Involvement</h2>
              <p className="text-dark-700 mb-6">
                {ABOUT_DATA.community.description}
              </p>
              <ul className="space-y-4">
                {ABOUT_DATA.community.initiatives.map((initiative, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="size-2 bg-green-500 rounded-full"></div>
                    <span className="text-16-semibold">{initiative}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden border border-dark-500">
                <Image
                  src={ABOUT_DATA.images.communityEvent}
                  width={600}
                  height={400}
                  alt="Community vision screening event"
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
            <h2 className="sub-header mb-6">Experience Our Care</h2>
            <p className="text-dark-700 mb-8 text-lg max-w-2xl mx-auto">
              Ready to see the difference that personalized, expert eye care can make?
            </p>
            <Button className="shad-primary-btn px-8 py-6 text-lg" asChild>
              <Link href="/book">Book Your Appointment</Link>
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
                Professional Eye Care Since 2003
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <Link href="/" className="text-14-regular hover:text-green-500">Home</Link>
              <Link href="/services" className="text-14-regular hover:text-green-500">Services</Link>
              <Link href="/about" className="text-14-regular text-green-500">About</Link>
              <Link href="/contact" className="text-14-regular hover:text-green-500">Contact</Link>
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