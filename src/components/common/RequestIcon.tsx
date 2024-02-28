import { ClientRequest } from "@jektis-crm/types/request";
import {
  HotelIcon,
  TicketIcon,
  VisaIcon,
  VoyageIcon,
} from "@jektis-crm/components/icons";
import { RequestType } from "@jektis-crm/enums/request-type";

export default function RequestIcon({
  requestType,
}: {
  requestType: RequestType;
}) {
  return (
    <div className="border border-solid border-gray-500 rounded-full p-4">
      {requestType === RequestType.HOTEL ? (
        <HotelIcon stroke="#000" className="size-8" />
      ) : requestType === RequestType.VOYAGE ? (
        <VoyageIcon className="size-8" string="none" fill="#000" />
      ) : requestType === RequestType.VISA ? (
        <VisaIcon className="size-8" fill="#000" />
      ) : requestType === RequestType.BILLET ? (
        <TicketIcon className="size-8" fill="#000" />
      ) : (
        <></>
      )}
    </div>
  );
}
