import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "@radix-ui/react-navigation-menu";
import {
  CircleQuestionMarkIcon,
  CircleUserRoundIcon,
  FolderCodeIcon,
  HomeIcon,
  SettingsIcon,
} from "lucide-react";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" z-50 w-full absolute">
      <div
        className={`${
          open && ""
        } grid m-2 grid-cols-2  bg-(--card) p-2 rounded-xl border border-(--border)`}
      >
        <Button
          onClick={() => setOpen(!open)}
          variant="outline"
          className={` row-start-1 col-start-1 col-end-3 col-span-2 w-fit`}
        >
          <MenuIcon />
        </Button>
        <div className="row-start-1 col-start-1 col-end-3 col-span-2 justify-self-center flex gap-2">
          <img src="" />
          <div className=" h-full font-bold text-2xl">
            <span className="">Lucr4</span>
          </div>
        </div>
        {open && (
          <NavigationMenu className="col-start-1 col-end-3 mx-auto">
            <NavigationMenuList className="flex-col gap-0">
              <NavigationMenuItem className=" h-20 flex items-center">
                <NavigationMenuLink>
                  <Link href="/" className="">
                    <div className=" flex gap-2 p-2">
                      <HomeIcon
                        className=" scale-125 mt-1.5"
                        color="var(--muted-foreground)"
                      />
                      <div className=" text-lg  font-semibold">Acceuil</div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="h-20 flex items-center">
                <NavigationMenuLink>
                  <Link href="/a-propos" className=" h-full  rounded-none">
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
              <NavigationMenuItem className="h-20 flex items-center">
                <NavigationMenuLink>
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
              <NavigationMenuItem className=" h-20 flex items-center">
                <NavigationMenuLink>
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
              <NavigationMenuItem className=" h-20  flex items-center">
                <NavigationMenuLink>
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
        )}
      </div>
    </div>
  );
}
