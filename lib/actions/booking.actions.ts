"use server";

import { ID, Query } from "node-appwrite";
import { parseStringify } from "../utils";
import { databases, users } from "../appwrite.config";
import { DATABASE_ID, APPOINTMENT_COLLECTION_ID, PATIENT_COLLECTION_ID } from "../appwrite.config";
import { revalidatePath } from "next/cache";
import { sendSMSNotification } from "./appointment.actions";
import { formatDateTime } from "../utils";

interface CreateSimpleAppointmentParams {
  branchId: string;
  schedule: Date;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  reason?: string;
}

export const createSimpleAppointment = async (
  params: CreateSimpleAppointmentParams
) => {
  try {
    let user;
    try {
      user = await users.create(
        ID.unique(),
        params.patientEmail,
        params.patientPhone,
        undefined,
        params.patientName
      );
    } catch (error: any) {
      if (error?.code === 409) {
        const existingUsers = await users.list([
          Query.equal("email", [params.patientEmail])
        ]);
        user = existingUsers.users[0];
      } else {
        user = { 
          $id: ID.unique(), 
          email: params.patientEmail, 
          phone: params.patientPhone, 
          name: params.patientName 
        };
      }
    }

    if (!user?.$id) {
      user = { 
        $id: ID.unique(), 
        email: params.patientEmail, 
        phone: params.patientPhone, 
        name: params.patientName 
      };
    }

    let patient;
    try {
      const existingPatients = await databases.listDocuments(
        DATABASE_ID!,
        PATIENT_COLLECTION_ID!,
        [Query.equal("userId", [user.$id])]
      );

      if (existingPatients.documents.length > 0) {
        patient = existingPatients.documents[0];
      } else {
        patient = await databases.createDocument(
          DATABASE_ID!,
          PATIENT_COLLECTION_ID!,
          ID.unique(),
          {
            userId: user.$id,
            name: params.patientName,
            email: params.patientEmail,
            phone: params.patientPhone,
            privacyConsent: true,
            identificationDocumentUrl: "simplified-booking-placeholder",
            address: "To be provided",
            emergencyContactName: params.patientName,
            emergencyContactNumber: params.patientPhone,
            primaryPhysician: "To be assigned",
            insuranceProvider: "Not provided",
            insurancePolicyNumber: "Not provided",
            birthDate: "1900-01-01",
            gender: "other",
          }
        );
      }
    } catch (error) {
      console.error("Error creating/finding patient:", error);
      throw error;
    }

    const appointment = await databases.createDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      {
        userId: user.$id,
        patient: patient.$id,
        branchId: params.branchId,
        schedule: params.schedule,
        status: "pending",
        reason: params.reason || "General appointment",
        note: "Created via simplified booking",
        primaryPhysician: "To be assigned",
      }
    );

    if (params.patientPhone) {
      await sendSMSNotification(
        params.patientPhone,
        `Link Opticians: Appointment scheduled for ${formatDateTime(params.schedule).dateTime}.`
      );
    }

    revalidatePath("/admin");
    
    return parseStringify({
      success: true,
      bookingId: appointment.$id,
      appointment,
    });
  } catch (error) {
    console.error("Appointment scheduling failed:", error);
    return { success: false, error: "Appointment scheduling failed" };
  }
};