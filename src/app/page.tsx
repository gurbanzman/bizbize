import { CardHead } from "../components/card-head";
import { CardSettings } from "../components/card-settings";
import { MenuBar } from "../components/menu-bar";
import { FaRegComment,FaRegHeart } from "react-icons/fa";
import { Button } from "../components/ui/button";
import Link from "next/link";
import CopyButton from "../components/copy-button";
import Mega from "../components/mega";

export default function Home() {
  return (
    <Mega>
      <div className="border-b py-1 sticky top-0 z-10 bg-background">
        <MenuBar />
      </div>
      <div>
        <ul>
          <li className="border-b">
            <div className="w-[95%] mx-auto py-2">
              <div className="flex justify-between items-center">
                <div>
                  <CardHead title={`gurbanzada`} subtitle={`@gurbanzman`} variant={`row`} url={`/`} />
                </div>
                <CardSettings />
              </div>
              <div className="border p-3 rounded-lg">
                <h4 className="font-lora mb-3">Herşey daha yeni başlıyor</h4>
                <p className="font-lora">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                  eos rerum numquam praesentium consequuntur mollitia adipisci
                  explicabo laudantium vitae quibusdam doloribus ut velit
                  dolorem excepturi iste recusandae facere earum officia.
                </p>
                <div className="mt-3">
                  <p className="flex items-center gap-3 justify-end">
                    İmza:{" "}
                    <span className="font-monsieur_la_doulaise text-2xl">
                      gurbanzman
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="">
                  <Button
                    variant="link"
                    size="icon"
                    className="flex items-center gap-1 w-auto hover:no-underline app-element"
                  >
                    <FaRegHeart />
                    <span className="text-sm">120</span>
                  </Button>
                </div>
                <div className="">
                  <Button variant="link" size="icon" className="block w-auto hover:no-underline app-element">
                    <Link href={"/"} className="flex items-center gap-1">
                      <FaRegComment />
                      <span className="text-sm">120</span>
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-1">
                  <CopyButton text="Bu metni kopyala!" />
                  <span className="text-sm">120</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Mega>
  );
}
