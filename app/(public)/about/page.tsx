
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ABOUT_DATA, TEAM_MEMBERS, VALUES } from "@/constants/about";
import { TeamCard } from "@/components/TeamCard";
import { ValueCard } from "@/components/ValueCard";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
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
                    <p className="text-32-bold">{stat.value}</p>
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
                  alt="Clinic interior at Link Opticians"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Information */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="sub-header mb-6">Practice Information</h2>
            <p className="text-dark-700 text-lg">
              {ABOUT_DATA.story}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-24-bold">Practice Services</h3>
              <ul className="space-y-4">
                {ABOUT_DATA.practiceServices.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 size-2 bg-dark-600 rounded-full"></div>
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
                alt="Examination room at Link Opticians"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-dark-300">
        <div className="mx-auto max-w-7xl px-[5%]">
          <h2 className="sub-header text-center mb-12">Practice Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <ValueCard key={index} value={value} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Information */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <h2 className="sub-header text-center mb-12">Team Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Services Information */}
      <section className="py-16 bg-dark-300">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="sub-header mb-6">Community Services</h2>
              <p className="text-dark-700 mb-6">
                {ABOUT_DATA.community.description}
              </p>
              <ul className="space-y-4">
                {ABOUT_DATA.community.initiatives.map((initiative, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="size-2 bg-dark-600 rounded-full"></div>
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

      {/* Contact Information */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-[5%] text-center">
          <div className="bg-dark-400 border border-dark-500 rounded-2xl p-12">
            <h2 className="sub-header mb-6">Practice Information</h2>
            <p className="text-dark-700 mb-8 text-lg max-w-2xl mx-auto">
              Established 2008. Optometry services available.
            </p>
            <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
              <Link href="/contact">Contact Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}