"use client";

import React from "react";
import { DemandCreationSectionProps } from "@jektis-crm/types/demand-creation-section-props";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { emptyStringToUndefined } from "@jektis-crm/utils/empty-string-to-undefined";
export default function ClientInfo({
  onNext,
}: DemandCreationSectionProps): React.ReactElement {
  const validationSchema = yup.object().shape({
    fullName: yup.string().required("please enter the client name"),
    email: yup.string().required("please enter the client email"),
    facebook: yup.string().transform(emptyStringToUndefined).optional(),
    whatsApp: yup.string().transform(emptyStringToUndefined).optional(),
    phoneNumber: yup.string().transform(emptyStringToUndefined).optional(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  return (
    <div className="rounded-sm max-w-[700px] py-4 mx-auto px-8 border border-stroke shadow-default">
      <div className="border-b border-stroke px-6.5 py-4">
        <h3 className="font-medium text-black">Client Infos</h3>
      </div>
      <form onSubmit={handleSubmit((data) => onNext({ client: data }))}>
        <div className="p-6.5 mt-4 grid grid-cols-2 gap-x-16 gap-y-6">
          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Client name :
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="Enter the client full name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter the client email address"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Client Phone Number :
            </label>
            <input
              {...register("phoneNumber")}
              type="text"
              placeholder="Enter the client phone number"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Client Whatsapp :
            </label>
            <input
              {...register("whatsApp")}
              type="text"
              placeholder="Enter the client whatsapp number"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Client Facebook :
            </label>
            <input
              {...register("facebook")}
              type="text"
              placeholder="Enter the client facebook link"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
        </div>
        <div className="flex flex-row justify-end mt-12">
          <button
            type="submit"
            className="flex w-[40%] justify-center rounded bg-[#3C50E0] text-white p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
