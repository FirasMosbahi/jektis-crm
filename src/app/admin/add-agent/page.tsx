"use client";

import { useForm } from "react-hook-form";
import { AddAgentFormData } from "@jektis-crm/types/form-data";
import createAgent from "@jektis-crm/firebase/create-agent";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddAgentFormData>();

  const onSubmit = handleSubmit(async (data: AddAgentFormData) => {
    if (data.password == data.rePassword) {
      await createAgent(data);
    }
  });

  return (
    <div className="rounded-sm max-w-[700px] py-4 mx-auto px-8 border border-stroke bg-white shadow-default">
      <div className="border-b border-stroke px-6.5 py-4">
        <h3 className="font-medium text-black">Sign Up Form</h3>
      </div>
      <form onSubmit={onSubmit}>
        <div className="p-6.5 mt-4 flex flex-col gap-8">
          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Name
            </label>
            <input
              {...register("name", {
                maxLength: 25,
                minLength: 3,
                required: true,
              })}
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Email
            </label>
            <input
              {...register("email", {
                maxLength: 25,
                minLength: 3,
                required: true,
              })}
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Password
            </label>
            <input
              {...register("password", {
                maxLength: 25,
                minLength: 3,
                required: true,
              })}
              type="password"
              placeholder="Enter password"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div className="mb-5.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Re-type Password
            </label>
            <input
              {...register("rePassword", {
                maxLength: 25,
                minLength: 3,
                required: true,
              })}
              type="password"
              placeholder="Re-enter password"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded bg-[#3C50E0] text-white p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Create Agent
          </button>
        </div>
      </form>
    </div>
  );
}
