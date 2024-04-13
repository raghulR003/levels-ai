import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
        className
      )}
    >
      <Link href="/learn">
      <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/banner.png" height={40} width={40} alt="Banner" />
          <h1 className="text-2xl font-extrabold text-red-800 tracking-wide">
            Levels
          </h1>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-y-2">
      <SidebarItem 
          label="The System" 
          href="/thesystem"
          iconSrc="/connection.png"
        />
        <SidebarItem label="Guilds" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
        <SidebarItem 
          label="Notifications" 
          href="/notifications"
          iconSrc="/notifications.svg"
        />
      </div>

      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
