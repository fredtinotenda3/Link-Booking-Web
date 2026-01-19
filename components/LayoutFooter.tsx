import Image from "next/image";
import Link from "next/link";

import { FOOTER_DATA } from "@/constants/navigation";

export const LayoutFooter = () => {
  return (
    <footer className="bg-black-800 border-t border-dark-500 py-8">
      <div className="mx-auto max-w-7xl px-[5%]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Image
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="Link Opticians"
                className="h-8 w-fit mb-4"
              />
            </Link>
            <p className="text-dark-600 text-sm">
              {FOOTER_DATA.tagline}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            {FOOTER_DATA.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-14-regular hover:text-green-500 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-500 text-center">
          <p className="text-dark-600 text-sm">
            {FOOTER_DATA.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};