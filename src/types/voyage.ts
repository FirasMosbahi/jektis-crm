import { ClientRequest } from "@jektis-crm/types/request";
import { VoyageType } from "@jektis-crm/enums/voyage-type";

export class VoyageReservationRequest extends ClientRequest {
  destination: string;
  type: VoyageType;
  nombreDePlaces: number;
}
