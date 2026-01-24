import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Link Opticians",
  description: "Optometry services at clinic locations. Eye examinations, contact lens services, and frame options available. Established in 2008.",
  keywords: [
    "optometry",
    "eye care",
    "eye examinations",
    "contact lenses",
    "prescription glasses",
    "Harare",
    "Chipinge",
    "Chiredzi",
    "Link Opticians"
  ],
  authors: [{ name: "Link Opticians" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://linkopticians.co.zw",
    title: "Link Opticians",
    description: "Optometry services at clinic locations.",
  },
  twitter: {
    card: "summary",
    title: "Link Opticians",
    description: "Optometry services at clinic locations.",
  },
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
           <Toaster /> 
        </ThemeProvider>
      </body>
    </html>
  );
}