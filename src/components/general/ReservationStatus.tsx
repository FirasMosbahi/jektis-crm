import { RequestStatus } from "@jektis-crm/enums/request-status";
import React from "react";

export default function ReservationStatus({
  status,
}: {
  status: RequestStatus;
}) {
  return (
    <div className="w-40 flex flex-row justify-center">
      <div
        className={`inline-flex rounded-full px-3 py-1 text-sm font-medium bg-gray-400 ${
          status === RequestStatus.NON_AFFECTED
            ? "bg-gray-400 text-gray-500"
            : status === RequestStatus.AFFECTED
              ? "bg-blue-400 text-blue-500"
              : status === RequestStatus.CONFIRMED
                ? "bg-green-400 text-green-500"
                : status === RequestStatus.TRAITED
                  ? "bg-fuchsia-400 text-fuchsia-500"
                  : status === RequestStatus.CANCELED
                    ? "bg-red-400 text-red-500"
                    : "bg-yellow-400 text-yellow-500"
        }`}
      >
        <p className="w-full text-center text-nowrap">{status}</p>
      </div>
    </div>
  );
}
