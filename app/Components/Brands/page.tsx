import React from "react";
import Image from "next/image";
import brands from "@/public/brands.png"
import brand from "@/public/brands-sm.png"
export default function Brands(){
    return(
        <div>
        <div className=" w-[390px] lg:w-[1400px]  h-[146px] lg:h-[122px] bg-black hidden lg:flex items-center justify-between">
        <Image src={brands}
        alt="brand"
        className="w-[1440px] h-[122px]"
        />
      </div>
      <div className="w-[390px] h-[146px] lg:hidden flex items-center justify-between bg-black">
        <Image src={brand}
        alt="brand"
        
/>
      </div>
        </div>
       
    )
}