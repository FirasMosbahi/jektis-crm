"use client";

import React from "react";
import { CreationMethod } from "@jektis-crm/enums/creation-method";
import { DemandCreationSectionProps } from "@jektis-crm/types/demand-creation-section-props";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function RequestInfos({
  onPrev,
  onNext,
}: DemandCreationSectionProps): React.ReactElement {
  const validationSchema = yup.object().shape({
    title: yup.string().required(),
    creationMethod: yup.string().required(),
    description: yup.string().required().min(30),
    deadline: yup.date().optional(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  return (
    <div className="rounded-sm max-w-[700px] py-4 mx-auto px-8 border border-stroke shadow-default">
      <div className="border-b border-stroke px-6.5 py-4">
        <h3 className="font-medium text-black">Demand Infos</h3>
      </div>
      <form onSubmit={handleSubmit((data) => onNext(data))}>
        <div className="p-6.5 mt-4 grid grid-cols-2 gap-y-8 gap-x-12">
          <div className="mb-4.5 col-span-2">
            <label className="mb-3 block text-sm font-medium text-black">
              Demand Title :
            </label>
            <input
              type="text"
              {...register("title")}
              placeholder="Enter the demand title"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Should be accomplished before :
            </label>
            <input
              {...register("deadline")}
              type="date"
              placeholder="Should be done before :"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
              data-class="flatpickr-right"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Creation method :
            </label>
            <select
              {...register("creationMethod")}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition"
            >
              {Object.values(CreationMethod).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4.5 col-span-2">
            <label className="mb-3 block text-sm font-medium text-black">
              Description :
            </label>
            <textarea
              {...register("description")}
              placeholder="Enter a short description about the demand ..."
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
            type="submit"
            className="flex w-full justify-center rounded bg-[#3C50E0] text-white p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
