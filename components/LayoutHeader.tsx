"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { NAVIGATION_LINKS } from "@/constants/navigation";

interface LayoutHeaderProps {
  activePage?: string;
}

export const LayoutHeader = ({ activePage }: LayoutHeaderProps) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const getActivePage = () => {
    if (activePage) return activePage;
    if (pathname === "/") return "home";
    if (pathname.startsWith("/services")) return "services";
    if (pathname.startsWith("/products")) return "products";
    if (pathname.startsWith("/locations")) return "locations";
    if (pathname.startsWith("/community")) return "community";
    if (pathname.startsWith("/about")) return "about";
    if (pathname.startsWith("/contact")) return "contact";
    if (pathname.startsWith("/book")) return "book";
    return "";
  };

  const currentPage = getActivePage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-400 border-b border-dark-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-[5%] py-4">
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Link Opticians"
            className="h-8 w-fit"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-14-medium transition ${
                currentPage === link.id
                  ? "text-white font-semibold"
                  : "text-dark-600 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* FIXED: Button with proper child structure */}
          <Button 
            className="shad-gray-btn border-dark-500" 
            asChild={true}
          >
            <Link href="/book">Book Appointment</Link>
          </Button>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/?admin=true" 
            className="text-dark-600 text-sm hover:text-green-500 transition hidden md:block"
          >
            Admin
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <Image
              src={isMobileMenuOpen ? "/assets/icons/close.svg" : "/assets/icons/menu.svg"}
              width={24}
              height={24}
              alt={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="size-6"
            />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden border-t border-dark-500 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="px-[5%] py-6">
          <div className="flex flex-col gap-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`py-3 px-4 rounded-lg transition ${
                  currentPage === link.id
                    ? "bg-dark-300 text-white font-semibold"
                    : "text-dark-600 hover:bg-dark-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-4 mt-2 border-t border-dark-500">
              {/* FIXED: Mobile button with proper structure */}
              <Button 
                className="shad-gray-btn border-dark-500 w-full" 
                asChild={true}
              >
                <Link href="/book" onClick={closeMobileMenu}>
                  Book Appointment
                </Link>
              </Button>
              
              <div className="mt-4 flex justify-center">
                <Link 
                  href="/?admin=true" 
                  className="text-dark-600 text-sm hover:text-green-500 transition"
                  onClick={closeMobileMenu}
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};