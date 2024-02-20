import { ClientRequest } from "@jektis-crm/types/request";

export class HotelReservationRequest extends ClientRequest {
  location: string;
  rating: number;
  hotelName: string;
  isTunisianHotel: boolean;
  numberOfChambres: number;
}
