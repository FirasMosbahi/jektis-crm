import React from "react";
import Breadcrumb from "@jektis-crm/components/general/Breadcrumb";
import ReservationTable from "@jektis-crm/components/Reservation/ReservationTable";
import { voyagesReservationRequests } from "@jektis-crm/mocks/voyages-requests";

export default function Page(): React.ReactElement {
  const voyageReservationRequests = voyagesReservationRequests;
  return (
    <div>
      <Breadcrumb pageName="voyages reservation requests" />

      <ReservationTable reservationsList={voyageReservationRequests} />
    </div>
  );
}
