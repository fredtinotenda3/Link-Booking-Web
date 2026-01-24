// app\(public)\locations\[branchId]\page.tsx - CORRECTED VERSION

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { BRANCHES_DATA } from "@/constants/branches";

interface BranchPageProps {
  params: Promise<{
    branchId: string;
  }>;
}

export default async function BranchDetailPage({ params }: BranchPageProps) {
  const { branchId } = await params;
  const branch = BRANCHES_DATA.find(b => b.id === branchId);

  if (!branch) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-dark-400 to-dark-300">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  branch.type === 'clinic' 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'bg-blue-500/20 text-blue-500'
                }`}>
                  {branch.type === 'clinic' ? 'Clinic' : 'Mobile Unit'}
                </span>
              </div>
              <h1 className="header mb-6">{branch.name}</h1>
              <p className="text-dark-700 text-lg mb-8">{branch.address}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-dark-400 rounded">
                    <Image
                      src="/assets/icons/phone.svg"
                      width={20}
                      height={20}
                      alt="Phone"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-dark-600">Phone</p>
                    <p className="font-semibold">{branch.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-dark-400 rounded">
                    <Image
                      src="/assets/icons/email.svg"
                      width={20}
                      height={20}
                      alt="Email"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-dark-600">Email</p>
                    <p className="font-semibold">{branch.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button className="shad-primary-btn" asChild>
                  <Link href={`/book?branch=${branch.id}`}>
                    Appointment Information
                  </Link>
                </Button>
                <Button className="shad-gray-btn" asChild>
                  <Link href={`tel:${branch.phone.replace(/\D/g, "")}`}>
                    Contact Information
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-dark-500">
                <Image
                  src={branch.image}
                  width={800}
                  height={600}
                  alt={`${branch.name} location`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-[5%] py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Operating Hours */}
            <section>
              <h2 className="text-24-bold mb-6">Operating Hours</h2>
              <div className="bg-dark-400 border border-dark-500 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-16-semibold mb-3">Hours Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-dark-600">Monday - Friday</span>
                        <span className="font-semibold">{branch.operatingHours.weekdays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-dark-600">Saturday</span>
                        <span className="font-semibold">{branch.operatingHours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-dark-600">Sunday</span>
                        <span className="font-semibold">{branch.operatingHours.sunday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-dark-600">Public Holidays</span>
                        <span className="font-semibold">{branch.operatingHours.publicHolidays}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-16-semibold mb-3">Emergency Services</h3>
                    <p className="text-dark-600 mb-4">
                      For eye emergencies outside operating hours, contact emergency services:
                    </p>
                    <Button className="shad-gray-btn w-full" asChild>
                      <Link href="tel:+263773407464">
                        Emergency: +263 77 340 7464
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Services Information */}
            <section>
              <h2 className="text-24-bold mb-6">Services Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-18-bold mb-4">Services Information</h3>
                  <ul className="space-y-3">
                    {branch.services.map((service, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="size-2 bg-green-500 rounded-full"></div>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-18-bold mb-4">Service Information</h3>
                  <div className="flex flex-wrap gap-3">
                    {branch.specialties.map((specialty, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-dark-300 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Facilities Information */}
            <section>
              <h2 className="text-24-bold mb-6">Facilities Information</h2>
              <div className="bg-dark-400 border border-dark-500 rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-16-semibold mb-3">Facilities Information</h3>
                    <ul className="space-y-2">
                      {branch.facilities.map((facility, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Image
                            src="/assets/icons/check-circle.svg"
                            width={16}
                            height={16}
                            alt="Available"
                          />
                          <span className="text-dark-600">{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-16-semibold mb-3">Accessibility Information</h3>
                    <ul className="space-y-2">
                      {branch.accessibility.map((access, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Image
                            src="/assets/icons/accessibility.svg"
                            width={16}
                            height={16}
                            alt="Accessible"
                          />
                          <span className="text-dark-600">{access}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <h3 className="text-16-semibold mb-2">Parking Information</h3>
                      <p className="text-dark-600">{branch.parking}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Practitioner Information */}
            <div className="bg-dark-400 border border-dark-500 rounded-xl p-6">
              <h3 className="text-18-bold mb-4">Practitioner Information</h3>
              <div className="space-y-4">
                {branch.doctors.map((doctor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="size-10 bg-dark-300 rounded-full flex items-center justify-center">
                      <Image
                        src="/assets/icons/doctor.svg"
                        width={20}
                        height={20}
                        alt="Practitioner"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{doctor}</p>
                      <p className="text-sm text-dark-600">Optometrist</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Information */}
            <div className="bg-dark-400 border border-dark-500 rounded-xl p-6">
              <h3 className="text-18-bold mb-4">Location Information</h3>
              <div className="space-y-3">
                <Button className="shad-primary-btn w-full" asChild>
                  <Link href={`/book?branch=${branch.id}`}>
                    Appointment Information
                  </Link>
                </Button>
                <Button className="shad-gray-btn w-full" asChild>
                  <Link href={branch.mapUrl} target="_blank">
                    Get Directions
                  </Link>
                </Button>
                <Button className="shad-gray-btn w-full" asChild>
                  <Link href={`tel:${branch.phone.replace(/\D/g, "")}`}>
                    Contact Information
                  </Link>
                </Button>
              </div>
            </div>

            {/* Location Notes */}
            {branch.notes && (
              <div className="bg-dark-300 border border-dark-500 rounded-xl p-6">
                <h3 className="text-16-semibold mb-3">Location Information</h3>
                <p className="text-dark-600">{branch.notes}</p>
              </div>
            )}

            {/* Other Locations */}
            <div className="bg-dark-400 border border-dark-500 rounded-xl p-6">
              <h3 className="text-18-bold mb-4">Other Locations</h3>
              <div className="space-y-3">
                {BRANCHES_DATA
                  .filter(b => b.id !== branch.id)
                  .slice(0, 2)
                  .map(otherBranch => (
                    <Link 
                      key={otherBranch.id}
                      href={`/locations/${otherBranch.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-dark-300 transition"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate">{otherBranch.name}</p>
                        <p className="text-sm text-dark-600 truncate">{otherBranch.address}</p>
                      </div>
                      <Image
                        src="/assets/icons/chevron-right.svg"
                        width={16}
                        height={16}
                        alt="View location"
                      />
                    </Link>
                  ))}
                <Button className="shad-gray-btn w-full mt-2" asChild>
                  <Link href="/locations">
                    View All Locations
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}