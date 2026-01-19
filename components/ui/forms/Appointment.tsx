"use client";

import {
  createAppointment,
  updateAppointment,
} from "@/lib/actions/appointment.actions";
import { getAppointmentSchema } from "@/lib/validation";
import { Status } from "@/types";
import { Appointment } from "@/types/appwite.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../form";
import CustomFormField from "../CustomFormField";
import { Doctors } from "@/constants";
import { FormFieldType } from "./PatientForm";
import { SelectItem } from "../select";
import Image from "next/image";
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const AppointmentForm = ({
  patientId,
  type,
  appointment,
  setOpen,
  setIsSubmitting,
  branches = [],
}: {
  patientId: string;
  type: "create" | "schedule" | "cancel";
  appointment?: Appointment;
  setOpen?: () => void;
  setIsSubmitting?: Dispatch<SetStateAction<boolean>>;
  branches?: any[];
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const AppointmentFormValidation = getAppointmentSchema(type);

  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      primaryPhysician: appointment ? appointment?.primaryPhysician : "",
      schedule: appointment
        ? new Date(appointment?.schedule)
        : new Date(Date.now()),
      reason: appointment ? appointment.reason : "",
      note: appointment?.note || "",
      cancellationReason: appointment?.cancellationReason || "",
      branchId: appointment?.branchId || "",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof AppointmentFormValidation>
  ) => {
    setIsLoading(true);
    if (setIsSubmitting) setIsSubmitting(true);

    let status: Status;
    switch (type) {
      case "schedule":
        status = "schedule"; 
        break;
      case "cancel":
        status = "cancelled";
        break;
      default:
        status = "pending";
    }

    try {
      if (type === "create" && patientId) {
        const appointmentData = {
          userId: "",
          patient: patientId,
          primaryPhysician: values.primaryPhysician,
          schedule: new Date(values.schedule),
          reason: values.reason!,
          status: status,
          note: values.note,
          branchId: values.branchId,
        };

        const newAppointment = await createAppointment(appointmentData);

        if (newAppointment) {
          form.reset();
          if (setOpen) setOpen();
          router.push(
            `/patients/${patientId}/new-appointment/success?appointmentId=${newAppointment.$id}`
          );
        }
      } else {
        const appointmentToUpdate = {
          appointmentId: appointment?.$id!,
          appointment: {
            primaryPhysician: values.primaryPhysician || appointment?.primaryPhysician || "",
            schedule: new Date(values.schedule),
            status: status,
            cancellationReason: values.cancellationReason,
            branchId: appointment?.branchId || values.branchId || "",
          },
          type,
        };

        const updatedAppointment = await updateAppointment(appointmentToUpdate);

        if (updatedAppointment) {
          form.reset();
          if (setOpen) {
            setOpen();
          }
          toast(
            type === "schedule" 
              ? "Appointment scheduled." 
              : "Appointment cancelled."
          );
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast(
        `Appointment ${type} was not completed.`
      );
    } finally {
      setIsLoading(false);
      if (setIsSubmitting) setIsSubmitting(false);
    }
  };

  let buttonLabel;
  switch (type) {
    case "cancel":
      buttonLabel = "Cancel Appointment";
      break;
    case "schedule":
      buttonLabel = "Schedule Appointment";
      break;
    default:
      buttonLabel = "Submit Appointment";
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        {type === "create" && (
          <section className="mb-12 space-y-4">
            <h1 className="header">New Appointment</h1>
            <p className="text-dark-700">
              Schedule a new appointment.
            </p>
          </section>
        )}

        {type !== "cancel" && (
          <>
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="branchId"
              label="Clinic Location"
              placeholder="Select clinic location"
            >
              {branches.map((branch) => (
                <SelectItem key={branch.$id} value={branch.$id}>
                  {branch.name} - {branch.address}
                </SelectItem>
              ))}
            </CustomFormField>
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="primaryPhysician"
              label="Doctor"
              placeholder="Select doctor"
            >
              {Doctors.map((doctor, i) => (
                <SelectItem key={doctor.name + i} value={doctor.name}>
                  <div className="flex cursor-pointer items-center gap-2">
                    <Image
                      src={doctor.image}
                      width={32}
                      height={32}
                      alt="doctor"
                      className="rounded-full border border-dark-500"
                    />
                    <p>{doctor.name}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="schedule"
              label="Appointment Date"
              showTimeSelect
              dateFormat="MM/dd/yyyy  -  h:mm aa"
            />

            <div
              className={`flex flex-col gap-6  ${
                type === "create" && "xl:flex-row"
              }`}
            >
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="reason"
                label="Reason for Appointment"
                placeholder="Annual eye examination"
                disabled={type === "schedule"}
              />

              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="note"
                label="Additional Information"
                placeholder="Appointment preferences"
                disabled={type === "schedule"}
              />
            </div>
          </>
        )}

        {type === "cancel" && (
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="cancellationReason"
            label="Cancellation Reason"
            placeholder="Reason for cancelling appointment"
          />
        )}

        <SubmitButton
          isLoading={isLoading}
          className={`${
            type === "cancel" ? "shad-danger-btn" : "shad-primary-btn"
          } w-full`}
        >
          {buttonLabel}
        </SubmitButton>
      </form>
    </Form>
  );
};