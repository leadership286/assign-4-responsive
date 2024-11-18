import React from "react";
import Image from "next/image";
import com from "@/public/test1.png";
import comm from "@/public/test2.png";
import comme from "@/public/test3.png";
import footer from "@/public/footer.png";
import foot from "@/public/foot.png"
export default function Customers(){
    return(
        <div>
                         <div className="flex items-center justify-center w-[286px] lg:w-[654px]  h-[72px] lg:h-[58px] mt-[40px] lg:mt-[80px] lg:mb-[40px] font-integral text-[32px] lg:text-[48px] font-bold ml-[16px] lg:ml-[100px] leading-[38.4px] lg:leading-[57.6px] text-center">
        OUR HAPPY CUSTOMERS
  </div>
  <div className="grid  grid-cols-3 ">
  <div className=" hidden lg:block w-[310px] lg:w-[400px] h-[190px] lg:h-[240px] lg:mt-[30px] lg:ml-[100px]  object-cover  hover:scale-110 transition-all duration-300">
        <Image src={com} alt="text" w-full="true" className="rounded-2xl"/>
      </div>
      <div className="block lg:hidden w-[310px] h-[190px] mt-[20px] ml-[24px] object-cover  hover:scale-110 transition-all duration-300">
      <Image src={com} alt="text" className="rounded-2xl" width={310} height={190} />
    </div>
    <div className=" hidden lg:block w-[310px] lg:w-[400px] h-[190px] lg:h-[240px] lg:mt-[30px] lg:ml-[110px]  object-cover  hover:scale-110 transition-all duration-300">
        <Image src={comm} alt="text" w-full="true" className="rounded-2xl"/>
      </div>
      <div className=" hidden lg:block w-[310px] lg:w-[400px] h-[190px] lg:h-[240px] lg:mt-[30px] lg:ml-[120px]  object-cover  hover:scale-110 transition-all duration-300">
        <Image src={comme} alt="dress" w-full="true" className="rounded-2xl"/>
      </div>
  </div>
  <div className="hidden lg:block w-[1441px] h-[589px] mt-[50px] ml-[-1px]">
    // <Image src={footer} alt="footer" />
  </div>
  <div className="grid lg:hidden ">
    <Image src={foot} alt="foot"/>
    </div>
        </div>
    )
}