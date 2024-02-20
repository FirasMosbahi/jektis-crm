import { ClientRequest } from "@jektis-crm/types/request";
import ReservationTableHeader from "@jektis-crm/components/Reservation/ReservationTableHeader";
import ReservationItem from "@jektis-crm/components/Reservation/ReservationItem";
import React from "react";

export default function ReservationTable({
  reservationsList,
}: {
  reservationsList: ClientRequest[];
}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <ReservationTableHeader />
            {reservationsList.map((request) => (
              <ReservationItem key={request.id} reservationRequest={request} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
