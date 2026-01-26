// app\(public)\booking\confirmation\page.tsx - COMPLIANT VERSION

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
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="header">Appointment Information Not Found</h1>
          <Link href="/book" className="text-green-500">
            Return to booking
          </Link>
        </div>
      </div>
    );
  }

  const appointment = await getAppointment(bookingId);
  const branch = await getBranchById(appointment.branchId);

  return (
    <div className="flex h-screen items-center justify-center px-[5%]">
      <div className="success-img max-w-2xl">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Link Opticians"
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center text-center">
          <Image
            src="/assets/gifs/success.gif"
            height={200}
            width={200}
            alt="Appointment submitted"
          />
          <h2 className="header mb-6">
            Appointment <span className="text-green-500">Request Submitted</span>
          </h2>
          <p className="text-dark-700 mb-8">
            Your appointment request has been received. We will contact you during business hours to confirm details.
          </p>
        </section>

        <section className="w-full space-y-6 rounded-lg border border-dark-500 p-6">
          <h3 className="sub-header">Appointment Information</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-dark-600">Date & Time Requested:</span>
              <span className="font-medium">
                {formatDateTime(appointment.schedule).dateTime}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-dark-600">Location:</span>
              <span className="font-medium">{branch?.name}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-dark-600">Status:</span>
              <span className="font-medium capitalize">
                {appointment.status === "schedule" ? "pending confirmation" : appointment.status}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-dark-600">Reference:</span>
              <span className="font-mono">{bookingId.slice(0, 8)}</span>
            </div>
          </div>
        </section>

        <div className="mt-6 p-4 bg-dark-300 rounded-lg">
          <p className="text-sm text-dark-600">
            <strong>Next Steps:</strong> We will contact you during business hours to confirm your appointment. For emergencies, call <span className="text-green-500">+263 77 340 7464</span>.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 mt-6">
          <Button asChild className="shad-primary-btn">
            <Link href="/">Return Home</Link>
          </Button>
          
          <Button asChild variant="outline" className="shad-gray-btn">
            <Link href="/book">Book Another Appointment</Link>
          </Button>
        </div>

        <p className="copyright mt-8">© 2026 Link Opticians</p>
      </div>
    </div>
  );
}