export enum RequestStatus {
  NON_AFFECTED = "non affectée",
  AFFECTED = "affectée",
  TRAITED = "traitée",
  RESPONSE_CLIENT = "réponse client",
  CONFIRMED = "confirmée",
  CANCELED = "annulée",
}

export function nextStatus(status: RequestStatus): RequestStatus | undefined {
  switch (status) {
    case RequestStatus.NON_AFFECTED:
      return RequestStatus.AFFECTED;
    case RequestStatus.AFFECTED:
      return RequestStatus.TRAITED;
    case RequestStatus.TRAITED:
      return RequestStatus.RESPONSE_CLIENT;
    case RequestStatus.RESPONSE_CLIENT:
      return RequestStatus.CONFIRMED;
    default:
      return undefined;
  }
}
