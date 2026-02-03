===============================
  lib\actions\appointment.actions.ts
===============================
`$lang
"use server";

import { revalidatePath } from "next/cache";
import { ID, Query } from "node-appwrite";

import { Appointment } from "@/types/appwite.types";
import { sendSMS } from '@/lib/twilio';
import { SMS_CONFIG, formatSMSDate, formatSMSTime } from "@/constants/social"; // ADD THIS IMPORT

import {
  APPOINTMENT_COLLECTION_ID,
  DATABASE_ID,
  databases,
} from "../appwrite.config";
import { formatDateTime, parseStringify } from "../utils";
import CreateAppointmentParams, { UpdateAppointmentParams } from "@/types";
import { getPatient } from "./patient.actions";
import { getBranchById } from "./branch.actions"; // ADD THIS IMPORT

// ==================== ENHANCED SMS FUNCTIONS ====================

// Enhanced SMS notification with templates
export const sendAppointmentSMS = async (
  phoneNumber: string,
  type: 'confirmation' | 'reminder24h' | 'reminder3h' | 'cancelled' | 'rescheduled',
  data: {
    patientName: string;
    appointmentDate: Date;
    branchName?: string;
    oldDate?: Date; // For rescheduled
    newDate?: Date; // For rescheduled
  }
) => {
  try {
    const { patientName, appointmentDate, branchName = "our clinic", oldDate, newDate } = data;
    
    const formattedDate = formatSMSDate(appointmentDate);
    const formattedTime = formatSMSTime(appointmentDate);
    
    let message = "";
    
    switch (type) {
      case 'confirmation':
        message = SMS_CONFIG.appointmentReminders.templates.confirmation(
          patientName,
          formattedDate,
          formattedTime,
          branchName
        );
        break;
        
      case 'reminder24h':
        message = SMS_CONFIG.appointmentReminders.templates.reminder24h(
          patientName,
          formattedDate,
          formattedTime,
          branchName
        );
        break;
        
      case 'reminder3h':
        message = SMS_CONFIG.appointmentReminders.templates.reminder3h(
          patientName,
          formattedDate,
          formattedTime
        );
        break;
        
      case 'cancelled':
        message = SMS_CONFIG.appointmentReminders.templates.cancelled(
          patientName,
          formattedDate,
          formattedTime
        );
        break;
        
      case 'rescheduled':
        const oldFormatted = oldDate ? formatSMSDate(oldDate) : "previous date";
        const newFormatted = newDate ? `${formatSMSDate(newDate)} at ${formatSMSTime(newDate)}` : "new time";
        message = SMS_CONFIG.appointmentReminders.templates.rescheduled(
          patientName,
          oldFormatted,
          newFormatted,
          ""
        );
        break;
    }
    
    // Add opt-out instructions
    message += ` ${SMS_CONFIG.optIn.help}`;
    
    const result = await sendSMS(phoneNumber, message);
    return parseStringify(result);
    
  } catch (error) {
    console.error("Error sending appointment SMS:", error);
    return { success: false, error: "Failed to send SMS" };
  }
};

// Schedule SMS reminders for an appointment
export const scheduleSMSReminders = async (
  appointmentId: string,
  patientPhone: string,
  patientName: string,
  appointmentDate: Date,
  branchName?: string
) => {
  try {
    if (!SMS_CONFIG.appointmentReminders.enabled) {
      return { success: false, error: "SMS reminders disabled" };
    }
    
    const results = [];
    
    // Schedule 24-hour reminder
    const reminder24hTime = new Date(appointmentDate);
    reminder24hTime.setHours(reminder24hTime.getHours() - 24);
    
    // Only schedule if reminder is in the future
    if (reminder24hTime > new Date()) {
      // Note: In production, you would use a job scheduler (Cron, Bull, etc.)
      // For now, we'll store the reminder time and check periodically
      console.log(`[SMS] Scheduled 24h reminder for ${patientName} at ${reminder24hTime}`);
      results.push({ type: '24h', scheduled: reminder24hTime });
    }
    
    // Schedule 3-hour reminder
    const reminder3hTime = new Date(appointmentDate);
    reminder3hTime.setHours(reminder3hTime.getHours() - 3);
    
    if (reminder3hTime > new Date()) {
      console.log(`[SMS] Scheduled 3h reminder for ${patientName} at ${reminder3hTime}`);
      results.push({ type: '3h', scheduled: reminder3hTime });
    }
    
    return { success: true, reminders: results };
    
  } catch (error) {
    console.error("Error scheduling SMS reminders:", error);
    return { success: false, error: "Failed to schedule reminders" };
  }
};

//  SEND SMS NOTIFICATION (keep existing for backward compatibility)
export const sendSMSNotification = async (phoneNumber: string, content: string) => {
  try {
    const result = await sendSMS(phoneNumber, content);
    return parseStringify(result);
  } catch (error) {
    console.error("An error occurred while sending SMS:", error);
    return { success: false, error: "Failed to send SMS" };
  }
};

// ==================== EXISTING FUNCTIONS (UPDATED) ====================

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

//  UPDATE APPOINTMENT - FIXED VERSION WITH ENHANCED SMS
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
    const branch = appointment.branchId ? await getBranchById(appointment.branchId) : null;

    // ENHANCED SMS NOTIFICATIONS
    if (patient?.phone && patient?.name) {
      if (type === "schedule") {
        // Send confirmation SMS
        await sendAppointmentSMS(patient.phone, 'confirmation', {
          patientName: patient.name,
          appointmentDate: new Date(appointment.schedule!),
          branchName: branch?.name || "our clinic"
        });

        // Schedule future reminders (if SMS reminders enabled)
        if (SMS_CONFIG.appointmentReminders.enabled) {
          await scheduleSMSReminders(
            appointmentId,
            patient.phone,
            patient.name,
            new Date(appointment.schedule!),
            branch?.name
          );
        }

      } else if (type === "cancel") {
        // Send cancellation SMS
        await sendAppointmentSMS(patient.phone, 'cancelled', {
          patientName: patient.name,
          appointmentDate: new Date(appointment.schedule!)
        });
      }
    }

    revalidatePath("/admin");
    revalidatePath("/");
    
    return parseStringify(updatedAppointment);
  } catch (error) {
    console.error("An error occurred while updating an appointment:", error);
    throw error;
  }
};
```

