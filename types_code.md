===============================
  types\appwite.types.ts
===============================
`$lang
import { Models } from "node-appwrite";
import { Gender, Status } from ".";

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  branchId: string; // ADD THIS
  branchName?: string; // ADD THIS for enhanced data
  schedule: Date;
  status: Status;
  primaryPhysician: string; // Now optional in schema
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}

```

===============================
  types\index.d.ts
===============================
`$lang
import { Appointment } from "./appwite.types";

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

declare type Gender = "male" | "female" | "other";

// CORRECT: This matches your database schema which uses "schedule" (not "scheduled")
declare type Status = "pending" | "schedule" | "cancelled";

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}
declare interface User extends CreateUserParams {
  $id: string;
}

declare interface RegisterUserParams extends CreateUserParams {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

declare interface Branch {
  $id?: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  operatingHours: string; // CHANGED: Based on your database schema, it's a string, not an object
  services: string[];
  doctors: string[];
  isActive: boolean;
}

declare interface CreateAppointmentParams {
  userId?: string;
  patient: string;
  branchId: string;
  primaryPhysician?: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
}

declare type UpdateAppointmentParams = {
  userId?: string;
  appointmentId: string;
  appointment: {
    primaryPhysician: string;
    schedule: Date;
    status: Status;
    cancellationReason: string | undefined;
    branchId?: string;
  };
  type: "create" | "schedule" | "cancel";
};
```

===============================
  types\services.ts
===============================
`$lang
export interface ServiceType {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  category: string;
}
```

