"use client";
import cn from "@/utils/helpers/cn";
import {
  Bars3Icon,
  CommandLineIcon,
  RectangleStackIcon,
  UserCircleIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import {
  Collapse,
  Navbar as MTNavbar,
  Typography
} from "@material-tailwind/react";
import { ContactIcon, Wrench } from "lucide-react";
import Link from "next/link";
import React from "react";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

const  NavItem =({ children, href }: NavItemProps) =>{
  return (
    <li>
      <Typography
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Ana Sayfa",
    icon: RectangleStackIcon,
    href: '/',
  },
  {
    name: "Hakkımızda",
    icon: UserCircleIcon,
    href: '/hakkimizda'
  },
  {
    name: "Hizmetlerimiz",
    icon: Wrench,
    href: "/hizmetlerimiz",
  },
  {
    name: "Müze Vitrin Tipleri",
    icon: CommandLineIcon,
    href: "/muze-vitrin",
  },
  {
    name: "Iletişim",
    icon: ContactIcon,
    href: "/iletisim",
  },
];

const Navbar= ()=> {
  const [open, setOpen] = React.useState(false);
  
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={true}
      fullWidth
      blurred={false}
      className={cn("fixed top-0 z-50 border-0", isScrolling ? "bg-white" : "bg-[#1a202c]")}
    >
      <div className="w-[90%] sm:container mx-auto flex items-center justify-between">
        <Link href="/">
        <Typography
          color={isScrolling ? "black" : "white"}
          className={cn("text-lg font-bold", isScrolling ? "text-black" : "text-white")}
        >
          LOI VITRIN
        </Typography>
        </Link>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <Link href={href}>
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
            </Link>
          ))}
        </ul>
        <div
          onClick={handleOpen}
          className={cn("ml-auto inline-block lg:hidden", isScrolling ? "text-gray-600" : "text-white")}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </div>
      </div>
      {open && (

      <Collapse className={cn(open ? 'block' : 'hidden')} open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
               <Link href={href} onClick={()=> setOpen(false)}>

              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
               </Link>
            ))}
          </ul>
        </div>
      </Collapse>
      )}

    </MTNavbar>
  );
}

export default Navbar;
