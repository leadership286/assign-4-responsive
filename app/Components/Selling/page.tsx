import React from "react";
import Image from "next/image";
import sell1 from "@/public/sell-1.png";
import sell2 from "@/public/sell-2.png";
import sell3 from "@/public/sell-3.png";
import sell4 from "@/public/sell-4.png";
import t1 from "@/public/t-1.png";
import t2 from "@/public/t-2.png";
import t3 from "@/public/t-3.png";
import t4 from "@/public/t-4.png";
import r1 from "@/public/r-1.png";
import r2 from "@/public/r-2.png";
import r3 from "@/public/r-3.png";
import r4 from "@/public/r-4.png";
import d1 from "@/public/dd-1.png";
import d2 from "@/public/dd-2.png";
import d3 from "@/public/dd-3.png";
import d4 from "@/public/dd-4.png";
import view from "@/public/view.png"

export default function Selling(){
    return(
        <div>
                <div className="flex items-center justify-center w-[269px] lg:w-[403px]  h-[38px] lg:h-[58px] lg:mt-[80px] lg:mb-[80px] font-integral text-[32px] lg:text-[48px] font-bold ml-[61px] lg:ml-[518px] leading-[38.4px] lg:leading-[57.6px] text-center">
        TOP SELLING
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
 <div className=" w-[198px] lg:w-[295px]  h-[200.01px] lg:h-[298px] ml-[16px] lg:ml-[100px] object-cover  hover:scale-110 transition-all duration-300">
    <Image src={sell1} alt="T-Shirt" w-full = "true" />
    <Image src={t1} alt="text"className="w-[180px] lg:w-[225px] h-[22px] lg:h-[27px] lg:ml-[0px]" />
    <Image src={r1} alt="rating" />
    <Image src={d1} alt="price" /> 
 </div>
 
 <div className=" w-[198px] lg:w-[295px]  h-[200.01px] lg:h-[298px] ml-[23px] lg:ml-[100px] object-cover  hover:scale-110 transition-all duration-300">
    <Image src={sell2} alt="shirt" w-full = "true"  />
    <Image src={t2} alt="text"className="w-[120px] lg:w-[150px] h-[22px] lg:h-[27px] lg:ml-[0px]" />
    <Image src={r2} alt="rating" />
    <Image src={d2} alt="price" />
 </div>
 <div className=" hidden lg:grid w-[295px]  h-[298px] ml-[100px] object-cover  hover:scale-110 transition-all duration-300">
    <Image src={sell3} alt="shorts" w-full = "true"  />
    <Image src={t3} alt="text"className="w-[120px] lg:w-[151px] h-[22px] lg:h-[27px] lg:ml-[0px]" />
    <Image src={r3} alt="rating" />
    <Image src={d3} alt="price" />
 </div>
 <div className=" hidden lg:grid w-[296px] h-[298px] ml-[100px] object-cover  hover:scale-110 transition-all duration-300">
    <Image src={sell4} alt="Jeans" w-full = "true"  />
    <Image src={t4} alt="text"className="w-[12px] lg:w-[150px] h-[22px] lg:h-[27px] lg:ml-[0px]" />
    <Image src={r4} alt="rating" />
    <Image src={d4} alt="price" />
 </div>
 
  </div>
  <div className="w-[358px] lg:w-[218px] h-[46px] lg:h-[52px]  mt-[80px] lg:mt-[200px]  ml-[16px] lg:ml-[611px] flex items-center justify-center  hover:scale-110 transition-all duration-300">
    <Image src={view} alt="bar"/>
  </div>
        </div>
    )
}