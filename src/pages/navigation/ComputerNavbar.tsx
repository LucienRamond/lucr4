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
      <NavigationMenu className="bg-white border rounded-2xl">
        <NavigationMenuList className=" gap-0">
          <NavigationMenuItem className="border-r h-20 flex items-center">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${
                location.pathname == "/" && "bg-black/10"
              }`}
            >
              <Link
                href="/"
                className=" hover:bg-black/10 h-full w-full rounded-r-none rounded-l-[15px]"
              >
                <div className=" flex gap-2 p-2">
                  <HomeIcon className=" scale-125 mt-1.5" />
                  <div className=" text-lg font-semibold">Acceuil</div>
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="border-r h-20 flex items-center">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${
                location.pathname == "/a-propos" && "bg-black/10"
              }`}
            >
              <Link
                href="/a-propos"
                className=" hover:bg-black/10 h-full  rounded-none"
              >
                <div className=" flex gap-2  p-2">
                  <CircleQuestionMarkIcon className=" scale-125 mt-1.5" />
                  <div className=" text-lg font-semibold">À propos</div>
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="border-r h-20 flex items-center">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${
                location.pathname == "/projets" && "bg-black/10"
              }`}
            >
              <Link
                href="/projets"
                className=" hover:bg-black/10 h-full  rounded-none"
              >
                <div className=" flex gap-2  p-2">
                  <FolderCodeIcon className=" scale-125 mt-1.5" />
                  <div className=" text-lg font-semibold">Projets</div>
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="border-r h-20 flex items-center">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${
                location.pathname == "/competences" && "bg-black/10"
              }`}
            >
              <Link
                href="/competences"
                className=" hover:bg-black/10 h-full  rounded-none"
              >
                <div className=" flex gap-2  p-2">
                  <SettingsIcon className=" scale-125 mt-1.5" />
                  <div className=" text-lg font-semibold">Compétences</div>
                </div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className=" h-20 flex items-center">
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} ${
                location.pathname == "/contact" && "bg-black/10"
              }`}
            >
              <Link
                href="/contact"
                className=" hover:bg-black/10 h-full w-full rounded-l-none rounded-r-[15px]"
              >
                <div className=" flex gap-2  p-2">
                  <CircleUserRoundIcon className=" scale-125 mt-1.5" />
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
