import { ClientRequest } from "@jektis-crm/types/request";

export class VisaRequest extends ClientRequest {
  destination: string;
  duration: string;
  startFrom: Date;
}
