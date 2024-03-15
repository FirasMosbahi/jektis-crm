"use server";

import { AddAgentFormData } from "@jektis-crm/types/form-data";
import { fetcher } from "@jektis-crm/utils/fetcher";
import { Endpoints } from "@jektis-crm/utils/endpoints";

export async function createAgent(data: AddAgentFormData) {
  const res = await fetcher({
    url: `${process.env.BACKEND_HOST}${Endpoints.signup}`,
    method: "POST",
    body: { ...data, isAdmin: false },
  });
  console.log(res);
  return res.data;
}
