"use client"

import {
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ChevronsUpDownIcon, SportShoe} from "lucide-react"

export function NavUser({
  user,
}: {
  user: {
    FirstName: string
    LastName: string,
  }
}) {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton size="lg" className="aria-expanded:bg-muted" />
            }
          >
            
              <span className="truncate text-xs">{<SportShoe/>}</span>
            
            <span className="truncate font-medium">{user.FirstName}</span>

            <ChevronsUpDownIcon className="ml-auto size-4" />
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
