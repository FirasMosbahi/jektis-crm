"use server";

import { LoginAgentFormData } from "@jektis-crm/types/form-data";
import { fetcher } from "@jektis-crm/utils/fetcher";
import { Endpoints } from "@jektis-crm/utils/endpoints";

export async function loginAgent(data: LoginAgentFormData) {
  const res = await fetcher({
    url: `${process.env.BACKEND_HOST}${Endpoints.login}`,
    method: "POST",
    body: data,
  });
  return res.data;
}
