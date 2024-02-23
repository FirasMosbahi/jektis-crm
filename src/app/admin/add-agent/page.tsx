export default function Page() {
  return (
    <div className="rounded-sm max-w-[700px] py-4 mx-auto px-8 border border-stroke bg-white shadow-default">
      <div className="border-b border-stroke px-6.5 py-4">
        <h3 className="font-medium text-black">Sign Up Form</h3>
      </div>
      <form action="#">
        <div className="p-6.5 mt-4 flex flex-col gap-8">
          <div className="mb-4.5">
            <label className="mb-3 block text-sm font-medium text-black">
              Name
            </label>
            <input
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
              type="password"
              placeholder="Re-enter password"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
            />
          </div>
          <button className="flex w-full justify-center rounded bg-[#3C50E0] text-white p-3 font-medium text-gray hover:bg-opacity-90">
            Create Agent
          </button>
        </div>
      </form>
    </div>
  );
}
