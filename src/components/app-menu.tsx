'use client';

import { Bell, Heart, Home, Search,User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function AppMenu() {
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
    {
      title: "Profile",
      url: "#",
      icon: User,
    },
  ];
  return (
    <div className="app-menu hidden absolute left-0 w-full bottom-0 bg-white border-t">
      <div className="w-3/4 mx-auto">
        <ul className="flex justify-between">
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
                <item.icon className={`fill-dark text-black dark:text-white ${pathName === item.url ? "dark:fill-white" : ""}`} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppMenu;
