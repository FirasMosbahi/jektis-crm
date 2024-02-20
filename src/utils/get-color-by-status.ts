import { RequestStatus } from "@jektis-crm/enums/request-status";

export default function getColorByStatus(status: RequestStatus) {
  switch (status) {
    case RequestStatus.NON_AFFECTED:
      return "bg-gray-400 text-gray-500";
    case RequestStatus.AFFECTED:
      return "bg-blue-400 text-blue-500";
    case RequestStatus.CONFIRMED:
      return "bg-green-400 text-green-500";
    case RequestStatus.TRAITED:
      return "bg-fuchsia-400 text-fuchsia-500";
    case RequestStatus.CANCELED:
      return "bg-red-400 text-red-500";
    case RequestStatus.RESPONSE_CLIENT:
      return "bg-yellow-400 text-yellow-500";
  }
}
