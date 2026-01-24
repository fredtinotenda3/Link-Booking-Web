"use server";

import { revalidatePath } from "next/cache";
import { ID, Query } from "node-appwrite";

import { Appointment } from "@/types/appwite.types";
import { sendSMS } from '@/lib/twilio';

import {
  APPOINTMENT_COLLECTION_ID,
  DATABASE_ID,
  databases,
} from "../appwrite.config";
import { formatDateTime, parseStringify } from "../utils";
import CreateAppointmentParams, { UpdateAppointmentParams } from "@/types";
import { getPatient } from "./patient.actions";

//  CREATE APPOINTMENT
export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const newAppointment = await databases.createDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      {
        ...appointment,
        branchId: appointment.branchId || "",
      }
    );

    revalidatePath("/admin");
    return parseStringify(newAppointment);
  } catch (error) {
    console.error("An error occurred while creating a new appointment:", error);
  }
};

//  GET RECENT APPOINTMENTS
export const getRecentAppointmentList = async () => {
  try {
    const appointments = await databases.listDocuments(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      [Query.orderDesc("$createdAt")]
    );

    const initialCounts = {
      scheduledCount: 0,
      pendingCount: 0,
      cancelledCount: 0,
    };

    const counts = (appointments.documents as Appointment[]).reduce(
      (acc, appointment) => {
        // FIXED: Use exact database values
        if (appointment.status === "schedule") {
          acc.scheduledCount += 1;
        } else if (appointment.status === "pending") {
          acc.pendingCount += 1;
        } else if (appointment.status === "cancelled") {
          acc.cancelledCount += 1;
        }
        return acc;
      },
      initialCounts
    );

    const data = {
      totalCount: appointments.total,
      ...counts,
      documents: appointments.documents,
    };

    return parseStringify(data);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the recent appointments:",
      error
    );
  }
};

//  SEND SMS NOTIFICATION
export const sendSMSNotification = async (phoneNumber: string, content: string) => {
  try {
    const result = await sendSMS(phoneNumber, content);
    return parseStringify(result);
  } catch (error) {
    console.error("An error occurred while sending SMS:", error);
    return { success: false, error: "Failed to send SMS" };
  }
};

// GET APPOINTMENT
export const getAppointment = async (appointmentId: string) => {
  try {
    const appointment = await databases.getDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId
    );

    return parseStringify(appointment);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the existing patient:",
      error
    );
  }
};

//  UPDATE APPOINTMENT - FIXED VERSION
export const updateAppointment = async ({
  appointmentId,
  appointment,
  type,
}: UpdateAppointmentParams) => {
  try {
    let status: "schedule" | "pending" | "cancelled";

    switch (type) {
      case "schedule":
        status = "schedule";  // Database uses "schedule" (without "d")
        break;
      case "cancel":
        status = "cancelled";
        break;
      default:
        status = "pending";
    }

    const updatedAppointment = await databases.updateDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId,
      {
        ...appointment,
        status: status,
      }
    );

    if (!updatedAppointment) {
      throw new Error("Appointment not found");
    }

    const fullAppointment = await getAppointment(appointmentId);
    
    const patient = await getPatient(fullAppointment.patient.$id);
    
    // FIXED: Use the correct status in SMS message
    const smsMessage = `Link Opticians appointment ${
      type === "schedule" ? "scheduled" : "cancelled"
    }. ${
      type === "schedule"
        ? `Appointment scheduled for ${formatDateTime(appointment.schedule!).dateTime}`
        : `Appointment cancelled for ${formatDateTime(appointment.schedule!).dateTime}`
    }`;

    if (patient?.phone) {
      await sendSMSNotification(patient.phone, smsMessage);
    }

    revalidatePath("/admin");
    revalidatePath("/");
    
    return parseStringify(updatedAppointment);
  } catch (error) {
    console.error("An error occurred while updating an appointment:", error);
    throw error;
  }
};