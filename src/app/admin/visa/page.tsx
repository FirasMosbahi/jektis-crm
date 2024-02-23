"use client";

import ClientInfo from "@jektis-crm/components/create-request/ClientInfo";
import RequestInfos from "@jektis-crm/components/create-request/RequestInfos";
import HotelDetails from "@jektis-crm/components/create-request/HotelDetails";
import { useState } from "react";
import VisaDetails from "@jektis-crm/components/create-request/VisaDetails";

export default function Page() {
  const [step, setStep] = useState<number>(0);
  const next = () => setStep((prevState) => prevState + 1);
  const prev = () => setStep((prevState) => prevState - 1);

  return (
    <div>
      {step === 0 ? (
        <ClientInfo onNext={next} />
      ) : step === 1 ? (
        <RequestInfos onNext={next} onPrev={prev} />
      ) : (
        <VisaDetails onPrev={prev} onNext={() => {}} />
      )}
    </div>
  );
}
