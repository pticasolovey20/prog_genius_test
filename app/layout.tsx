import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "@/app/styles/globals.scss";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Emotion Cards Board",
  description: "Test task for ProgGenius",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn(montserrat.className, "antialiased")}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
