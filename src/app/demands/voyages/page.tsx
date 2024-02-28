import React from "react";
import Breadcrumb from "@jektis-crm/components/general/Breadcrumb";
import ReservationTable from "@jektis-crm/components/Reservation/ReservationTable";
import { voyagesReservationRequests } from "@jektis-crm/mocks/voyages-requests";

import ClientDetailsModal from "@jektis-crm/components/details/ClientDetailsModal";
import AssignToMeModal from "@jektis-crm/components/details/AssignToMeModal";
import VoyageDetailsModal from "@jektis-crm/components/details/VoyageDetailsModal";
import { VoyageReservationRequest } from "@jektis-crm/types/voyage";
import { getVoyages } from "@jektis-crm/actions/demands/voyages";

export default async function Page(): Promise<React.ReactElement> {
  function actionsGenerator(
    voyage: VoyageReservationRequest,
  ): React.ReactElement[] {
    return [
      <VoyageDetailsModal key={1} VoyageRequest={voyage} />,
      <ClientDetailsModal key={2} client={voyage.client} />,
      <AssignToMeModal key={3} {...voyage} />,
    ];
  }
  const voyageReservationRequests = await getVoyages();
  return (
    <div>
      <Breadcrumb pageName="voyages reservation requests" />

      <ReservationTable
        actionsListFactory={actionsGenerator}
        reservationsList={voyageReservationRequests}
      />
    </div>
  );
}
