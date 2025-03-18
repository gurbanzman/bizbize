"use client";

import React from "react";
import CustomSidebar from "./custom-sidebar";
import { SearchBar } from "./search-bar";
import AppMenu from "./app-menu";
import FixedMenu from "./fixed-menu";
import { usePathname } from "next/navigation";
import { CardHead } from "./card-head";
import { Button } from "./ui/button";

function Mega({ children }) {
  const pathName = usePathname();

  return (
    <>
      <div className="w-3/4 flex justify-between mx-auto min-w-[1400px] custom-menu">
        <div className="h-screen w-[30%] pr-2 left-menu">
          {/* <SidebarProvider>
                    <AppSidebar />
                    <main>
                      <SidebarTrigger />
                    </main>
                  </SidebarProvider> */}
          <div className="relative h-full">
            <CustomSidebar />
          </div>
        </div>

        <main className="w-4/5 border h-screen overflow-scroll no-scrollbar small-screen-main">
          <div className="">{children}</div>
        </main>
        <div className="h-screen w-[35%] right-menu">
          <div>
            {pathName === "/search" ? (
              ""
            ) : (
              <div>
                <form action="">
                  <div className="p-2">
                    <SearchBar />
                  </div>
                </form>
              </div>
            )}
            <div className="border rounded-2xl mt-2 ml-2 p-4">
              <h1>Öneriler</h1>
              <ul>
                <li className="border-b">
                  <div className="py-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardHead
                          title={`gurbanzada`}
                          subtitle={`@gurbanzman`}
                          variant={`col`}
                          url={`/`}
                        />
                      </div>
                      <Button variant="primary" className="rounded-full">
                        Takip <span className="custom-hidden-btn">et</span>
                      </Button>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div className="py-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardHead
                          title={`gurbanzada`}
                          subtitle={`@gurbanzman`}
                          variant={`col`}
                          url={`/`}
                        />
                      </div>
                      <Button variant="primary" className="rounded-full">
                        Takip <span className="custom-hidden-btn">et</span>
                      </Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <AppMenu />
        <FixedMenu />
      </div>
    </>
  );
}

export default Mega;
