import React from "react";
import Image from "next/image";
import shop1 from "@/public/shop1.png";
import text from "@/public/tex.png";
import social from "@/public/Social.png";
import right from "@/public/right.png";
import icon from "@/public/icon.png";

export default function Footer(){
    return(
        
    <div className="h-[392px] w-[846px] bg-[#F0F0F0] grid  lg:hidden ">
        <Image src={shop1} alt="text" className="mt-[20px] ml-[16px]"/>
        <Image src={text} alt="text" className="mt-[20px] ml-[16px] w-[357px] h-[40px]"/>
        <Image src={social} alt="icons" className="mt-[20px] ml-[16px] w-[148px] h-[28px]"/>
        <div className="flex fllex-cols-2 gap-4 lg:hidden px-4">
  {/* Company Section */}
  <div>
    <h3 className="font-semibold mb-2">Company</h3>
    <ul className="space-y-1">
      <li><a href="#">About</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Works</a></li>
      <li><a href="#">Career</a></li>
    </ul>
  </div>

  {/* Help Section */}
  <div>
    <h3 className="font-semibold mb-2">Help</h3>
    <ul className="space-y-1">
      <li><a href="#">Customer Support</a></li>
      <li><a href="#">Delivery Details</a></li>
      <li><a href="#">Terms & Conditions</a></li>
      <li><a href="#">Privacy Policy</a></li>
    </ul>
  </div>

  {/* Resources Section */}
  <div>
    <h3 className="font-semibold mb-2">Resources</h3>
    <ul className="space-y-1">
      <li><a href="#">Free eBook</a></li>
      <li><a href="#">Development Tutorial</a></li>
      <li><a href="#">How to - Blog</a></li>
      <li><a href="#">YouTube Playlist</a></li>
    </ul>
  </div>

  {/* FAQ Section */}
  <div>
    <h3 className="font-semibold mb-2">FAQ</h3>
    <ul className="space-y-1">
      <li><a href="#">Account</a></li>
      <li><a href="#">Manage Addresses</a></li>
      <li><a href="#">Orders</a></li>
      <li><a href="#">Payment</a></li>
    </ul>
  </div>
</div>
<div className="w-[269px] h-[19px] ml-[61px]">
    <Image src={right} alt="text" />
</div>
<div className="w-[240px] h-[25.74px] ml-[74px]">
    <Image src={icon} alt="text" />
</div>
        </div>
      

    
        

    )
}