// app\(public)\locations\page.tsx - CORRECTED VERSION

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { BranchCard } from "@/components/BranchCard";
import { BRANCHES_DATA, MOBILE_UNIT_DATA, BRANCH_CATEGORIES } from "@/constants/branches";

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-400 to-dark-300 py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="header mb-6">
                Location <span className="text-green-500">Information</span>
              </h1>
              <p className="text-dark-700 text-lg mb-8">
                Clinic location information across Zimbabwe and mobile eye care unit services. 
                Established in 2008.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="shad-gray-btn" asChild>
                  <Link href="#mobile-unit">Mobile Unit Information</Link>
                </Button>
                <Button className="shad-gray-btn" asChild>
                  <Link href="/contact">Contact Information</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-dark-500">
                <Image
                  src="/assets/images/zimbabwe-map.png"
                  width={800}
                  height={600}
                  alt="Location information across Zimbabwe"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-400 to-transparent p-6">
                  <p className="text-white font-semibold">Serving since 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Information */}
      <section className="py-12 bg-dark-400">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <p className="text-32-bold text-green-500">5</p>
              <p className="text-dark-600 text-sm">Clinic locations</p>
            </div>
            <div className="text-center p-4">
              <p className="text-32-bold text-green-500">16+</p>
              <p className="text-dark-600 text-sm">Years of service</p>
            </div>
            <div className="text-center p-4">
              <p className="text-32-bold text-green-500">1</p>
              <p className="text-dark-600 text-sm">Mobile unit</p>
            </div>
            <div className="text-center p-4">
              <p className="text-32-bold text-green-500">Areas</p>
              <p className="text-dark-600 text-sm">Service areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Location Information */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="text-center mb-12">
            <h2 className="sub-header mb-4">Clinic Location Information</h2>
            <p className="text-dark-700 max-w-2xl mx-auto">
              Optometry services at clinic locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRANCHES_DATA.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Unit Information */}
      <section id="mobile-unit" className="py-16 bg-dark-300">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="sub-header mb-6">
                Mobile <span className="text-green-500">Eye Care</span> Information
              </h2>
              <p className="text-dark-700 mb-6">
                {MOBILE_UNIT_DATA.description}
              </p>
              
              <div className="mb-8">
                <h3 className="text-16-semibold mb-4">Services Information:</h3>
                <ul className="space-y-3">
                  {MOBILE_UNIT_DATA.services.map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="size-2 bg-green-500 rounded-full"></div>
                      <span className="text-dark-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-16-semibold mb-4">Service Areas:</h3>
                <div className="flex flex-wrap gap-2">
                  {MOBILE_UNIT_DATA.coverage.map((area, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-dark-400 rounded-full text-sm text-dark-600"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-dark-700">
                  <strong>Schedule Information:</strong> {MOBILE_UNIT_DATA.schedule}
                </p>
                <p className="text-dark-700">
                  <strong>Contact Information:</strong> {MOBILE_UNIT_DATA.contact}
                </p>
                <Button className="shad-gray-btn" asChild>
                  <Link href="/contact?subject=mobile-unit">
                    Mobile Unit Information
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden border border-dark-500">
                <Image
                  src={MOBILE_UNIT_DATA.image}
                  width={600}
                  height={500}
                  alt="Mobile eye care unit service"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-400/80 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white font-semibold">Community eye care services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Comparison Information */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <h2 className="sub-header text-center mb-12">Location Information</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-dark-400">
                  <th className="text-left p-4 border border-dark-500">Location</th>
                  <th className="text-left p-4 border border-dark-500">Services Information</th>
                  <th className="text-left p-4 border border-dark-500">Service Information</th>
                  <th className="text-left p-4 border border-dark-500">Hours</th>
                  <th className="text-left p-4 border border-dark-500">Parking Information</th>
                </tr>
              </thead>
              <tbody>
                {BRANCHES_DATA.map((branch) => (
                  <tr key={branch.id} className="hover:bg-dark-400/50">
                    <td className="p-4 border border-dark-500">
                      <div className="font-semibold">{branch.name}</div>
                      <div className="text-sm text-dark-600">{branch.address}</div>
                    </td>
                    <td className="p-4 border border-dark-500">
                      <div className="space-y-1">
                        {branch.specialties.slice(0, 2).map((spec, idx) => (
                          <div key={idx} className="text-sm">{spec}</div>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 border border-dark-500">
                      <div className="space-y-1">
                        {branch.services.slice(0, 2).map((service, idx) => (
                          <div key={idx} className="text-sm text-dark-600">{service}</div>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 border border-dark-500">
                      <div className="text-sm">{branch.operatingHours.weekdays}</div>
                      <div className="text-xs text-dark-600">Sat: {branch.operatingHours.saturday}</div>
                    </td>
                    <td className="p-4 border border-dark-500">
                      <div className="text-sm">{branch.parking.split(',')[0]}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-[5%] text-center">
          <div className="bg-dark-400 border border-dark-500 rounded-2xl p-12">
            <h2 className="sub-header mb-6">Location Information</h2>
            <p className="text-dark-700 mb-8 text-lg max-w-2xl mx-auto">
              Location information and contact details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                <Link href="/contact">Contact Information</Link>
              </Button>
              <Button className="shad-gray-btn px-8 py-6 text-lg" asChild>
                <Link href="/book">Appointment Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}