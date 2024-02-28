import { Client } from "@jektis-crm/types/client";
import { CreationMethod } from "@jektis-crm/enums/creation-method";
import { RequestStatus } from "@jektis-crm/enums/request-status";
import { HotelReservationRequest } from "@jektis-crm/types/hotel";
import { VoyageReservationRequest } from "@jektis-crm/types/voyage";
import { VisaRequest } from "@jektis-crm/types/visa";
import { BilletRequest } from "@jektis-crm/types/billet";
import { RequestType } from "@jektis-crm/enums/request-type";

export class ClientRequest {
  id: string;
  requestType: RequestType;
  title: string;
  client: Client;
  creationMethod: CreationMethod;
  description: string;
  status: RequestStatus;
  createdAt: Date;
  deadline?: Date;
  closedAt: Date;
}
