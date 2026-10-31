"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, CalendarDays, SquarePlus, Settings, Volleyball } from "lucide-react";

// Menu items for the MANAGEMENT section
const menuItems = [
  {
    title: "My Bookings",
    href: "/my-booking",
    icon: CalendarDays,
  },
  {
    title: "Add Facility",
    href: "/add-facilities",
    icon: SquarePlus,
  },
  {
    title: "Manage Facilities",
    href: "/manage-facilities",
    icon: Settings,
  },
];

const SideNavbar = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <aside className="sticky top-0 h-screen w-72 shrink-0 overflow-y-auto border-r border-l-white bg-white">
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5">
          <span className="rounded-2xl bg-green-600 p-2.5 text-white shadow-sm shadow-green-500/30">
            <Volleyball className="h-6 w-6" />
          </span>
          <p className="text-2xl font-extrabold">
            <span className="text-gray-900">Sport</span>
            <span className="text-green-600">Nest</span>
          </p>
        </div>

        <hr className="border-gray-100" />

        {/* Menu */}
        <nav className="px-5 py-6">
          {/* Back to Home */}
          <Link
            href="/"
            className={`flex items-center gap-3 rounded-full px-4 py-3 font-semibold ${
              pathname === "/"
                ? "bg-green-600 text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <House className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>

          {/* Section title */}
          <p className="px-4 pb-2 pt-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            Management
          </p>

          {/* Management menu items */}
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mb-2 flex items-center gap-3 rounded-full px-4 py-3 font-semibold ${
                  isActive
                    ? "bg-green-600 text-white shadow-md shadow-green-500/20"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Page content */}
      <main className="flex-1">{children}</main>
    </>
  );
};

export default SideNavbar;
