import React from "react";
import Breadcrumb from "@jektis-crm/components/general/Breadcrumb";
import ReservationTable from "@jektis-crm/components/Reservation/ReservationTable";
import { billetRequests } from "@jektis-crm/mocks/billet-requests";
import ClientDetailsModal from "@jektis-crm/components/details/ClientDetailsModal";
import AssignToMeModal from "@jektis-crm/components/details/AssignToMeModal";
import { BilletRequest } from "@jektis-crm/types/billet";
import BilletDetailsModal from "@jektis-crm/components/details/BilletDetailsModal";
import { getBillets } from "@jektis-crm/actions/demands/billet";

export default async function Page(): Promise<React.ReactElement> {
  function actionsGenerator(billet: BilletRequest): React.ReactElement[] {
    return [
      <BilletDetailsModal key={1} billetRequest={billet} />,
      <ClientDetailsModal key={2} client={billet.client} />,
      <AssignToMeModal key={3} {...billet} />,
    ];
  }
  const billetReservationRequests = await getBillets();
  return (
    <div>
      <Breadcrumb pageName="billets reservation requests" />

      <ReservationTable
        reservationsList={billetReservationRequests}
        actionsListFactory={actionsGenerator}
      />
    </div>
  );
}
