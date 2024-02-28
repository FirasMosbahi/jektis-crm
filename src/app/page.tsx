"use client";
import Link from "next/link";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { LoginAgentFormData } from "@jektis-crm/types/form-data";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("email field is empty")
    .email("please provide a valid email"),
  password: yup
    .string()
    .required("password field is empty")
    .min(8, "password should contains at least 8 characters"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<LoginAgentFormData>({
    resolver: yupResolver(loginValidationSchema),
  });
  const router = useRouter();
  const handleLogin: SubmitHandler<LoginAgentFormData> = async (
    loginCredentials: LoginAgentFormData,
  ) => {
    const result = await signIn("credentials", {
      ...loginCredentials,
      redirect: false,
    });
    if (result.ok) {
      router.push("/demands/hotels");
    }
  };
  return (
    <div className="rounded-sm mt-16 max-w-[800px] mx-auto py-4 border text-gray-950 border-stroke bg-white shadow-default ">
      <div className="border-b border-stroke px-6.5 pb-2">
        <h3 className="px-12 font-medium text-black">Sign In</h3>
      </div>
      <form className="px-12 py-4 mt-8" onSubmit={handleSubmit(handleLogin)}>
        <div className="flex flex-col gap-8 p-6.5">
          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email address"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-black">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter password"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div className="mb-5.5 mt-5 flex items-center justify-between">
            <label htmlFor="formCheckbox" className="flex cursor-pointer">
              <div className="relative pt-0.5">
                <input
                  type="checkbox"
                  id="formCheckbox"
                  className="taskCheckbox sr-only"
                />
              </div>
              <p>Remember me</p>
            </label>

            <Link href="#" className="text-sm text-primary hover:underline">
              Forget password?
            </Link>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded bg-[#3C50E0] text-white p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
