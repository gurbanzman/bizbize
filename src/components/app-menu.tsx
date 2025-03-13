"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { FaHeart, FaRegHeart, FaUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import {
  IoNotificationsOutline,
  IoNotificationsSharp,
  IoSearch,
} from "react-icons/io5";

function AppMenu() {
  const pathName = usePathname();
  // Menu items.
  const items = [
    {
      title: "Ana Sayfa",
      url: "/",
      icon: GoHome,
      selectedIcon: GoHomeFill,
    },
    {
      title: "Bildirimler",
      url: "#",
      icon: IoNotificationsOutline,
      selectedIcon: IoNotificationsSharp,
    },
    {
      title: "Arama",
      url: "#",
      icon: IoSearch,
      selectedIcon: IoSearch,
    },
    {
      title: "Profile",
      url: "#",
      icon: FaRegUser,
      selectedIcon: FaUser,
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
                {pathName === item.url ? (
                  <item.selectedIcon size={24} />
                ) : (
                  <item.icon size={24} />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppMenu;
