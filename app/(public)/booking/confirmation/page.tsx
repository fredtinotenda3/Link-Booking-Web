// app\(public)\booking\confirmation\page.tsx - ALIGNED VERSION
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { getBranchById } from "@/lib/actions/branch.actions";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";


export default async function BookingConfirmation({
  searchParams,
}: SearchParamProps) {
  // Await the searchParams promise first
  const params = await searchParams;
  const bookingId = params?.bookingId as string;
  
  if (!bookingId) {
    return (
      <div className="min-h-screen">
        <main className="flex h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="header mb-4">Appointment Information Not Found</h1>
            <p className="text-dark-700 mb-6">The booking reference could not be found.</p>
            <Link href="/book" className="text-green-500 hover:underline">
              Return to booking page
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const appointment = await getAppointment(bookingId);
  const branch = await getBranchById(appointment.branchId);

  return (
    <div className="min-h-screen">
      <main className="py-8 md:py-16">
        <div className="mx-auto max-w-4xl px-[5%]">
          {/* Header with Logo */}
          <div className="mb-8 text-center">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="Link Opticians"
                className="h-10 w-fit mx-auto mb-6"
              />
            </Link>
            <h1 className="header mb-4">
              Appointment <span className="text-green-500">Request Submitted</span>
            </h1>
            <p className="text-dark-700">
              Your appointment request has been received. We will contact you during business hours to confirm details.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Success Message */}
            <div className="lg:w-2/3">
              <div className="bg-dark-400 border border-dark-500 rounded-xl p-6 md:p-8 mb-6">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="mb-6">
                    <div className="size-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-4xl"> 
                        <Image
                        src="/assets/gifs/success.gif"
                        height={180}
                        width={180}
                        alt="Appointment submitted"
                        className="mx-auto"
                      /></span>
                    </div>
                  </div>
                  <h2 className="text-24-bold mb-4">Thank You for Your Request</h2>
                  <p className="text-dark-700 mb-4">
                    We have received your appointment request for <span className="font-semibold">{branch?.name}</span>.
                  </p>
                  <p className="text-dark-600">
                    Our team will contact you at the phone number provided to confirm your appointment time 
                    and answer any questions you may have.
                  </p>
                </div>

                {/* Appointment Details Card */}
                <div className="bg-dark-300 border border-dark-500 rounded-lg p-6 mb-6">
                  <h3 className="text-18-bold mb-6 pb-4 border-b border-dark-500">Appointment Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between">
                      <span className="text-dark-600">Date & Time Requested:</span>
                      <span className="font-medium text-right">
                        {formatDateTime(appointment.schedule).dateTime}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between">
                      <span className="text-dark-600">Location:</span>
                      <span className="font-medium text-right">{branch?.name}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between">
                      <span className="text-dark-600">Address:</span>
                      <span className="font-medium text-right">{branch?.address}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between">
                      <span className="text-dark-600">Status:</span>
                      <span className="font-medium capitalize text-right">
                        {appointment.status === "schedule" ? "Pending confirmation" : appointment.status}
                      </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-between">
                      <span className="text-dark-600">Reference:</span>
                      <span className="font-mono font-medium text-right">{bookingId.slice(0, 8)}</span>
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <h4 className="text-16-semibold mb-2 text-green-500">Next Steps:</h4>
                  <ul className="space-y-2 text-sm text-dark-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 bg-dark-600 rounded-full"></span>
                      <span>We will call you within 24 business hours to confirm your appointment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 bg-dark-600 rounded-full"></span>
                      <span>Please have your medical aid information available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 bg-dark-600 rounded-full"></span>
                      <span>Arrive 10 minutes before your appointment time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Actions & Info */}
            <div className="lg:w-1/3">
              {/* Action Buttons */}
              <div className="bg-dark-400 border border-dark-500 rounded-xl p-6 mb-6">
                <h3 className="text-18-bold mb-4">What Would You Like to Do?</h3>
                <div className="space-y-4">
                  <Button asChild className="shad-primary-btn w-full">
                    <Link href="/">Return Home</Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="shad-gray-btn w-full">
                    <Link href="/book">Book Another Appointment</Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="shad-gray-btn w-full">
                    <Link href="/contact">Contact Our Clinics</Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="shad-gray-btn w-full">
                    <Link href="/locations">View All Locations</Link>
                  </Button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-dark-400 border border-dark-500 rounded-xl p-6 mb-6">
                <h3 className="text-18-bold mb-4">Need Help?</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-14-semibold mb-1">Clinic Phone:</p>
                    <p className="text-dark-600">+263 242 700 000</p>
                  </div>
                  
                  <div>
                    <p className="text-14-semibold mb-1">Emergency Contact:</p>
                    <p className="text-dark-600">+263 77 340 7464</p>
                  </div>
                  
                  <div>
                    <p className="text-14-semibold mb-1">Email:</p>
                    <p className="text-dark-600">appointments@linkopticians.co.zw</p>
                  </div>
                </div>
              </div>

              {/* Branch Info */}
              {branch && (
                <div className="bg-dark-400 border border-dark-500 rounded-xl p-6">
                  <h3 className="text-18-bold mb-4">Selected Clinic</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-dark-300 rounded">
                        <span>📍</span>
                      </div>
                      <div>
                        <p className="font-semibold">{branch.name}</p>
                        <p className="text-sm text-dark-600">{branch.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-dark-300 rounded">
                        <span>📞</span>
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-sm text-dark-600">{branch.phone}</p>
                      </div>
                    </div>
                    
                    <Button asChild className="shad-gray-btn w-full mt-4">
                      <Link href={`/locations/${branch.$id}`}>View Location Details</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-8 border-t border-dark-500 text-center">
            <p className="text-sm text-dark-600">
              For changes to your appointment, please contact us directly. 
              Appointment confirmations are subject to availability.
            </p>
          </div>
        </div>
      </main>
   
    </div>
  );
}