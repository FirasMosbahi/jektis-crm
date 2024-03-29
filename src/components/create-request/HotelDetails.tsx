import React from "react";
import CustomRadioButton from "@jektis-crm/components/common/CustomRadioButton";
import { DemandCreationSectionProps } from "@jektis-crm/types/demand-creation-section-props";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function HotelDetails({
  onPrev,
  onNext,
}: DemandCreationSectionProps): React.ReactElement {
  const validationSchema = yup.object().shape({
    location: yup.string().required(),
    hotelName: yup.string().required(),
    isTunisianHotel: yup.boolean().required().default(false),
    numberOfChambres: yup.number().required(),
  });
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  return (
    <div className="rounded-sm max-w-[700px] py-4 mx-auto px-8 border border-stroke shadow-default">
      <div className="border-b border-stroke px-6.5 py-4">
        <h3 className="font-medium text-black">Hotel Infos</h3>
      </div>
      <form onSubmit={handleSubmit((data) => onNext(data))}>
        <div className="p-6.5 mt-4 grid grid-cols-2 gap-y-8 gap-x-12">
          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Hotel name :
            </label>
            <input
              {...register("hotelName")}
              type="text"
              placeholder="Enter the hotel name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Number of chambres :
            </label>
            <input
              {...register("numberOfChambres")}
              type="number"
              placeholder="Enter the number of chambres"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div className="mb-5.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Location :
            </label>
            <input
              {...register("location")}
              type="text"
              placeholder="Enter the hotel location"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
          <div className="mb-4.5 h-full flex flex-col justify-end pb-4">
            <CustomRadioButton
              handleClick={(value) => setValue("isTunisianHotel", value)}
              text="is tunisian hotel"
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
            Create demand
          </button>
        </div>
      </form>
    </div>
  );
}
