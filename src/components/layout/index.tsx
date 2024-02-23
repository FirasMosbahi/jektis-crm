"use client";
import React, { useState } from "react";
import AgentSideBar from "@jektis-crm/components/layout/sidebar/AgentSideBar";
import Header from "@jektis-crm/components/layout/header";
import AdminSideBar from "@jektis-crm/components/layout/sidebar/AdminSideBar";

export default function ClientLayout({
  children,
  isAdmin,
}: {
  children: React.ReactNode;
  isAdmin: boolean;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-[#F1F5F9]">
        {isAdmin ? (
          <AdminSideBar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        ) : (
          <AgentSideBar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
