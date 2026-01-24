import Link from "next/link";
import React from "react";
import Image from "next/image";
import StatCard from "@/components/StatCard";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
import { getAllBranches } from "@/lib/actions/branch.actions";
import { DataTable } from "./table/DataTable";
import { columns } from "./table/columns";

const Admin = async () => {
  const appointments = await getRecentAppointmentList();
  const branches = await getAllBranches();
  
  // Create a map of branchId -> branch name for quick lookup
  const branchMap = branches.reduce((acc: any, branch: any) => {
    acc[branch.$id] = branch.name;
    return acc;
  }, {});

  // Enhance appointment data with branch names
  const enhancedAppointments = {
    ...appointments,
    documents: appointments.documents.map((appt: any) => ({
      ...appt,
      branchName: branchMap[appt.branchId] || appt.branchId
    }))
  };  

  return (
    <div className="min-h-screen bg-dark-300">
      {/* Admin Header - Updated to match public site style */}
      <header className="sticky top-0 z-50 bg-dark-400 border-b border-dark-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-[5%] py-4">
          <Link href="/">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="Link Opticians"
              className="h-8 w-fit"
            />
          </Link>
          
          <div className="flex items-center gap-4">
            <p className="text-16-semibold text-green-500">Admin Dashboard</p>
            <Link 
              href="/" 
              className="text-14-medium hover:text-green-500 transition"
            >
              View Public Site
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-[5%] py-8">
        <section className="w-full space-y-4 mb-8">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat mb-8">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={enhancedAppointments.documents} />
      </main>
    </div>
  );
};

export default Admin;