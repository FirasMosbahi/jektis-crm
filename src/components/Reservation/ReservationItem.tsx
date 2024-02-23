import { HotelReservationRequest } from "@jektis-crm/types/hotel";
import React from "react";
import getColorByStatus from "@jektis-crm/utils/get-color-by-status";
import ReservationStatus from "@jektis-crm/components/general/ReservationStatus";
import {
  AddIcon,
  MoreDetailsIcon,
  ProfileIcon,
} from "@jektis-crm/components/icons";
import { ClientRequest } from "@jektis-crm/types/request";

export default function ReservationItem({
  reservationRequest,
  actionsList,
}: {
  reservationRequest: ClientRequest;
  actionsList: React.ReactElement[];
}): React.ReactElement {
  return (
    <tr key={reservationRequest.id}>
      <td className="border-b border-[#eee] px-4 py-5 pl-9">
        <h5 className="font-medium text-black">{reservationRequest.title}</h5>
        <p className="text-sm text-gray-700">{`${reservationRequest.client.fullName}`}</p>
      </td>
      <td className="border-b border-[#eee] px-4 py-5">
        <p className="text-black">
          {reservationRequest.createdAt.toDateString()}
        </p>
      </td>
      <td className="border-b border-[#eee] px-4 py-5">
        <ReservationStatus status={reservationRequest.status} />
      </td>
      <td className="border-b border-[#eee] px-4 py-5">
        <div className="flex items-center gap-x-8">
          {/*<button className="hover:text-primary">*/}
          {/*  <MoreDetailsIcon className="size-8" />*/}
          {/*</button>*/}
          {/*<button className="hover:text-primary">*/}
          {/*  <ProfileIcon fill="#000" className="size-6" />*/}
          {/*</button>*/}
          {/*<button className="hover:text-primary">*/}
          {/*  <AddIcon className="size-6" />*/}
          {/*</button>*/}
          {actionsList}
        </div>
      </td>
    </tr>
  );
}
