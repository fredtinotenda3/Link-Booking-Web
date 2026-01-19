"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Appointment } from "@/types/appwite.types";
import { AppointmentForm } from "./ui/forms/Appointment";

export const AppointmentModal = ({
  patientId,
  appointment,
  type,
  description,
}: {
  patientId: string;
  appointment?: Appointment;
  type: "schedule" | "cancel";
  description: string;
}) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSuccess = () => {
    setOpen(false);
    window.location.reload();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={`capitalize ${type === "schedule" && "text-green-500"}`}
          disabled={isSubmitting}
        >
          {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">{type} Appointment</DialogTitle>
          <DialogDescription>
            {type === "schedule" 
              ? "Schedule this appointment and confirm with patient." 
              : "Cancel this appointment and notify patient."}
          </DialogDescription>
        </DialogHeader>

        <AppointmentForm
          patientId={patientId}
          type={type}
          appointment={appointment}
          setOpen={handleSuccess}
          setIsSubmitting={setIsSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
};