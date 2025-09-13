
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { contents } from "@/constants/navbar";
import { ContentType } from "@/types/navbar.type";
import { appname as AppName, LogoIcon, navigationURLs } from "@/constants/app";

const getMenuContent = (content: ContentType) => {
  console.log(content)
  return content.type === "double_column" ? (
    <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[700px] md:grid-cols-2 lg:w-[700px] ">
        {content?.subcontents.map((subcontent) => (
          <div
            key={subcontent.title}
            className="flex flex-row items-center gap-4 w-full"
          >
            {subcontent.icon}
            <ListItem
              title={subcontent.title}
              href={subcontent.url}
              className="text-base font-semibold w-full"
            >
              {subcontent.description}
            </ListItem>
          </div>
        ))}
      </ul>
    </NavigationMenuContent>
  ) : (
    <NavigationMenuContent>
      <ul className="grid gap-3 p-4 h-[350px] md:w-[600px] lg:w-[650px] lg:grid-cols-[.75fr_1fr]">
        <li className="row-span-3">
          <NavigationMenuLink asChild>
            <Link
              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
              href="/"
            >
              <div className="mb-2 mt-4 text-lg font-semibold">
                Try our New Agent
              </div>
              <p className="text-sm leading-tight text-gray-400">
                A new AI agent that can help you with your shopping experience.
              </p>
            </Link>
          </NavigationMenuLink>
        </li>
        {content?.subcontents.map((subcontent) => (
          <div
            key={subcontent.title}
            className="flex flex-row items-center gap-4 w-full"
          >
            {subcontent.icon}
            <ListItem
              title={subcontent.title}
              href={subcontent.url}
              className="text-base font-semibold w-full"
            >
              {subcontent.description}
            </ListItem>
          </div>
        ))}
      </ul>
    </NavigationMenuContent>
  );
};

const NavLinks = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row items-center gap-2 w-full font-bold">
        {contents.map((content, index) => {
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger
                className={`${navigationMenuTriggerStyle()} text-[15px] py-5 font-semibold`}
              >
                {content.title}
              </NavigationMenuTrigger>

              {getMenuContent(content)}
            </NavigationMenuItem>
          );
        })}
        <NavigationMenuLink
          href={navigationURLs.documentation}
          className={`${navigationMenuTriggerStyle()} font-semibold text-[15px] py-5`}
        >
          Documentation
        </NavigationMenuLink>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  );
});

ListItem.displayName = "ListItem";


const Navbar = () => {
  return (
    <div className="flex flex-row items-center border-none justify-between w-full px-[10%] py-10 text-white bg-slate-950 ">
      <div className="flex flex-row items-center gap-3">
        <Image
          width={45}
          height={45}
          src={LogoIcon}
          alt="Logo"
          className=" "
        />
        <h1 className="text-2xl font-bold ">{AppName}</h1>
      </div>
      <NavLinks />
      <div className="flex flex-row gap-4">
        <Link href={navigationURLs.login}>
          <Button variant="default" className="p-5 px-7 text-[14px] font-semibold rounded-full">
            Try for Free
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;