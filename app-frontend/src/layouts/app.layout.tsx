import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { Input, InputWrapper } from "@/components/ui/shadcn-base/input";
import { Kbd } from "@/components/ui/shadcn-base/kbd";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/shadcn-base/sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Command, Search } from "lucide-react";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex flex-1">
        <AppSidebar />
        <SidebarInset className="">
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <InputWrapper className="flex flex-row w-full py-5 gap-3 items-center md:min-w-[400px] lg:min-w-[600px] rounded-full">
                <Search />
                <Input
                  placeholder="Search Deals, Connections, AI prompts"
                  className="rounded-none"
                />
                <Kbd className="hidden md:flex  text-lg  px-4">
                  <Command /> +K
                </Kbd>
              </InputWrapper>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
