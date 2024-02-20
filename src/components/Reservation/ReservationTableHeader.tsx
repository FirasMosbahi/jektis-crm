import React from "react";

export default function ReservationTableHeader(): React.ReactElement {
  return (
    <thead>
      <tr className="bg-gray-2 text-left">
        <th className="min-w-[220px] px-4 py-4 font-medium text-black xl:pl-11">
          Request
        </th>
        <th className="min-w-[150px] px-4 py-4 font-medium text-black">
          Creation date
        </th>
        <th className="min-w-[120px] px-4 py-4 font-medium text-black">
          Status
        </th>
        <th className="px-4 py-4 font-medium text-black">Actions</th>
      </tr>
    </thead>
  );
}
