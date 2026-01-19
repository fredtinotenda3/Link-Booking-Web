"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { NAVIGATION_LINKS } from "@/constants/navigation";

interface LayoutHeaderProps {
  activePage?: string;
}

export const LayoutHeader = ({ activePage }: LayoutHeaderProps) => {
  const pathname = usePathname();
  
  const getActivePage = () => {
    if (activePage) return activePage;
    if (pathname === "/") return "home";
    if (pathname.startsWith("/services")) return "services";
    if (pathname.startsWith("/about")) return "about";
    if (pathname.startsWith("/contact")) return "contact";
    if (pathname.startsWith("/book")) return "book";
    return "";
  };

  const currentPage = getActivePage();

  return (
    <header className="sticky top-0 z-50 bg-dark-400 border-b border-dark-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[5%] py-4">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Link Opticians"
            className="h-8 w-fit"
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-14-medium transition ${
                currentPage === link.id
                  ? "text-green-500"
                  : "hover:text-green-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button className="shad-primary-btn" asChild>
            <Link href="/book">Book Now</Link>
          </Button>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link href="/?admin=true" className="text-green-500 text-sm hover:text-green-400 transition">
            Admin
          </Link>
          
          {/* Mobile menu button (optional) */}
          <button className="md:hidden p-2">
            <Image
              src="/assets/icons/menu.svg"
              width={24}
              height={24}
              alt="Menu"
              className="size-6"
            />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation (optional - can be expanded) */}
      {/* <div className="md:hidden border-t border-dark-500 px-[5%] py-4">
        <div className="flex flex-col gap-4">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 ${
                currentPage === link.id
                  ? "text-green-500"
                  : "text-dark-600 hover:text-green-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div> */}
    </header>
  );
};