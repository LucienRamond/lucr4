"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import navigationMenuTriggerStyle from "@/components/ui/navigation-menu-trigger-style";
import { Link } from "@radix-ui/react-navigation-menu";
import {
  CircleQuestionMarkIcon,
  CircleUserRoundIcon,
  FolderCodeIcon,
  HomeIcon,
  SettingsIcon,
} from "lucide-react";
import { useLocation } from "react-router-dom";

export default function ComputerNavbar() {
  const location = useLocation();

  return (
    <div className=" fixed w-full flex justify-center">
      <NavigationMenu className="bg-(--secondary) border border-(--border) rounded-2xl">
        <NavigationMenuList className=" gap-0">
          <NavigationMenuItem className="border-r border-(--border)  h-20 flex items-center">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${
                location.pathname == "/" && "bg-(--input)/75"
              }`}
            >
              <Link
                href="/"
                className=" hover:bg-(--input) h-full w-full rounded-r-none rounded-l-[15px]"
              >
                <div className=" flex gap-2 p-2">
                  <HomeIcon
                    className=" scale-125 mt-1.5"
                    color="var(--muted-foreground)"
                  />
                  <div className=" text-lg">Acceuil</div>
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="border-r border-(--border) h-20 flex items-center">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${
                location.pathname == "/a-propos" && "bg-(--input)/75"
              }`}
            >
              <Link
                href="/a-propos"
                className=" hover:bg-(--input) h-full  rounded-none"
              >
                <div className=" flex gap-2  p-2">
                  <CircleQuestionMarkIcon
                    color="var(--muted-foreground)"
                    className=" scale-125 mt-1.5"
                  />
                  <div className=" text-lg font-semibold">À propos</div>
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="border-r border-(--border) h-20 flex items-center">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${
                location.pathname == "/projets" && "bg-(--input)/75"
              }`}
            >
              <Link
                href="/projets"
                className=" hover:bg-(--input) h-full  rounded-none"
              >
                <div className=" flex gap-2  p-2">
                  <FolderCodeIcon
                    color="var(--muted-foreground)"
                    className=" scale-125 mt-1.5"
                  />
                  <div className=" text-lg font-semibold">Projets</div>
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="border-r border-(--border) h-20 flex items-center">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${
                location.pathname == "/competences" && "bg-(--input)/75"
              }`}
            >
              <Link
                href="/competences"
                className=" hover:bg-(--input) h-full  rounded-none"
              >
                <div className=" flex gap-2  p-2">
                  <SettingsIcon
                    color="var(--muted-foreground)"
                    className=" scale-125 mt-1.5"
                  />
                  <div className=" text-lg font-semibold">Compétences</div>
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className=" h-20 border-(--border) flex items-center">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${
                location.pathname == "/contact" && "bg-(--input)/75"
              }`}
            >
              <Link
                href="/contact"
                className=" hover:bg-(--input) h-full w-full rounded-l-none rounded-r-[15px]"
              >
                <div className=" flex gap-2  p-2">
                  <CircleUserRoundIcon
                    color="var(--muted-foreground)"
                    className=" scale-125 mt-1.5"
                  />
                  <div className=" text-lg font-semibold">Contact</div>
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
