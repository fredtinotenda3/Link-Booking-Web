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
  // Already enhances data correctly - no changes needed
    const enhancedAppointments = {
      ...appointments,
      documents: appointments.documents.map((appt: any) => ({
        ...appt,
        branchName: branchMap[appt.branchId] || appt.branchId
      }))
    };  

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
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