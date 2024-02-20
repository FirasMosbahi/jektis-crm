import Link from "next/link";
import Image from "next/image";
import HeaderNotifications from "@jektis-crm/components/layout/header/HeaderNotifications";
import HeaderUser from "@jektis-crm/components/layout/header/HeaderUser";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex py-2 items-center justify-end w-full gap-8 2xsm:gap-7">
        <HeaderNotifications />
        <HeaderUser />
      </div>
    </header>
  );
};

export default Header;
