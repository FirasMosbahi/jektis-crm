"use client";

import ClientLayout from "@jektis-crm/components/layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout isAdmin={false}>{children}</ClientLayout>;
}
