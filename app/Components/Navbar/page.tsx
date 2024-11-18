"use client"
import React, { useState } from "react";
import Image from "next/image";
import Search from "@/public/Search.png";
import cart from "@/public/cart.png";
import man from "@/public/man.png";
import icons from "@/public/icons.png"
import hamburger from "@/public/hamburger.png"; // Add your hamburger icon here

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-white  w-[1240px] h-[48px] mt-[62px]">
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center gap-4">
        <div 
          className="cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image src={hamburger} alt="Hamburger Icon" className="w-[24px] h-[24px]" />
        </div>
      </div>

      <div className="w-[160px] h-[22px] text-left font-integralcf font-extrabold  text-[25.2px] md:32px leading-[1] align-middle flex items-center justify-between ">
        SHOP.CO
      </div>

      {/* Links for Desktop */}
      <div className="hidden md:flex space-x-6 w-[321px] h-[22px] font-satoshi font-[16px] leading-[21.6px] text-black">
        <a href="#">Shop</a>
        <a href="#">On Sale</a>
        <a href="#">New Arrivals</a>
        <a href="#">Brands</a>
      </div>

      {/* Mobile Menu when hamburger is clicked */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[48px] left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4">
          <a href="#">Shop</a>
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </div>
      )}

 {/* Search Bar for Desktop */}
<div className="lg:w-[577px] h-[48px] pt-[12px] pl-[16px] pb-[12px] pr-[16px] lg:bg-[#F0F0F0] flex items-center rounded-full">
  {/* Search Icon */}
  <div className="hidden lg:flex items-center">
    <Image src={Search} alt="search" className="w-[24px] h-[24px] hover:scale-110 transition-all duration-300" />
  </div>
  {/* Placeholder Text */}
  <p className="hidden lg:block w-[151px] h-[22px] font-satoshi leading-[21.6px] text-[#00000066] ml-2">
    Search for products...
  </p>
</div>

{/* Cart & Profile Icons for Desktop */}
<div className="w-[62px] h-[24px] gap-[14px] hidden lg:flex ml-auto">
  <Image src={cart} alt="cart" className="w-[24px] h-[24px] hover:scale-110 transition-all duration-300" />
  <Image src={man} alt="icon" className="w-[24px] h-[24px] hover:scale-110 transition-all duration-300" />
</div>

{/* Mobile Layout */}
<div className="flex lg:hidden justify-between items-center w-full px-4 py-2">
  {/* Only for Mobile */}
  <Image src={icons} alt="icons" className="w-[96px] h-[24px] hover:scale-110 transition-all duration-300" />
</div>

    </div>
  );
}
