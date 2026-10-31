"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ChevronDown, Volleyball } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "@/app/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const getInitials = (name: string) => {
    if (!name) return "U";
    const words = name?.trim().split(" "); // নামকে শব্দে ভাগ করো
    const first = words[0]?.[0] ?? ""; // প্রথম শব্দের প্রথম অক্ষর
    const last = words.length > 1 ? words[words.length - 1][0] : ""; // শেষ শব্দের প্রথম অক্ষর
    return (first + last).toUpperCase();
  };
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-18 max-w-280 items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <div className="flex items-center gap-3 px-6 py-5">
            <span className="rounded-2xl bg-green-600 p-2.5 text-white shadow-sm shadow-green-500/30">
              <Volleyball className="h-6 w-6" />
            </span>
            <p className="text-2xl font-extrabold">
              <span className="text-gray-900">Sport</span>
              <span className="text-green-600">Nest</span>
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className={`font-medium transition-colors hover:text-green-600 ${
              pathname === "/" ? "text-green-600" : "text-slate-700"
            }`}
          >
            Home
          </Link>

          <Link
            href="/all-facilities"
            className={`font-medium  transition-colors hover:text-green-600 ${pathname === "/all-facilities" ? "text-green-600" : "text-slate-700"}`}
          >
            All Facilities
          </Link>

          <Link
            href="/my-booking"
            className={`font-medium  transition-colors hover:text-green-600 ${pathname === "/my-booking" ? "text-green-600" : "text-slate-700"}`}
          >
            My Bookings
          </Link>

          <Link
            href="/add-facilities"
            className={`font-medium  transition-colors hover:text-green-600 ${pathname === "/add-facilities" ? "text-green-600" : "text-slate-700"}`}
          >
            Add Facility
          </Link>

          <Link
            href="/manage-facilities"
            className={`font-medium  transition-colors hover:text-green-600 ${pathname === "/manage-facilities" ? "text-green-600" : "text-slate-700"}`}
          >
            Manage Facilities
          </Link>
        </div>

        <div>
          {/* Avatar */}

          {isPending ? <Spinner/> : session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 outline-none hover:bg-slate-100">
                <Avatar size="lg">
                  {session.user.image && (
                    <AvatarImage
                      src={session.user.image}
                      alt={session.user.name}
                    />
                  )}
                  <AvatarFallback className="bg-green-600 text-sm font-bold text-white">
                    {getInitials(session.user.name)}
                  </AvatarFallback>
                </Avatar>

                <span className="max-w-32 truncate text-sm font-semibold uppercase text-slate-700">
                  {session.user.name}
                </span>

                <ChevronDown size={17} className="text-slate-600" />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    <p className="text-sm font-semibold text-slate-900">
                      {session.user.name}
                    </p>
                    <p className="text-xs font-normal text-slate-500">
                      {session.user.email}
                    </p>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => router.push("/my-booking")}>
                    My Bookings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => router.push("/manage-facilities")}
                  >
                    Manage Facilities
                  </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="text-red-600"
                  onClick={() =>
                    signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          router.push("/sign-in");
                        },
                      },
                    })
                  }
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/sign-in">
              <Button className="cursor-pointer bg-green-600 text-white hover:bg-green-500">
                Log in
              </Button>
            </Link>
          )}
          {/* Username */}
        </div>
      </nav>
    </header>
  );
}
