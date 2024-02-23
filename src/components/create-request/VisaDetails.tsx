import { DemandCreationSectionProps } from "@jektis-crm/types/demand-creation-section-props";
import { VoyageType } from "@jektis-crm/enums/voyage-type";
import React from "react";

export default function VisaDetails({
  onPrev,
  onNext,
}: DemandCreationSectionProps) {
  return (
    <div className="rounded-sm max-w-[700px] py-4 mx-auto px-8 border border-stroke shadow-default">
      <div className="border-b border-stroke px-6.5 py-4">
        <h3 className="font-medium text-black">Visa Infos</h3>
      </div>
      <div>
        <div className="p-6.5 mt-4 flex flex-col gap-y-6">
          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Destination :
            </label>
            <input
              type="text"
              placeholder="Enter the visa destination"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Duration :
            </label>
            <input
              type="text"
              placeholder="Enter the visa duration"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Visa starts from :
            </label>
            <input
              type="date"
              placeholder="Enter the number of the reserved places"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between gap-x-40 mt-12">
          <button
            onClick={onPrev}
            className="flex w-full justify-center rounded border border-solid border-gray-500 text-white p-3 font-medium text-gray-800 hover:bg-opacity-90"
          >
            Prev
          </button>
          <button
            onClick={onNext}
            className="flex w-full justify-center rounded bg-[#3C50E0] text-white p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Create demand
          </button>
        </div>
      </div>
    </div>
  );
}
