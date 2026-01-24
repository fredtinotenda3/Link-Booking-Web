import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";
import { Status } from "@/types";

export const StatusBadge = ({ status }: { status: Status }) => {
  // For display, convert "schedule" to "scheduled"
  const displayText = status === "schedule" ? "scheduled" : status;
  
  return (
    <div
      className={clsx("status-badge", {
        "bg-green-600": status === "schedule",
        "bg-blue-600": status === "pending",
        "bg-red-600": status === "cancelled",
      })}
    >
      <Image
        // StatusIcon already has "schedule" key, so use status directly
        src={StatusIcon[status] || StatusIcon.pending}
        alt="status"
        width={24}
        height={24}
        className="h-fit w-3"
      />
      <p
        className={clsx("text-12-semibold capitalize", {
          "text-green-500": status === "schedule",
          "text-blue-500": status === "pending",
          "text-red-500": status === "cancelled",
        })}
      >
        {displayText}
      </p>
    </div>
  );
};