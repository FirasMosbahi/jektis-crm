"use server";

import { fetcher } from "@jektis-crm/utils/fetcher";
import { Endpoints } from "@jektis-crm/utils/endpoints";

export async function getHotels() {
  const result = await fetcher({
    url: `${process.env.BACKEND_HOST}${Endpoints.getHotels}`,
    method: "GET",
    addAccessToken: true,
  });
  return result.data;
}
