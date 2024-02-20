import Link from "next/link";
interface BreadcrumbProps {
  pageName: string;
}
export default function Breadcrumb({ pageName }: BreadcrumbProps) {
  return (
    <div className="mb-6 pt-8 pl-4 flex flex-col gap-3 mt-8 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-2xl text-black">
        {pageName}
      </h2>
    </div>
  );
}
