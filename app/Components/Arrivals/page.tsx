import React from "react";
import Image from "next/image";
import TShirt from "@/public/T-shirt.png"
import Jeans from "@/public/Jeans.png"
import shirt from "@/public/Shirt.png"
import sleeve from "@/public/Sleeve-shirt.png"
import text1 from "@/public/text-1.png"
import rate1 from "@/public/rate-1.png"
import d1 from "@/public/d-1.png"
import text2 from "@/public/text-2.png"
import text3 from "@/public/text-3.png"
import text4 from "@/public/text-4.png"
import rate2 from "@/public/rate-2.png"
import rate3 from "@/public/rate-3.png"
import rate4 from "@/public/rate-4.png"
import d2 from "@/public/d-2.png"
import d3 from "@/public/d-3.png"
import d4 from "@/public/d-4.png"
import view from "@/public/view.png"
export default function Arrivals(){
    return(
        <div >
        <div className="flex items-center justify-center w-[269px] lg:w-[403px]  h-[38px] lg:h-[58px] lg:mt-[80px] lg:mb-[80px] font-integral text-[32px] lg:text-[48px] font-bold ml-[61px] lg:ml-[518px] leading-[38.4px] lg:leading-[57.6px] text-center">
        NEW ARRIVALS
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
 <div className=" w-[198px] lg:w-[295px]  h-[200.01px] lg:h-[298px] ml-[16px] lg:ml-[100px] object-cover  hover:scale-110 transition-all duration-300">
    <Image src={TShirt} alt="T-Shirt" w-full = "true" />
    <Image src={text1} alt="text"className="w-[180px] lg:w-[225px] h-[22px] lg:h-[27px] lg:ml-[0px]" />
    <Image src={rate1} alt="rating" />
    <Image src={d1} alt="price" />
 </div>
 
 <div className=" w-[198px] lg:w-[295px]  h-[200.01px] lg:h-[298px] ml-[23px] lg:ml-[100px] object-cover  hover:scale-110 transition-all duration-300">
    <Image src={Jeans} alt="Jeans" w-full = "true"  />
    <Image src={text2} alt="text"className="w-[120px] lg:w-[150px] h-[22px] lg:h-[27px] lg:ml-[0px]" />
    <Image src={rate2} alt="rating" />
    <Image src={d2} alt="price" />
 </div>
 <div className=" hidden lg:grid w-[295px]  h-[298px] ml-[100px] object-cover  hover:scale-110 transition-all duration-300">
    <Image src={shirt} alt="Shirt" w-full = "true"  />
    <Image src={text3} alt="text"className="w-[120px] lg:w-[151px] h-[22px] lg:h-[27px] lg:ml-[0px]" />
    <Image src={rate3} alt="rating" />
    <Image src={d3} alt="price" />
 </div>
 <div className=" hidden lg:grid w-[296px] h-[298px] ml-[100px] object-cover  hover:scale-110 transition-all duration-300">
    <Image src={sleeve} alt="Sleeve-shirt" w-full = "true"  />
    <Image src={text4} alt="text"className="w-[12px] lg:w-[150px] h-[22px] lg:h-[27px] lg:ml-[0px]" />
    <Image src={rate4} alt="rating" />
    <Image src={d4} alt="price" />
 </div>
 
  </div>
  <div className="w-[358px] lg:w-[218px] h-[46px] lg:h-[52px]  mt-[80px] lg:mt-[200px]  ml-[16px] lg:ml-[611px] flex items-center justify-center  hover:scale-110 transition-all duration-300 ">
    <Image src={view} alt="bar"/>
  </div>
</div>

    )
}