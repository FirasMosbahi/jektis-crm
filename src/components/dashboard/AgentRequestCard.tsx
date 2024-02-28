import RequestIcon from "@jektis-crm/components/common/RequestIcon";
import { nextStatus } from "@jektis-crm/enums/request-status";
import { ClientRequest } from "@jektis-crm/types/request";

export default function AgentRequestCard({
  request,
}: {
  request: ClientRequest;
}) {
  return (
    <div className="w-[300px] bg-white rounded-lg shadow-lg">
      <div className="border-b px-4 pb-6">
        <div className="text-center my-4">
          <div className="w-full flex flex-row justify-center py-4">
            <RequestIcon requestType={request.requestType} />
          </div>
          <div className="py-2">
            <h3 className="font-bold text-2xl text-gray-800  mb-1">
              {request.title}
            </h3>
            <div className="inline-flex text-gray-700  items-center">
              {request.client.fullName}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-2">
          {nextStatus(request.status) ? (
            <button className="flex-1 rounded-full bg-blue-600  text-white  antialiased font-bold hover:bg-blue-800 px-4 py-2">
              Mark as {nextStatus(request.status)}
            </button>
          ) : (
            <></>
          )}

          <button className="flex-1 rounded-full border-2 border-gray-400  font-semibold text-black px-4 py-2">
            Cancel
          </button>
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="flex gap-2 items-center text-gray-800 mb-4">
          <strong className="text-black">Created At :</strong>{" "}
          {request.createdAt.toString().split("T")[0]}
        </div>
        {request.deadline && (
          <div className="flex gap-2 items-center text-gray-800 mb-4">
            <strong className="text-black">deadline :</strong>{" "}
            {request.deadline.toString().split("T")[0]}
          </div>
        )}
        {request.closedAt && (
          <div className="flex gap-2 items-center text-gray-800 mb-4">
            <strong className="text-black ">Closed At :</strong>{" "}
            {request.closedAt.toString().split("T")[0]}
          </div>
        )}
      </div>
    </div>
  );
}
