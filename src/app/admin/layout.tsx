import ClientLayout from "@jektis-crm/components/layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout isAdmin={true}>{children}</ClientLayout>;
}
