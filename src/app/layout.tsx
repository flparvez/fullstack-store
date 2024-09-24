import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import {Provider,store} from "@/components/index"

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://uniquestorebd.vercel.app/"),
  keywords:["unique store","unique store bd"],
  title: "Unique Store - Ecommerce Application",
  description: "Ecommerce Application - by parvez",
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
          inter.className
        )}
      >
     
        <Provider store={store}>
        {/* <SideNavbar  /> */}
        {/* main page */}
 
          <Navbar  />
          {children}
          
      

        </Provider>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}