// app\(public)\book\page.tsx - ALIGNED VERSION
import { Suspense } from "react";
import { SimpleBookingForm } from "@/components/ui/forms/SimpleBookingForm";
import { getAllBranches } from "@/lib/actions/branch.actions";
import Image from "next/image";
import Link from "next/link";


export default async function BookPage() {
  // Fetch active branches for the booking form
  const branches = await getAllBranches();

  return (
    <div className="min-h-screen">
   
      <main className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-[5%]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Form */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <Link href="/">
                  <Image
                    src="/assets/icons/logo-icon.svg"
                    height={1000}
                    width={1000}
                    alt="Link Opticians"
                    className="mb-6 h-10 w-fit"
                  />
                </Link>
                <div className="mb-8 space-y-4">
                  <h1 className="header">Appointment Booking</h1>
                  <p className="text-dark-700">
                    Schedule an appointment for optometry services. 
                    We will contact you during business hours to confirm details.
                  </p>
                </div>
              </div>

              <Suspense fallback={<div className="py-8">Loading booking form...</div>}>
                <div className="bg-dark-400 border border-dark-500 rounded-xl p-6 md:p-8">
                  <SimpleBookingForm branches={branches} />
                </div>
              </Suspense>

              <div className="mt-6 p-4 bg-dark-300 rounded-lg">
                <p className="text-sm text-dark-600 mb-2">
                  <strong>Emergency Eye Care:</strong> For eye injuries, sudden vision loss, 
                  or severe eye pain, call our emergency line: <span className="text-green-500">+263 77 340 7464</span>
                </p>
                <p className="text-sm text-dark-600">
                  Your information is collected for appointment purposes. By booking, 
                  you acknowledge our <Link href="/contact" className="text-green-500 underline">Privacy Notice</Link>.
                </p>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-dark-500">
                <Image
                  src="/assets/images/appointment-img.png" 
                  height={800}
                  width={1200}
                  alt="Optometrist preparing for appointment"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-400/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-18-bold">Professional Eye Care</p>
                    <p className="text-sm opacity-90">Comprehensive eye examinations with modern equipment</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-dark-400 border border-dark-500 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-lg">👁️</span>
                    </div>
                    <div>
                      <p className="text-14-semibold">Digital Imaging</p>
                      <p className="text-12-regular text-dark-600">Advanced diagnostic equipment</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-dark-400 border border-dark-500 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-lg">🕒</span>
                    </div>
                    <div>
                      <p className="text-14-semibold">Flexible Hours</p>
                      <p className="text-12-regular text-dark-600">Weekday and Saturday appointments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    
    </div>
  );
}