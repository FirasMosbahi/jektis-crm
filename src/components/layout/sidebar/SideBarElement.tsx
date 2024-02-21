import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { capitalize } from "lodash";

export default function SideBarElement({
  element,
  icon,
}: {
  element: string;
  icon: React.ReactElement;
}): React.ReactElement {
  const pathname = usePathname();
  return (
    <Link
      href={`/${element}`}
      className={`group relative flex text-white items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark ${
        pathname.includes(`/${element}`) && "bg-graydark"
      }`}
    >
      {icon}
      {capitalize(element)}
    </Link>
  );
}
