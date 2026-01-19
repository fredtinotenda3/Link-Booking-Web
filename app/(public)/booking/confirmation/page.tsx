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
          <h1 className="header">Booking Not Found</h1>
          <Link href="/book" className="text-green-500">
            Go back to booking
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
            alt="CarePulse"
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center text-center">
          <Image
            src="/assets/gifs/success.gif"
            height={200}
            width={200}
            alt="Success"
          />
          <h2 className="header mb-6">
            Appointment <span className="text-green-500">Booked!</span>
          </h2>
          <p className="text-dark-700 mb-8">
            We&apos;ve received your booking request and will confirm shortly.
          </p>
        </section>

        <section className="w-full space-y-6 rounded-lg border border-dark-500 p-6">
          <h3 className="sub-header">Booking Details</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-dark-600">Date & Time:</span>
              <span className="font-medium">
                {formatDateTime(appointment.schedule).dateTime}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-dark-600">Location:</span>
              <span className="font-medium">{branch?.name}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-dark-600">Reference:</span>
              <span className="font-mono">{bookingId.slice(0, 8)}</span>
            </div>
          </div>
        </section>

        <div className="flex w-full flex-col gap-4">
          <Button asChild className="shad-primary-btn">
            <Link href="/">Return Home</Link>
          </Button>
          
          <Button asChild variant="outline" className="shad-gray-btn">
            <Link href="/book">Book Another</Link>
          </Button>
        </div>

        <p className="copyright mt-8">© 2024 CarePulse</p>
      </div>
    </div>
  );
}