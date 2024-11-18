import React from "react";

import Image from "next/image";
import vector from "@/public/Vector.png";

export default function SignUp() {
  return (
    <div className="bg-black w-[1440px] h-[34px] flex items-center justify-between sm:justify-center px-3">
      {/* Text Section */}
      <div className="font-satoshi text-white text-xs  gap-[10px] text-center sm:text-left">
        Sign up and get 20% off your first order.&nbsp;
        <a href="#" className="underline">
          Sign Up Now
        </a>
      </div>

      {/* Vector Icon (Hidden on Mobile) */}
      <div className="w-[20px] h-[20px] mt-[9px] ml-52 hidden sm:block hover:scale-110 hover:opacity-80 transition-all duration-300">
        <Image src={vector} alt="vector" className="object-contain" />
      </div>
    </div>
    
  );
}
