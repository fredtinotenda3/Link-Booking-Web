import { Suspense } from "react";
import { SimpleBookingForm } from "@/components/ui/forms/SimpleBookingForm";
import { getAllBranches } from "@/lib/actions/branch.actions";
import Image from "next/image";
import Link from "next/link";

export default async function BookPage() {
  // Fetch active branches for the booking form
  const branches = await getAllBranches();

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Link href="/">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="CarePulse"
              className="mb-12 h-10 w-fit"
            />
          </Link>

          <div className="mb-12 space-y-4">
            <h1 className="header">Book an Appointment</h1>
            <p className="text-dark-700">
              Schedule your appointment in just a few clicks
            </p>
          </div>

          <Suspense fallback={<div>Loading booking form...</div>}>
            <SimpleBookingForm branches={branches} />
          </Suspense>

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2026 LinkOpticians
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png" 
        height={1000}
        width={1000}
        alt="Book appointment"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}