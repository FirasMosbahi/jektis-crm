"use client";

import ClientInfo from "@jektis-crm/components/create-request/ClientInfo";
import RequestInfos from "@jektis-crm/components/create-request/RequestInfos";
import { useState } from "react";
import BilletDetails from "@jektis-crm/components/create-request/BilletDetails";

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
        <BilletDetails onPrev={prev} onNext={() => {}} />
      )}
    </div>
  );
}
