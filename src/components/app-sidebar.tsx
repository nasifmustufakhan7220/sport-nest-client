"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { House, Book, Settings, Plus, SportShoe } from "lucide-react";

const data = {
  user: {
    FirstName: "Sport",
    LastName: "Nest",
    icon: <SportShoe/>,
  },

  navMain: [
    {
      title: "Back to Home",
      href: "/",
      icon: <House />,
    },

    {
      title: "Add Facilities",
      href: "/add-facilities",
      icon: <Plus />,
    },
    {
      title: "Manage Facilities",
      href: "/manage-facilities",
      icon: <Settings />,
    },
    {
      title: "My Booking",
      href: "/my-booking",
      icon: <Book />,
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      


      <SidebarContent>
        <div className="flex items-center text-3xl font-bold justify-center mt-20">
       <p className="bg-green-700 text-white p-1 rounded-2xl">{data.user.icon}</p>
        <p>{data.user.FirstName}</p>
        <p className="text-green-600">{data.user.LastName}</p>
      </div>


      
        <NavMain items={data.navMain} />
      </SidebarContent>



      <SidebarFooter>
        {data.user.FirstName}
        {data.user.icon}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
