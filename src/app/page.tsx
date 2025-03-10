import { CardHead } from "../components/card-head";
import { CardSettings } from "../components/card-settings";
import { MenuBar } from "../components/menu-bar";


export default function Home() {
  return (
    <>
      <div className="border-b py-1">
        <MenuBar />
      </div>
      <div>
        <ul>
          <li>
            <div className="w-[95%] mx-auto py-2">
              <div className="flex justify-between items-center">
                <div>
                  <CardHead />
                </div>
                <CardSettings />
              </div>
              <div>
                {/* post title */}
                {/* post content */}
                {/* signature */}
              </div>
              <div>
                {/* actions */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
