import Breadcrumb from "@jektis-crm/components/general/Breadcrumb";
import React from "react";
import { hotelsReservationRequests } from "@jektis-crm/mocks/hotels-requests";
import AgentRequestCard from "@jektis-crm/components/dashboard/AgentRequestCard";
import { voyagesReservationRequests } from "@jektis-crm/mocks/voyages-requests";
import { visaRequests } from "@jektis-crm/mocks/visa-requests";
import { billetRequests } from "@jektis-crm/mocks/billet-requests";

export default function Page() {
  return (
    <div>
      <Breadcrumb pageName="Agent Dashboard" />

      <div className="flex flex-col gap-32 mt-20">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-8 text-black">
            In progress requests :
          </h2>
          <div className="flex flex-row flex-wrap gap-x-12 gap-y-8">
            {hotelsReservationRequests.map((request) => (
              <AgentRequestCard request={request} key={request.id} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-8 text-black">
            Completed requests :
          </h2>
          <div className="flex flex-row flex-wrap gap-x-12 gap-y-8 ">
            {voyagesReservationRequests.map((request) => (
              <AgentRequestCard request={request} key={request.id} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-8 text-black">
            Canceled requests :
          </h2>
          <div className="flex flex-row flex-wrap gap-x-12 gap-y-8 ">
            {visaRequests.map((request) => (
              <AgentRequestCard request={request} key={request.id} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-8 text-black">
            Missed deadline requests :
          </h2>
          <div className="flex flex-row flex-wrap gap-x-12 gap-y-8 ">
            {billetRequests.map((request) => (
              <AgentRequestCard request={request} key={request.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
