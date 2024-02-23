import React from "react";
import Breadcrumb from "@jektis-crm/components/general/Breadcrumb";
import ReservationTable from "@jektis-crm/components/Reservation/ReservationTable";
import { billetRequests } from "@jektis-crm/mocks/billet-requests";

export default function Page(): React.ReactElement {
  const billetReservationRequests = billetRequests;
  return (
    <div>
      <Breadcrumb pageName="billets reservation requests" />

      <ReservationTable reservationsList={billetReservationRequests} />
    </div>
  );
}
