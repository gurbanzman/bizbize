import React from "react";
import CustomSidebar from "./custom-sidebar";
import { SearchBar } from "./search-bar";
import AppMenu from "./app-menu";
import FixedMenu from "./fixed-menu";

function Mega({ children }) {
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
        <div className="h-screen w-[30%] right-menu">
          <div>
            <div>
              <form action="">
                <div className="p-2">
                  <SearchBar />
                </div>
              </form>
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
