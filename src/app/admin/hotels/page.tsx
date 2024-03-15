"use client";

import ClientInfo from "@jektis-crm/components/create-request/ClientInfo";
import RequestInfos from "@jektis-crm/components/create-request/RequestInfos";
import HotelDetails from "@jektis-crm/components/create-request/HotelDetails";
import { useCallback, useState } from "react";
import { Client } from "@jektis-crm/types/client";
import { HotelReservationRequest } from "@jektis-crm/types/hotel";
import { createHotelReservationDemand } from "@jektis-crm/actions/demands/hotels";

export default function Page() {
  const [step, setStep] = useState<number>(0);

  const [formState, setFormState] = useState({});

  const next = (data) => {
    console.log("before", formState);
    setFormState((prev) => ({ ...prev, ...data }));
    console.log("after", formState);
    setStep((prevState) => prevState + 1);
  };
  const submit = async (data) => {
    console.log("before", formState);
    setFormState((prev) => ({ ...prev, ...data }));
    console.log("after", formState);
    await createHotelReservationDemand({ ...formState, ...data });
  };
  const prev = () => setStep((prevState) => prevState - 1);

  return (
    <div>
      {step === 0 ? (
        <ClientInfo onNext={next} />
      ) : step === 1 ? (
        <RequestInfos onNext={next} onPrev={prev} />
      ) : (
        <HotelDetails onPrev={prev} onNext={submit} />
      )}
    </div>
  );
}
