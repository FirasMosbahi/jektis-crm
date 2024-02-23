import React from "react";
import Breadcrumb from "@jektis-crm/components/general/Breadcrumb";
import { hotelsReservationRequests } from "@jektis-crm/mocks/hotels-requests";
import ReservationTable from "@jektis-crm/components/Reservation/ReservationTable";
import { HotelReservationRequest } from "@jektis-crm/types/hotel";
import HotelDemandDetailsModal from "@jektis-crm/components/details/hotel-demand-details";
import { AddIcon, ProfileIcon } from "@jektis-crm/components/icons";

export default function Page(): React.ReactElement {
  function actionsGenerator(
    hotel: HotelReservationRequest,
  ): React.ReactElement[] {
    return [
      <HotelDemandDetailsModal key={1} hotelDemand={hotel} />,
      <button key={2} className="hover:text-primary">
        <ProfileIcon fill="#000" className="size-6" />
      </button>,
      <button key={3} className="hover:text-primary">
        <AddIcon className="size-6" />
      </button>,
    ];
  }
  const hotelsReservationsRequests = hotelsReservationRequests;
  return (
    <div>
      <Breadcrumb pageName="hotels reservation requests" />

      <ReservationTable
        reservationsList={hotelsReservationsRequests}
        actionsList={actionsGenerator}
      />
    </div>
  );
}