===============================
  lib\actions\booking.actions.ts
===============================
`$lang
"use server";

import { ID, Query } from "node-appwrite";
import { parseStringify, formatDateTime } from "../utils";
import { databases, users } from "../appwrite.config";
import { DATABASE_ID, APPOINTMENT_COLLECTION_ID, PATIENT_COLLECTION_ID } from "../appwrite.config";
import { revalidatePath } from "next/cache";
import { sendSMSNotification } from "./appointment.actions";

interface CreateSimpleAppointmentParams {
  branchId: string;
  schedule: Date;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  reason?: string;
  smsOptIn?: boolean; // ADDED
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
        note: `Created via simplified booking. SMS Opt-in: ${params.smsOptIn !== false ? 'Yes' : 'No'}`, // ADDED
        primaryPhysician: "To be assigned",
      }
    );

    // Send SMS only if opted in (default is true)
    if (params.patientPhone && params.smsOptIn !== false) {
      await sendSMSNotification(
        params.patientPhone,
        `Link Opticians: Appointment requested for ${formatDateTime(params.schedule).dateTime}. We'll contact you to confirm. Reply STOP to unsubscribe.`
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
```

===============================
  lib\actions\branch.actions.ts
===============================
`$lang
"use server";

import { ID, Query } from "node-appwrite";
import { DATABASE_ID, BRANCHES_COLLECTION_ID, databases } from "../appwrite.config";
import { parseStringify } from "../utils";
import { Branch } from "@/types";

// GET ALL BRANCHES
export const getAllBranches = async () => {
  try {
    const branches = await databases.listDocuments(
      DATABASE_ID!,
      BRANCHES_COLLECTION_ID!,
      [Query.equal("isActive", [true])] // Only active branches
    );
    
    return parseStringify(branches.documents);
  } catch (error) {
    console.error("An error occurred while fetching branches:", error);
    return [];
  }
};

// GET BRANCH BY ID
export const getBranchById = async (branchId: string) => {
  try {
    const branch = await databases.getDocument(
      DATABASE_ID!,
      BRANCHES_COLLECTION_ID!,
      branchId
    );
    
    return parseStringify(branch);
  } catch (error) {
    console.error("An error occurred while fetching branch:", error);
    return null;
  }
};

