import { CalendarIcon } from "lucide-react";

import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function CardHead({ title, subtitle, url, variant }) {
  return (
    <HoverCard>
      <div className={`flex ${variant === "row" ? "flex-row" : "flex-col"}`}>
        <HoverCardTrigger asChild>
          <Button variant="link" className="hover:no-underline p-0">
            <Link href={url} className="app-element">
              {title}
            </Link>
          </Button>
        </HoverCardTrigger>
        <HoverCardTrigger className={`${variant === "col" ? "mt-[-0.7rem]" : ""}`} asChild>
          <Button
            variant="link"
            className="hover:no-underline text-zinc-500 p-0 ml-2"
          >
            <Link href={url}>{subtitle}</Link>
          </Button>
        </HoverCardTrigger>
      </div>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
