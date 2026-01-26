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
  description: "Optometry services at clinic locations in Zimbabwe. Eye examinations, contact lens services, and frame options available. Established in 2008.",
  keywords: [
    "optometry",
    "eye care",
    "eye examinations",
    "contact lenses",
    "prescription glasses",
    "Harare",
    "Chipinge",
    "Chiredzi",
    "Link Opticians",
    "Zimbabwe optometrist"
  ],
  authors: [{ name: "Link Opticians" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://linkopticians.co.zw",
    title: "Link Opticians",
    description: "Optometry services at clinic locations in Zimbabwe.",
    siteName: "Link Opticians",
  },
  twitter: {
    card: "summary",
    title: "Link Opticians",
    description: "Optometry services at clinic locations in Zimbabwe.",
    creator: "@linkopticians",
  },
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
  other: {
    "fb:app_id": "", // Can be added if Facebook app exists
  },
  metadataBase: new URL("https://linkopticians.co.zw"),
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