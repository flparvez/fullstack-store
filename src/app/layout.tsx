import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import {Provider,store} from "@/components/index"

import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://uniquestorebd.vercel.app/"),
  keywords:["unique store","unique store bd"],
  title: "Unique Store Bd- Ecommerce Application",
  description: "Unique Store Bd | Ecommerce Application - by parvez",
  verification: {
    other: {
      "google-site-verification": "0qTCYg37Xn4zPyJD_ECxvtKhF8S7Nfi_VfzBfVb0fBo",
    },
  }
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
        <Toaster richColors duration={1200}  position="top-right"/>
        <Footer />
      </body>
    </html>
  );
}