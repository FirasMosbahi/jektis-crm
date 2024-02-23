import { HotelReservationRequest } from "@jektis-crm/types/hotel";
import { clients } from "@jektis-crm/mocks/clients";
import { CreationMethod } from "@jektis-crm/enums/creation-method";
import { RequestStatus } from "@jektis-crm/enums/request-status";

export const hotelsReservationRequests: HotelReservationRequest[] = [
  {
    id: `request 1`,
    title: `Hotel Reservation Request 1`,
    client: clients[0], // Cycle through the clients for each request
    creationMethod: CreationMethod.FACE_TO_FACE,
    description: `This is a description for Reservation Request 1`,
    status: RequestStatus.NON_AFFECTED,
    createdAt: new Date(),
    closedAt: new Date(),
    location: "Tunis",
    hotelName: `Hotel 1`,
    isTunisianHotel: true,
    numberOfChambres: 2,
  },
  {
    id: `request 2`,
    title: `Hotel Reservation Request 2`,
    client: clients[0], // Cycle through the clients for each request
    creationMethod: CreationMethod.MAIL,
    description: `This is a description for Reservation Request 2`,
    status: RequestStatus.CANCELED,
    createdAt: new Date(),
    closedAt: new Date(),
    location: "Tunis",
    hotelName: `Hotel 1`,
    isTunisianHotel: true,
    numberOfChambres: 2,
  },
  {
    id: `request 3`,
    title: `Hotel Reservation Request 3`,
    client: clients[1], // Cycle through the clients for each request
    creationMethod: CreationMethod.WHATSAPP,
    description: `This is a description for Reservation Request 3`,
    status: RequestStatus.CONFIRMED,
    createdAt: new Date(),
    closedAt: new Date(),
    location: "Tunis",
    hotelName: `Hotel 1`,
    isTunisianHotel: true,
    numberOfChambres: 2,
  },
  {
    id: `request 4`,
    title: `Hotel Reservation Request 4`,
    client: clients[1], // Cycle through the clients for each request
    creationMethod: CreationMethod.FACEBOOK,
    description: `This is a description for Reservation Request 4`,
    status: RequestStatus.TRAITED,
    createdAt: new Date(),
    closedAt: new Date(),
    location: "Tunis",
    hotelName: `Hotel 1`,
    isTunisianHotel: true,
    numberOfChambres: 2,
  },
  {
    id: `request 5`,
    title: `Hotel Reservation Request 5`,
    client: clients[0], // Cycle through the clients for each request
    creationMethod: CreationMethod.FACEBOOK,
    description: `This is a description for Reservation Request 5`,
    status: RequestStatus.AFFECTED,
    createdAt: new Date(),
    closedAt: new Date(),
    location: "Tunis",
    hotelName: `Hotel 1`,
    isTunisianHotel: true,
    numberOfChambres: 2,
  },
  {
    id: `request 6`,
    title: `Hotel Reservation Request 6`,
    client: clients[1], // Cycle through the clients for each request
    creationMethod: CreationMethod.CALL_GSM,
    description: `This is a description for Reservation Request 6`,
    status: RequestStatus.RESPONSE_CLIENT,
    createdAt: new Date(),
    closedAt: new Date(),
    location: "Tunis",
    hotelName: `Hotel 1`,
    isTunisianHotel: true,
    numberOfChambres: 2,
  },
];
