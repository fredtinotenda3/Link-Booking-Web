// components\ui\forms\SimpleBookingForm.tsx - CORRECTED VERSION

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import { FormFieldType } from "./PatientForm";
import { SimpleBookingSchema } from "@/lib/validation";
import SubmitButton from "@/components/SubmitButton";
import { createSimpleAppointment } from "@/lib/actions/booking.actions";
import { Branch } from "@/types";
import { SelectItem } from "../select";

interface SimpleBookingFormProps {
  branches: Branch[];
}

export const SimpleBookingForm = ({ branches }: SimpleBookingFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof SimpleBookingSchema>>({
    resolver: zodResolver(SimpleBookingSchema),
    defaultValues: {
      branchId: "",
      schedule: new Date(),
      patientName: "",
      patientEmail: "",
      patientPhone: "",
      reason: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SimpleBookingSchema>) => {
    setIsLoading(true);

    try {
      const result = await createSimpleAppointment(values);
      
      if (result?.success) {
        router.push(`/booking/confirmation?bookingId=${result.bookingId}`);
      }
    } catch (error) {
      console.error("Appointment booking failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Branch Selection */}
        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="branchId"
          label="Select Clinic Location"
          placeholder="Select a clinic location"
        >
          {branches.map((branch) => (
            <SelectItem key={branch.$id} value={branch.$id!}>
              {branch.name} - {branch.address}
            </SelectItem>
          ))}
        </CustomFormField>

        {/* Date & Time */}
        <CustomFormField
          fieldType={FormFieldType.DATE_PICKER}
          control={form.control}
          name="schedule"
          label="Preferred Date & Time"
          showTimeSelect
          dateFormat="MM/dd/yyyy - h:mm aa"
        />

        {/* Patient Information */}
        <div className="space-y-4">
          <h3 className="text-16-semibold">Patient Information</h3>
          
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="patientName"
            label="Full Name"
            placeholder="Enter your full name"
            iconSrc="/assets/icons/user.svg"
          />

          <div className="flex flex-col gap-6 md:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="patientEmail"
              label="Email Address"
              placeholder="Enter email address"
              iconSrc="/assets/icons/email.svg"
            />

            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="patientPhone"
              label="Phone Number"
              placeholder="Enter phone number"
            />
          </div>

          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="reason"
            label="Reason for Appointment"
            placeholder="Describe reason for appointment (optional)"
          />
        </div>

        <div className="p-4 bg-dark-300 rounded-lg">
          <p className="text-sm text-dark-600 mb-2">
            <strong>Privacy Note:</strong> Your information is collected for appointment purposes only.
          </p>
          <p className="text-sm text-dark-600">
            Appointment confirmations will be sent via SMS or email.
          </p>
        </div>

        <SubmitButton isLoading={isLoading}>
          Submit Appointment Request
        </SubmitButton>

        <p className="text-12-regular text-dark-600 text-center">
          We will contact you to confirm your appointment details.
        </p>
      </form>
    </Form>
  );
};