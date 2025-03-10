"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  ChevronUp,
  Home,
  User2,
  Heart,
  Bell,
  Sun,
  Moon,
  Search,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "next-themes";

function CustomSidebar() {
  const { setTheme } = useTheme();
  const pathName = usePathname();
  // Menu items.
  const items = [
    {
      title: "Ana Sayfa",
      url: "/",
      icon: Home,
    },
    {
      title: "Beğenmeler",
      url: "#",
      icon: Heart,
    },
    {
      title: "Bildirimler",
      url: "#",
      icon: Bell,
    },
    {
      title: "Arama",
      url: "#",
      icon: Search,
    },
  ];
  return (
    <div>
      <div>
        <Button variant="link">
          <Link href={""}>Biz Bize</Link>
        </Button>
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item.title} className="">
              <Link
                href={item.url}
                className={`text-base flex items-center gap-2 p-2 rounded-lg hover:bg-accent ${
                  pathName === item.url
                    ? "hover:text-sidebar-accent-foreground:hover font-semibold"
                    : ""
                }`}
              >
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Button asChild className="w-full mt-3">
          <Link href="/">Hikaye</Link>
        </Button>
      </div>
      <div className="absolute bottom-0 w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="mt-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center p-2 gap-2 rounded-lg hover:bg-accent cursor-pointer">
                <div className="flex items-center gap-1">
                  <User2 /> Username
                </div>
                <ChevronUp className="ml-auto" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default CustomSidebar;
