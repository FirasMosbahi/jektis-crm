"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="rounded-sm mt-16 max-w-[800px] mx-auto py-4 border text-gray-950 border-stroke bg-white shadow-default ">
      <div className="border-b border-stroke px-6.5 pb-2">
        <h3 className="px-12 font-medium text-black">Sign In</h3>
      </div>
      <form className="px-12 py-4 mt-8" action="#">
        <div className="flex flex-col gap-8 p-6.5">
          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-black">
              Password
            </label>
            <input
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

          <button className="flex w-full justify-center rounded bg-[#3C50E0] text-white p-3 font-medium text-gray hover:bg-opacity-90">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