// CREATE BRANCH (for admin/seed)
export const createBranch = async (branch: Branch) => {
  try {
    const newBranch = await databases.createDocument(
      DATABASE_ID!,
      BRANCHES_COLLECTION_ID!,
      ID.unique(),
      branch
    );
    
    return parseStringify(newBranch);
  } catch (error) {
    console.error("An error occurred while creating branch:", error);
    return null;
  }
};
```

===============================
  lib\actions\patient.actions.ts
===============================
`$lang
"use server";

import { ID, Query } from "node-appwrite";
import { InputFile } from "node-appwrite/file";

import {
  APPOINTMENT_COLLECTION_ID,
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";
import { CreateUserParams, UpdateAppointmentParams } from "@/types";
import { Appointment } from "@/types/appwite.types";
import { revalidatePath } from "next/cache";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    // return parseStringify(newuser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const documents = await users.list([Query.equal("email", [user.email])]);
      return documents.users[0];
    }
    //     console.error("An error occurred while creating a new user:", error);
  }
};

// GET USER
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

// // REGISTER PATIENT
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
    let file;
    if (identificationDocument) {
      const inputFile = InputFile.fromBuffer(
        identificationDocument?.get("blobFile") as Blob,
        identificationDocument?.get("fileName") as string
      );
      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
    }

    // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id || "", // Fallback to an empty string if null
        identificationDocumentUrl: file?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view?project=${PROJECT_ID}`
          : "", // Fallback to an empty string if null
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};

// // GET PATIENT
export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
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

    // FIXED: Using database schema values: "schedule", "pending", "cancelled"
    const counts = (appointments.documents as Appointment[]).reduce(
      (acc, appointment) => {
        switch (appointment.status) {
          case "schedule":  // Database uses "schedule" (without "d")
            acc.scheduledCount++;
            break;
          case "pending":
            acc.pendingCount++;
            break;
          case "cancelled":
            acc.cancelledCount++;
            break;
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

//  UPDATE APPOINTMENT
export const updateAppointment = async ({
  appointmentId,
  userId,
  //timeZone,
  appointment,
  type,
}: UpdateAppointmentParams) => {
  try {
    // Update appointment to scheduled -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#updateDocument
    const updatedAppointment = await databases.updateDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId,
      appointment
    );

    // if (!updatedAppointment) throw Error;

    // const smsMessage = `Greetings from CarePulse. ${type === "schedule" ? `Your appointment is confirmed for ${formatDateTime(appointment.schedule!, timeZone).dateTime} with Dr. ${appointment.primaryPhysician}` : `We regret to inform that your appointment for ${formatDateTime(appointment.schedule!, timeZone).dateTime} is cancelled. Reason:  ${appointment.cancellationReason}`}.`;
    // await sendSMSNotification(userId, smsMessage);

    revalidatePath("/admin");
    return parseStringify(updatedAppointment);
  } catch (error) {
    console.error("An error occurred while scheduling an appointment:", error);
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
```

===============================
  lib\appwrite.config.ts
===============================
`$lang
import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  BRANCHES_COLLECTION_ID, // ADD THIS
} = process.env;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);

```

===============================
  lib\twilio.ts
===============================
`$lang
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

if (!accountSid || !authToken || !twilioPhone) {
  console.error('Twilio credentials missing');
}

const client = twilio(accountSid, authToken);

export const sendSMS = async (to: string, body: string) => {
  try {
    const message = await client.messages.create({
      body,
      from: twilioPhone,
      to
    });
    return { success: true, sid: message.sid };
  } catch (error) {
    console.error('Twilio SMS error:', error);
    return { success: false, error };
  }
};
```

===============================
  lib\utils.ts
===============================
`$lang
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// FORMAT DATE TIME
export const formatDateTime = (dateString: Date | string) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    // weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    month: "short", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    year: "numeric", // numeric year (e.g., '2023')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: "short", // abbreviated weekday name (e.g., 'Mon')
    year: "numeric", // numeric year (e.g., '2023')
    month: "2-digit", // abbreviated month name (e.g., 'Oct')
    day: "2-digit", // numeric day of the month (e.g., '25')
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: "short", // abbreviated month name (e.g., 'Oct')
    year: "numeric", // numeric year (e.g., '2023')
    day: "numeric", // numeric day of the month (e.g., '25')
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const formattedDateTime: string = new Date(dateString).toLocaleString(
    "en-US",
    dateTimeOptions
  );

  const formattedDateDay: string = new Date(dateString).toLocaleString(
    "en-US",
    dateDayOptions
  );

  const formattedDate: string = new Date(dateString).toLocaleString(
    "en-US",
    dateOptions
  );

  const formattedTime: string = new Date(dateString).toLocaleString(
    "en-US",
    timeOptions
  );

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

export function encryptKey(passkey: string) {
  return btoa(passkey);
}

export function decryptKey(passkey: string) {
  return atob(passkey);
}

```

