"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { Appointment } from "@/types/appwite.types";
import { StatusBadge } from "@/components/StatusBadge";
import { AppointmentModal } from "@/components/AppointmentModal";

// Define an enhanced type that includes branchName
type EnhancedAppointment = Appointment & {
  branchName?: string;
};

export const columns: ColumnDef<EnhancedAppointment>[] = [
  {
    header: "#",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "Patient",
    cell: ({ row }) => {
      const appointment = row.original;
      return <p className="text-14-medium ">{appointment.patient.name}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <div className="min-w-[115px]">
          <StatusBadge status={appointment.status} />
        </div>
      );
    },
  },
  {
    accessorKey: "schedule",
    header: "Appointment",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <p className="text-14-regular min-w-[100px]">
          {formatDateTime(appointment.schedule).dateTime}
        </p>
      );
    },
  },
  {
    accessorKey: "branchName",
    header: "Branch",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <p className="text-14-regular">
          {appointment.branchName || appointment.branchId || "No branch"}
        </p>
      );
    },
  },
  {
    accessorKey: "primaryPhysician",
    header: "Doctor",
    cell: ({ row }) => {
      const appointment = row.original;

      const doctor = Doctors.find(
        (doctor) => doctor.name === appointment.primaryPhysician
      );

      return (
        <div className="flex items-center gap-3">
          <Image
            src={doctor?.image || "/assets/images/default-doctor.png"}
            alt="doctor"
            width={100}
            height={100}
            className="size-8 rounded-full border border-dark-500"
          />
          <p className="whitespace-nowrap">
            {doctor ? `Dr. ${doctor.name}` : "Not assigned"}
          </p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      const appointment = row.original;

      // Only show schedule button if status is pending
      // Only show cancel button if status is schedule (scheduled)
      return (
        <div className="flex gap-1">
          {appointment.status === "pending" && (
            <AppointmentModal
              patientId={appointment.patient.$id}
              appointment={appointment}
              type="schedule"
              description="Please confirm the following details to schedule."
            />
          )}
          {appointment.status === "schedule" && (
            <AppointmentModal
              patientId={appointment.patient.$id}
              appointment={appointment}
              type="cancel"
              description="Are you sure you want to cancel your appointment?"
            />
          )}
          {(appointment.status === "cancelled" || appointment.status === "pending") && (
            <span className="text-14-regular text-dark-600 px-4 py-2">
              No actions available
            </span>
          )}
        </div>
      );
    },
  },
];