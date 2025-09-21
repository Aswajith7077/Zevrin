"use client";

import { Command, Search, SidebarIcon } from "lucide-react";

// import { SearchForm } from "@/components/search-form"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { Input, InputWrapper } from "../ui/input";
import { Kbd } from "../ui/kbd";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <InputWrapper className="flex flex-row max-w-[100px] py-5 gap-3 items-center md:min-w-[500px] rounded-full">
          <Search />
          <Input placeholder="Search Deals, Connections, AI prompts" />
          <Kbd className="text-lg text-gray-500 px-4">
            <Command /> +K
          </Kbd>
        </InputWrapper>
        {/* <SearchForm className="w-full sm:ml-auto sm:w-auto" /> */}
      </div>
    </header>
  );
}
