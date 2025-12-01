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

export default function ComputerNavbar() {
  return (
    <NavigationMenu className="bg-white border rounded-2xl mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem className=" border-r">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">
              <div className=" flex gap-2 ">
                <HomeIcon className=" scale-125 mt-1.5" />
                <div className=" text-lg font-semibold">Acceuil</div>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className=" border-r">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/a-propos">
              <div className=" flex gap-2 ">
                <CircleQuestionMarkIcon className=" scale-125 mt-1.5" />
                <div className=" text-lg font-semibold">À propos</div>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className=" border-r">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/projets">
              <div className=" flex gap-2 ">
                <FolderCodeIcon className=" scale-125 mt-1.5" />
                <div className=" text-lg font-semibold">Projets</div>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className=" border-r">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/competences">
              <div className=" flex gap-2 ">
                <SettingsIcon className=" scale-125 mt-1.5" />
                <div className=" text-lg font-semibold">Compétences</div>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/contact">
              <div className=" flex gap-2 ">
                <CircleUserRoundIcon className=" scale-125 mt-1.5" />
                <div className=" text-lg font-semibold">Contact</div>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
