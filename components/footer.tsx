"use client";
import { Typography, Button, IconButton } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const CURRENT_YEAR = new Date().getFullYear();
const NAV_MENU = [
  {
    name: "Ana Sayfa",
    href: '/',
  },
  {
    name: "Hakkımızda",
    href: '/hakkimizda'
  },
  {
    name: "Hizmetlerimiz",
    href: "/hizmetlerimiz",
  },
  {
    name: "Müze Vitrin Tipleri",
    href: "/muze-vitrin",
  },
  {
    name: "Depo Sistemleri",
    href: "/depolama-sistemleri",
  },
  {
    name: "Iletişim",
    href: "/iletisim",
  },
];

export function Footer() {
  return (
    <footer className="pb-5 bg-[#1a202c] p-10 md:pt-10 border-t shadow-lg">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            variant="h6"
            className="text-white"
          >
            LOI VITRIN
          </Typography>
          <ul className="flex flex-col sm:flex-row justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {NAV_MENU.map((link, index) => (
              <li key={index}>
                <Link
                href={link.href}
                  className="font-normal text-white hover:!text-gray-900 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Typography
          color="black"
          className="text-center mt-12 font-normal text-white"
        >
          &copy; {CURRENT_YEAR} Made by{" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            Abdurrahman.
          </a>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
