import { VisaRequest } from "@jektis-crm/types/visa";
import { clients } from "@jektis-crm/mocks/clients";
import { CreationMethod } from "@jektis-crm/enums/creation-method";
import { RequestStatus } from "@jektis-crm/enums/request-status";
import { VoyageType } from "@jektis-crm/enums/voyage-type";

export const visaRequests: VisaRequest[] = [
  {
    id: `request 1`,
    title: `Visa Reservation Request 1`,
    client: clients[0],
    creationMethod: CreationMethod.FACE_TO_FACE,
    description: `This is a description for Reservation Request 1`,
    status: RequestStatus.NON_AFFECTED,
    createdAt: new Date(),
    closedAt: new Date(),
    destination: "destination 1",
    duration: "30 days",
    startFrom: new Date(),
  },
  {
    id: `request 2`,
    title: `Visa Reservation Request 2`,
    client: clients[0],
    creationMethod: CreationMethod.CALL_GSM,
    description: `This is a description for Reservation Request 2`,
    status: RequestStatus.AFFECTED,
    createdAt: new Date(),
    closedAt: new Date(),
    destination: "destination 2",
    duration: "10 days",
    startFrom: new Date(),
  },
  {
    id: `request 3`,
    title: `Visa Reservation Request 3`,
    client: clients[1],
    creationMethod: CreationMethod.WHATSAPP,
    description: `This is a description for Reservation Request 3`,
    status: RequestStatus.RESPONSE_CLIENT,
    createdAt: new Date(),
    closedAt: new Date(),
    destination: "destination 3",
    duration: "18 days",
    startFrom: new Date(),
  },
  {
    id: `request 4`,
    title: `Visa Reservation Request 4`,
    client: clients[1],
    creationMethod: CreationMethod.CALL_FIXE,
    description: `This is a description for Reservation Request 4`,
    status: RequestStatus.TRAITED,
    createdAt: new Date(),
    closedAt: new Date(),
    destination: "destination 4",
    duration: "12 days",
    startFrom: new Date(),
  },
  {
    id: `request 5`,
    title: `Visa Reservation Request 5`,
    client: clients[1],
    creationMethod: CreationMethod.INSTAGRAM,
    description: `This is a description for Reservation Request 5`,
    status: RequestStatus.CONFIRMED,
    createdAt: new Date(),
    closedAt: new Date(),
    destination: "destination 5",
    duration: "40 days",
    startFrom: new Date(),
  },
  {
    id: `request 6`,
    title: `Visa Reservation Request 6`,
    client: clients[0],
    creationMethod: CreationMethod.FACE_TO_FACE,
    description: `This is a description for Reservation Request 6`,
    status: RequestStatus.CANCELED,
    createdAt: new Date(),
    closedAt: new Date(),
    destination: "destination 6",
    duration: "8 days",
    startFrom: new Date(),
  },
];
