import { LayoutHeader } from "@/components/LayoutHeader";
import { LayoutFooter } from "@/components/LayoutFooter";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <LayoutHeader />
      <main>{children}</main>
      <LayoutFooter />
    </div>
  );
}