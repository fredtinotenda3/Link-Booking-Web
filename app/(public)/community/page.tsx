import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProgramCard } from "@/components/ProgramCard";
import { 
  COMMUNITY_PROGRAMS, 
  MOBILE_UNIT_DETAILS, 
  SCHOOL_PROGRAMS,
  CORPORATE_PARTNERS,
  COMMUNITY_STATS 
} from "@/constants/community";

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section aria-labelledby="community-hero" className="bg-gradient-to-b from-dark-400 to-dark-300 py-16">
          <div className="mx-auto max-w-7xl px-[5%] text-center">
            <h1 id="community-hero" className="header mb-6">
              Community <span className="text-green-500">Services</span>
            </h1>
            <p className="text-dark-700 text-lg max-w-3xl mx-auto mb-8">
              Information about community eye health services available through our practice. We have been operating since 2008.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="shad-gray-btn" asChild>
                <Link href="#mobile-unit">Mobile Unit Details</Link>
              </Button>
              <Button className="shad-gray-btn" asChild>
                <Link href="/contact?subject=community">Contact for More Information</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Community Services Information */}
        <section aria-label="Community services information" className="py-12 bg-green-600/10">
          <div className="mx-auto max-w-7xl px-[5%]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {COMMUNITY_STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-32-bold text-green-500 mb-2">{stat.value}</p>
                  <p className="text-dark-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Programs Information */}
        <section aria-labelledby="programs-heading" className="py-16">
          <div className="mx-auto max-w-7xl px-[5%]">
            <header className="text-center mb-12">
              <h2 id="programs-heading" className="sub-header mb-4">Available Community Services</h2>
              <p className="text-dark-700 max-w-2xl mx-auto">
                Information about eye health services for schools, senior citizens, and community groups
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {COMMUNITY_PROGRAMS.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Unit Information */}
        <section id="mobile-unit" aria-labelledby="mobile-unit-heading" className="py-16 bg-dark-300">
          <div className="mx-auto max-w-7xl px-[5%]">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 id="mobile-unit-heading" className="sub-header mb-6">
                  Mobile <span className="text-green-500">Eye Care</span> Unit
                </h2>
                <p className="text-dark-700 mb-6">
                  {MOBILE_UNIT_DETAILS.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-16-semibold mb-4">Available Equipment</h3>
                    <ul className="space-y-2" role="list">
                      {MOBILE_UNIT_DETAILS.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Image src="/assets/icons/check.svg" width={16} height={16} alt="" />
                          <span className="text-dark-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-16-semibold mb-4">Areas of Operation</h3>
                    <div className="flex flex-wrap gap-2">
                      {MOBILE_UNIT_DETAILS.coverage.map((area, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-dark-400 rounded-full text-sm text-dark-600"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-16-semibold mb-2">Typical Schedule</h3>
                    <ul className="space-y-2" role="list">
                      {MOBILE_UNIT_DETAILS.schedule.map((item, index) => (
                        <li key={index} className="text-dark-600">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-dark-400 rounded-lg">
                    <p className="font-semibold mb-2">Mobile Unit Contact:</p>
                    <p className="text-dark-600">{MOBILE_UNIT_DETAILS.booking}</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden border border-dark-500">
                  <Image
                    src="/assets/images/community/mobile-unit-action.png"
                    width={600}
                    height={500}
                    alt="Mobile eye care unit providing services"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* School Services Information */}
        <section aria-labelledby="schools-heading" className="py-16">
          <div className="mx-auto max-w-7xl px-[5%]">
            <header className="text-center mb-12">
              <h2 id="schools-heading" className="sub-header mb-4">School Eye Health Services</h2>
              <p className="text-dark-700 max-w-2xl mx-auto">
                Information about vision screening and eye health services in schools
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {SCHOOL_PROGRAMS.map((program) => (
                <article key={program.id} className="bg-dark-400 border border-dark-500 rounded-xl p-6">
                  <h3 className="text-18-bold mb-3">{program.school}</h3>
                  <p className="text-dark-600 mb-4">{program.location} • {program.students} students</p>
                  
                  <div className="mb-6">
                    <h4 className="text-14-semibold text-dark-700 mb-2">Services Available:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.services.map((service, idx) => (
                        <span key={idx} className="px-3 py-1 bg-dark-300 rounded text-sm">{service}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-14-semibold text-dark-700 mb-2">Service Details:</h4>
                    <ul className="space-y-1">
                      {program.findings.map((finding, idx) => (
                        <li key={idx} className="text-dark-600">• {finding}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center">
              <Button className="shad-gray-btn" asChild>
                <Link href="/contact?subject=school-program">
                  Contact for School Program Information
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Corporate Services Information */}
        <section aria-labelledby="partners-heading" className="py-16 bg-dark-300">
          <div className="mx-auto max-w-7xl px-[5%]">
            <header className="text-center mb-12">
              <h2 id="partners-heading" className="sub-header mb-4">Corporate Eye Health Services</h2>
              <p className="text-dark-700 max-w-2xl mx-auto">
                Information about workplace eye health services
              </p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CORPORATE_PARTNERS.map((partner) => (
                <article key={partner.id} className="bg-dark-400 border border-dark-500 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-18-bold mb-2">{partner.name}</h3>
                      <p className="text-dark-600 mb-3">{partner.industry} • {partner.employees} employees</p>
                      <div className="p-3 bg-dark-300 rounded-lg">
                        <p className="text-sm font-semibold mb-1">Services Provided:</p>
                        <p className="text-sm text-dark-600">{partner.program}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section aria-labelledby="partner-cta" className="py-16">
          <div className="mx-auto max-w-4xl px-[5%] text-center">
            <article className="bg-dark-400 border border-dark-500 rounded-2xl p-12">
              <header className="mb-8">
                <h2 id="partner-cta" className="sub-header mb-6">Community Services Information</h2>
                <p className="text-dark-700 mb-8 text-lg max-w-2xl mx-auto">
                  Information about community eye health services is available upon request.
                </p>
              </header>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                  <Link href="/contact?subject=community-partnership">
                    Contact for Community Services
                  </Link>
                </Button>
                <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                  <Link href="/contact?subject=mobile-unit">
                    Contact for Mobile Unit Information
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}