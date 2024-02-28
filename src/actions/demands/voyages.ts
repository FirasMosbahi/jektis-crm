"use server";

import { fetcher } from "@jektis-crm/utils/fetcher";
import { Endpoints } from "@jektis-crm/utils/endpoints";

export async function getVoyages() {
  const result = await fetcher({
    url: `${process.env.BACKEND_HOST}${Endpoints.getVoyages}`,
    method: "GET",
    addAccessToken: true,
  });
  return result.data;
}
