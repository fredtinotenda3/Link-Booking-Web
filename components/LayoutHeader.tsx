// components/LayoutHeader.tsx - UPDATED WITH EMERGENCY LINK
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { NAVIGATION_LINKS } from "@/constants/navigation";
import { Logo } from "@/components/Logo";

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
    if (pathname.startsWith("/emergency")) return "emergency";
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
        <Link href="/" onClick={closeMobileMenu} className="group">
          <Logo 
            width={160} 
            height={30} 
            showTagline={false}
            className="h-8 w-fit group-hover:opacity-90 transition-opacity"
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
                  ? link.id === "emergency"
                    ? "text-red-500 font-semibold" // Red for emergency when active
                    : "text-green-500 font-semibold" // Green for others when active
                  : link.id === "emergency"
                    ? "text-red-400 hover:text-red-300" // Red for emergency hover
                    : "text-dark-600 hover:text-green-500" // Normal for others
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button 
            className="shad-gray-btn border-dark-500 hover:bg-green-500 hover:text-white hover:border-green-500 transition" 
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
            className="md:hidden p-2 hover:text-green-500 transition"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
            >
              {isMobileMenuOpen ? (
                // Close icon (X)
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                // Menu icon (hamburger)
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
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
                    ? link.id === "emergency"
                      ? "bg-red-900/20 text-red-500 font-semibold border border-red-500/30" // Emergency active
                      : "bg-dark-300 text-green-500 font-semibold" // Normal active
                    : link.id === "emergency"
                      ? "text-red-400 hover:bg-red-900/10 hover:text-red-300" // Emergency hover
                      : "text-dark-600 hover:bg-dark-300 hover:text-green-500" // Normal hover
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-4 mt-2 border-t border-dark-500">
              <Button 
                className="shad-gray-btn border-dark-500 w-full hover:bg-green-500 hover:text-white hover:border-green-500 transition" 
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