"use client";

import * as React from "react";
import {
  Activity,
  ChartNoAxesColumn,
  Compass,
  LifeBuoy,
  Link,
  Map,
  PieChart,
  Send,
  Sparkles,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavProjects } from "@/components/sidebar/nav-projects";
import { NavSecondary } from "@/components/sidebar/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { appname } from "@/constants/app";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Stats",
      url: "#",
      icon: ChartNoAxesColumn,
      isActive: true,
      items: [
        {
          title: "All Stats",
          url: "/all-stats",
        },
        {
          title: "Trades",
          url: "/trade-stats",
        },
        {
          title: "Deals",
          url: "/trade-stats",
        },
      ],
    },
    {
      title: "Integrations",
      url: "#",
      icon: Link,
      items: [
        {
          title: "Messaging",
          url: "/message",
        },
        {
          title: "Notes",
          url: "/notes",
        },
        {
          title: "Meetings",
          url: "/meetings",
        },
        {
          title: "Calendar",
          url: "/calendar",
        },
      ],
    },
    {
      title: "Dealings",
      url: "#",
      icon: Activity,
      items: [
        {
          title: "Holding",
          url: "#",
        },
        {
          title: "Ongoing",
          url: "#",
        },
      ],
    },
    {
      title: "AI ",
      url: "#",
      icon: Sparkles,
      items: [
        {
          title: "Assistance",
          url: "#",
        },
        {
          title: "Summarization",
          url: "#",
        },
        {
          title: "Negotiation",
          url: "#",
        },
        {
          title: "Visual",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Explore Deals",
      url: "#",
      icon: Compass,
    },
    {
      name: "Connections",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <img src="/Zevrin.svg" alt="Zevrin Logo" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-3xl font-semibold">
                    {appname}
                  </span>
                  {/* <span className="truncate text-xs">Enterprise</span> */}
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <Card className="flex gap-2 p-6">
          <CardTitle className="font-bold text-md">Feedback</CardTitle>
          <CardDescription>
            Spend some time in providing feedback for our product, this will be
            very helpful
          </CardDescription>
          <Button className="rounded-full mt-5">Provide Feedback</Button>
        </Card>
      </SidebarFooter>
    </Sidebar>
  );
}
