import SideNavbar from "./_components/SideNavbar";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen">
      <SideNavbar>
        {children}
      </SideNavbar>
    </div>
  );
}
