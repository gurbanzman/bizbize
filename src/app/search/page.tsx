import React from "react";
import Mega from "../../components/mega";
import { CardHead } from "../../components/card-head";
import { CardSettings } from "../../components/card-settings";
import { SearchBar } from "../../components/search-bar";

function page() {
  return (
    <Mega>
      <div className="sticky top-0 z-10">
        <form action="">
          <div className="p-2">
            <SearchBar />
          </div>
        </form>
      </div>
      <div>
        <ul>
          <li className="border-b">
            <div className="w-[95%] mx-auto py-2">
              <div className="flex justify-between items-center">
                <div>
                  <CardHead title={`gurbanzada`} subtitle={`@gurbanzman`} variant={`row`} url={`/`}/>
                </div>
                <CardSettings />
              </div>
            </div>
          </li>
          <li className="border-b">
            <div className="w-[95%] mx-auto py-2">
              <div className="flex justify-between items-center">
                <div>
                  <CardHead title={`gurbanzada`} subtitle={`@gurbanzman`} variant={`row`} url={`/`}/>
                </div>
                <CardSettings />
              </div>
            </div>
          </li>
          <li className="border-b">
            <div className="w-[95%] mx-auto py-2">
              <div className="flex justify-between items-center">
                <div>
                  <CardHead title={`gurbanzada`} subtitle={`@gurbanzman`} variant={`row`} url={`/`}/>
                </div>
                <CardSettings />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Mega>
  );
}

export default page;
