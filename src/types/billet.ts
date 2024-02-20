import { ClientRequest } from "@jektis-crm/types/request";

export class BilletRequest extends ClientRequest {
  destination: string;
  volDate: Date;
  allowEscales: boolean;
  airline: string;
  baggageWeight: number;
}
