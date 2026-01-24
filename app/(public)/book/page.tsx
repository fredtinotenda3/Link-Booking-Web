// app\(public)\book\page.tsx - CORRECTED VERSION

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
              alt="Link Opticians"
              className="mb-12 h-10 w-fit"
            />
          </Link>

          <div className="mb-12 space-y-4">
            <h1 className="header">Appointment Booking</h1>
            <p className="text-dark-700">
              Schedule an appointment for optometry services
            </p>
          </div>

          <Suspense fallback={<div>Loading booking form...</div>}>
            <SimpleBookingForm branches={branches} />
          </Suspense>

          <div className="mt-8 p-4 bg-dark-300 rounded-lg">
            <p className="text-sm text-dark-600 mb-2">
              <strong>Emergency Eye Care:</strong> For eye injuries, sudden vision loss, or severe eye pain, call our emergency line: <span className="text-green-500">+263 77 340 7464</span>
            </p>
            <p className="text-sm text-dark-600">
              By booking an appointment, you agree to our <Link href="/contact" className="text-green-500 underline">Privacy Policy</Link> and <Link href="/contact" className="text-green-500 underline">Terms of Service</Link>.
            </p>
          </div>

          <div className="text-14-regular mt-12 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Link Opticians
            </p>
            <Link href="/?admin=true" className="text-dark-600 hover:text-green-500 transition">
              Admin Access
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png" 
        height={1000}
        width={1000}
        alt="Optometrist preparing for appointment"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}