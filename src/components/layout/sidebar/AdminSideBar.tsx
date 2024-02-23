"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  AchatIcon,
  CalendarIcon,
  DashboardIcon,
  FactureIcon,
  HotelIcon,
  ProfileIcon,
  SidebarTrigger,
  TablesIcon,
  TicketIcon,
  UpdateIcon,
  UrgentIcon,
  VisaIcon,
  VoyageIcon,
} from "@jektis-crm/components/icons";
import SideBarElement from "@jektis-crm/components/layout/sidebar/SideBarElement";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export default function AdminSideBar({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/public">
          <Image
            width={176}
            height={32}
            src={"/images/logo/logo.svg"}
            alt="Logo"
            priority
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <SidebarTrigger />
        </button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <SideBarElement
                  element="dashboard"
                  link="/demands/dashboard"
                  icon={<DashboardIcon />}
                />
              </li>
              <li>
                <SideBarElement
                  element="add urgent"
                  link="/admin/urgent"
                  icon={<UrgentIcon />}
                />
              </li>
              <li>
                <SideBarElement
                  element="add hotel"
                  link="/admin/hotels"
                  icon={<HotelIcon />}
                />
              </li>
              <li>
                <SideBarElement
                  element="add voyage"
                  link="/admin/voyages"
                  icon={<VoyageIcon />}
                />
              </li>
              <li>
                <SideBarElement
                  element="add visa"
                  link="/admin/visa"
                  icon={<VisaIcon />}
                />
              </li>
              <li>
                <SideBarElement
                  element="add billet"
                  link="/admin/billet"
                  icon={<TicketIcon />}
                />
              </li>
              <li>
                <SideBarElement
                  element="add facture"
                  link="/admin/facture"
                  icon={<FactureIcon />}
                />
              </li>
              <li>
                <SideBarElement
                  element="add achat"
                  link="/admin/achat"
                  icon={<AchatIcon />}
                />
              </li>
              <li>
                <SideBarElement
                  element="add update"
                  link="/demands/update"
                  icon={<UpdateIcon />}
                />
              </li>
              <li>
                <SideBarElement
                  element="add agent"
                  link="/admin/add-agent"
                  icon={<ProfileIcon />}
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
}
