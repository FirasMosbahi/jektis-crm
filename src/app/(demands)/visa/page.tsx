import React from "react";
import Breadcrumb from "@jektis-crm/components/general/Breadcrumb";
import ReservationTable from "@jektis-crm/components/Reservation/ReservationTable";
import { visaRequests } from "@jektis-crm/mocks/visa-requests";

export default function Page(): React.ReactElement {
  const visaReservationsRequests = visaRequests;
  return (
    <div>
      <Breadcrumb pageName="visa reservation requests" />

      <ReservationTable reservationsList={visaReservationsRequests} />
    </div>
  );
}
