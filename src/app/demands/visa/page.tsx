import React from "react";
import Breadcrumb from "@jektis-crm/components/general/Breadcrumb";
import ReservationTable from "@jektis-crm/components/Reservation/ReservationTable";
import { visaRequests } from "@jektis-crm/mocks/visa-requests";
import { BilletRequest } from "@jektis-crm/types/billet";
import BilletDetailsModal from "@jektis-crm/components/details/BilletDetailsModal";
import ClientDetailsModal from "@jektis-crm/components/details/ClientDetailsModal";
import AssignToMeModal from "@jektis-crm/components/details/AssignToMeModal";
import { VisaRequest } from "@jektis-crm/types/visa";
import VisaDetailsModal from "@jektis-crm/components/details/VisaDetailsModal";
import { getVisa } from "@jektis-crm/actions/demands/visa";

export default async function Page(): Promise<React.ReactElement> {
  function actionsGenerator(visa: VisaRequest): React.ReactElement[] {
    return [
      <VisaDetailsModal key={1} visaRequest={visa} />,
      <ClientDetailsModal key={2} client={visa.client} />,
      <AssignToMeModal key={3} {...visa} />,
    ];
  }
  const visaReservationsRequests = await getVisa();
  return (
    <div>
      <Breadcrumb pageName="visa reservation requests" />

      <ReservationTable
        actionsListFactory={actionsGenerator}
        reservationsList={visaReservationsRequests}
      />
    </div>
  );
}
