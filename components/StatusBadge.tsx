import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";
import { Status } from "@/types";

export const StatusBadge = ({ status }: { status: Status }) => {
  // Handle both old "schedule" and new "scheduled" status
  const normalizedStatus = status === "schedule" ? "scheduled" : status;
  
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": normalizedStatus === "scheduled", // Using "scheduled"
        "bg-blue-600": normalizedStatus === "pending",
        "bg-red-600": normalizedStatus === "cancelled",
      })}
    >
      <Image
        src={StatusIcon[normalizedStatus as keyof typeof StatusIcon] || StatusIcon.pending}
        alt="status"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": normalizedStatus === "scheduled", // Using "scheduled"
          "text-blue-500": normalizedStatus === "pending",
          "text-red-500": normalizedStatus === "cancelled",
        })}
      >
        {normalizedStatus}
      </p>
    </div>
  );
};