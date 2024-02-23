import { Client } from "@jektis-crm/types/client";
import { CreationMethod } from "@jektis-crm/enums/creation-method";
import { RequestStatus } from "@jektis-crm/enums/request-status";

export class ClientRequest {
  id: string;
  title: string;
  client: Client;
  creationMethod: CreationMethod;
  description: string;
  status: RequestStatus;
  createdAt: Date;
  deadline?: Date;
  closedAt: Date;
}
