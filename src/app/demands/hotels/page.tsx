"use server";

import React from "react";
import Breadcrumb from "@jektis-crm/components/general/Breadcrumb";
import { hotelsReservationRequests } from "@jektis-crm/mocks/hotels-requests";
import ReservationTable from "@jektis-crm/components/Reservation/ReservationTable";
import { HotelReservationRequest } from "@jektis-crm/types/hotel";
import HotelDemandDetailsModal from "@jektis-crm/components/details/hotel-demand-details";
import ClientDetailsModal from "@jektis-crm/components/details/ClientDetailsModal";
import AssignToMeModal from "@jektis-crm/components/details/AssignToMeModal";
import { getHotels } from "@jektis-crm/actions/demands/hotels";

export default async function Page(): Promise<React.ReactElement> {
  function actionsGenerator(
    hotel: HotelReservationRequest,
  ): React.ReactElement[] {
    return [
      <HotelDemandDetailsModal key={1} hotelDemand={hotel} />,
      <ClientDetailsModal key={2} client={hotel.client} />,
      <AssignToMeModal key={3} {...hotel} />,
    ];
  }
  const hotelsReservationsRequests = await getHotels();
  return (
    <div>
      <Breadcrumb pageName="hotels reservation requests" />

      <ReservationTable
        reservationsList={hotelsReservationsRequests}
        actionsListFactory={actionsGenerator}
      />
    </div>
  );
}