===============================
  lib\validation.ts
===============================
`$lang
import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});

export const PatientFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  birthDate: z.coerce.date(),
  gender: z.enum(["male", "female", "other"]),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(500, "Address must be at most 500 characters"),
  occupation: z
    .string()
    .min(2, "Occupation must be at least 2 characters")
    .max(500, "Occupation must be at most 500 characters"),
  emergencyContactName: z
    .string()
    .min(2, "Contact name must be at least 2 characters")
    .max(50, "Contact name must be at most 50 characters"),
  emergencyContactNumber: z
    .string()
    .refine(
      (emergencyContactNumber) => /^\+\d{10,15}$/.test(emergencyContactNumber),
      "Invalid phone number"
    ),
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  insuranceProvider: z
    .string()
    .min(2, "Insurance name must be at least 2 characters")
    .max(50, "Insurance name must be at most 50 characters"),
  insurancePolicyNumber: z
    .string()
    .min(2, "Policy number must be at least 2 characters")
    .max(50, "Policy number must be at most 50 characters"),
  allergies: z.string().optional(),
  currentMedication: z.string().optional(),
  familyMedicalHistory: z.string().optional(),
  pastMedicalHistory: z.string().optional(),
  identificationType: z.string().optional(),
  identificationNumber: z.string().optional(),
  identificationDocument: z.custom<File[]>().optional(),
  treatmentConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to treatment in order to proceed",
    }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to disclosure in order to proceed",
    }),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to privacy in order to proceed",
    }),
});

// ADDED: Status validation schema that matches database values
export const StatusSchema = z.enum(["pending", "schedule", "cancelled"]);

// UPDATED: Added branchId, made primaryPhysician optional, added status validation
export const CreateAppointmentSchema = z.object({
  branchId: z.string().min(1, "Please select a branch"),
  primaryPhysician: z.string().optional(),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
  // ADDED: Status field with proper validation
  status: StatusSchema.optional().default("pending"),
});

// UPDATED: Added branchId, made primaryPhysician optional, added status validation
export const ScheduleAppointmentSchema = z.object({
  branchId: z.string().min(1, "Please select a branch"),
  primaryPhysician: z.string().optional(),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
  // ADDED: Status field
  status: StatusSchema.optional().default("schedule"),
});

// UPDATED: Added branchId, made primaryPhysician optional, added status validation
export const CancelAppointmentSchema = z.object({
  branchId: z.string().min(1, "Please select a branch"),
  primaryPhysician: z.string().optional(),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
  // ADDED: Status field
  status: StatusSchema.optional().default("cancelled"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}

export const AppointmentFormValidation = z.union([
  CreateAppointmentSchema,
  ScheduleAppointmentSchema,
  CancelAppointmentSchema,
]);

// NEW: Simplified booking schema for Link Opticians
export const SimpleBookingSchema = z.object({
  branchId: z.string().min(1, "Please select a branch"),
  schedule: z.coerce.date(),
  patientName: z.string().min(2, "Name must be at least 2 characters"),
  patientEmail: z.string().email("Invalid email address").or(z.literal("")), // Make optional
  patientPhone: z
    .string()
    .refine((phone) => phone === "" || /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  reason: z
    .string()
    .max(200, "Reason must be at most 200 characters")
    .optional(),
});

// NEW: Branch schema validation - UPDATED to match database
export const BranchSchema = z.object({
  name: z.string().min(2, "Branch name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  phone: z.string().min(5, "Phone must be at least 5 characters"),
  email: z.string().email("Invalid email address"),
  operatingHours: z.string().min(5, "Operating hours must be provided"),
  services: z.array(z.string()).min(1, "At least one service must be provided"),
  doctors: z.array(z.string()).optional(),
  isActive: z.boolean().default(true),
});
```

