import Image from "next/image";
import Link from "next/link";

import { FOOTER_DATA } from "@/constants/navigation";

export const LayoutFooter = () => {
  return (
    <footer className="bg-black-800 border-t border-dark-500 py-12">
      <div className="mx-auto max-w-7xl px-[5%]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Logo and Information */}
          <div className="lg:w-1/3">
            <Link href="/">
              <Image
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="Link Opticians"
                className="h-10 w-fit mb-6"
              />
            </Link>
            <p className="text-dark-600">
              Eye care services available at clinic locations.
            </p> {/* CHANGED: More factual, less promotional */}
            <p className="text-dark-600 text-sm mt-4">
              Optometry practice registered in Zimbabwe. {/* CHANGED: Removed promotional text */}
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="lg:w-1/3">
            <h3 className="text-16-semibold mb-6 text-white">Clinic Information</h3> {/* CHANGED: More professional */}
            <div className="grid grid-cols-2 gap-4">
              {FOOTER_DATA.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-14-regular text-dark-600 hover:text-white transition block py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <h3 className="text-16-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-12-semibold text-dark-700">Main Location</p>
                <p className="text-14-regular text-dark-600">
                  Robinson House, Harare CBD
                </p>
              </div>
              <div>
                <p className="text-12-semibold text-dark-700">Clinic Phone</p>
                <p className="text-14-regular text-dark-600">
                  +263 242 700 000
                </p>
              </div>
              <div>
                <p className="text-12-semibold text-dark-700">Emergency Contact</p>
                <p className="text-14-regular text-dark-600">
                  +263 77 340 7464
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright and Legal */}
        <div className="mt-12 pt-8 border-t border-dark-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-600 text-sm">
              © {new Date().getFullYear()} Link Opticians. All rights reserved. {/* CHANGED: Current year */}
            </p>
            <div className="flex gap-6">
              <Link 
                href="/?admin=true" 
                className="text-12-regular text-dark-600 hover:text-white transition"
              >
                Admin Access
              </Link>
              <Link 
                href="/privacy-policy" /* NEEDS TO BE CREATED */
                className="text-12-regular text-dark-600 hover:text-white transition"
              >
                Privacy Notice
              </Link>
              <Link 
                href="/terms-of-service" /* NEEDS TO BE CREATED */
                className="text-12-regular text-dark-600 hover:text-white transition"
              >
                Terms
              </Link>
            </div>
          </div>
          {/* REQUIRED DISCLAIMER - ADD THIS SECTION */}
          <div className="mt-4 text-center">
            <p className="text-xs text-dark-600">
              This website provides information about Link Opticians optometry practice. 
              It does not constitute medical advice. For medical concerns, consult a healthcare professional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};