import { getServerSession } from "next-auth";
import { options } from "@jektis-crm/app/api/auth/[...nextauth]/option";

type Req = {
  url: string;
  method: string;
  body?: any;
  addAccessToken?: boolean;
  tags?: string[];
};

type Res = {
  data: any;
  message: string;
  statusCode: number;
};

export async function fetcher({
  url,
  method,
  body,
  addAccessToken,
  tags,
}: Req): Promise<Res> {
  try {
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
    };

    if (addAccessToken) {
      const session = await getServerSession(options);
      headers.Authorization = `Bearer ${session?.token}`;
    }

    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
      next: { tags },
    });

    // if (!response.ok) {
    //   if(response.status===401){redirect('/')}
    //   const errorResponse = await response.json();
    //   throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorResponse.message}`);
    // }

    const result = await response.json();

    return result;
  } catch (error) {
    throw error; // Re-throw the error to let the caller handle it
  }
}
