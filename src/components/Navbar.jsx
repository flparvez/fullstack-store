"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchProducutByName from "@/components/SearchProducutByName";
import AdminSearch from "@/components/admin/SearchBarAdmin";
import logo from "../../public/download.webp";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import { ShoppingCart } from "lucide-react";

import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";




const Navbar =({user}) => {



const admin = user?.role === "admin"



  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cart = useSelector((state) => state.cart);

  return (
    <nav className="bg-white sm:shadow-md sticky top-0 z-50">
      <div className="sm:max-w-3xl w-full mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <Link href="/">
            <Image
              className="w-7 mx-auto my-2"
              src={logo}
              alt="logo"
              width={100}
              height={100}
            />
          </Link>

          <div className="flex-shrink-0">
            <Link href="/profile">
              <h2 className="sm:text-muted text-sm font-bold dark:text-white text-gray-800">
                Profile
              </h2>
            </Link>
          </div>

          <div className="flex-shrink-0">

  {
    admin?     <Link href="/admin">
    <h2 className="sm:text-muted text-sm font-bold dark:text-white text-gray-800">
      Admin
    </h2>
  </Link>
:     <Link href="/products">
<h2 className="sm:text-muted text-sm font-bold text-gray-800">
 Products
</h2>
</Link>

  }

    </div>
          {/* Category Dropdown */}
 
          {/* Cart and Hamburger */}
          <div className="flex items-center">
            <Link href="/cart">
              <div className="relative inline-flex">
                <ShoppingCart className="w-10 h-8 dark:text-white text-gray-700" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 rounded-full">
                  (
                  {cart.items.reduce(
                    (acc, item) => acc + item.quantity,
                    0
                  )}
                  )
                </span>
              </div>
            </Link>
            <div className="md:hidden">
              <Button variant="ghost" onClick={toggleMenu}>
                {isOpen ? (
                  <AiOutlineClose size={23} />
                ) : (
                  <AiOutlineMenu size={23} />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className=" w-full sm:max-w-full space-y-1">
          {admin? <AdminSearch /> : <SearchProducutByName />}
                
        </div>
      </div>

      {/* Marquee */}
      <div className="font-bold">
        <Marquee>
          <br />
          আসসালামু আলাইকুম সম্মানিত সদস্য আপনাকে অভিনন্দন ওয়েবসাইটে প্রবেশ করার
          জন্য। আমাদের কাছে পেয়ে যাবেন টেকসই নিত্য প্রয়োজনীয় ইলেকট্রনিক
          মালামাল। আপনার পছন্দের প্রোডাক্ট এড কার্ড করে এখনই অর্ডার করুন।
        </Marquee>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <h2
              onClick={toggleMenu}
              className="block text-gray-800 hover:text-gray-600"
            >
              Home
            </h2>
          </Link>
          <Link href="/products">
            <h2
              onClick={toggleMenu}
              className="block text-gray-800 hover:text-gray-600"
            >
              Products
            </h2>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;