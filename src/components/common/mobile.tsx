import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/links";
import { MenuIcon, ChevronRight } from "lucide-react";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="p-6 sm:p-8 w-full max-w-xs">
        <SheetHeader className="sr-only">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-6 mt-8">
          {NAV_LINKS.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.link}
                className="group text-lg font-medium w-full px-2 sm:px-0 inline-flex items-center transition-all duration-200"
              >
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  {link.name}
                </span>
                <ChevronRight className="w-4 h-4 ml-1 opacity-0 transform transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1 group-hover:scale-110" />
              </Link>
            </SheetClose>
          ))}

          <SheetClose asChild>
            <Link href="/" className="w-full mt-4">
              <Button
                size="lg"
                variant="outline"
                className="w-full cursor-pointer"
              >
                Começar
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
