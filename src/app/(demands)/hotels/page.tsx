import React from "react";
import Breadcrumb from "@jektis-crm/components/general/Breadcrumb";
import { hotelsReservationRequests } from "@jektis-crm/mocks/hotels-requests";
import ReservationTable from "@jektis-crm/components/Reservation/ReservationTable";

export default function Page(): React.ReactElement {
  const hotelsReservationsRequests = hotelsReservationRequests;
  return (
    <div>
      <Breadcrumb pageName="hotels reservation requests" />

      <ReservationTable reservationsList={hotelsReservationsRequests} />
    </div>
  );
}
