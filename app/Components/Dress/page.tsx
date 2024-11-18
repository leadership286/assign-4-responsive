import React from "react";
import Image from "next/image";
import casual from "@/public/casual.png";
import formal from "@/public/formal.png";
import party from "@/public/party.png";
import gym from "@/public/gym.png";
import dress from "@/public/casual-1.png";
import coat from "@/public/formal-2.png";
import top from "@/public/party-3.png";
import wait from "@/public/gym-4.png";

export default function Dress(){
    return(
        <div className="w-[358px] lg:w-[1239px] h-[975px] lg:h-[866px]  ml-[16px] lg:ml-[100px]  bg-[#F0F0F0] rounded-2xl">
                <div className="flex items-center justify-center w-[246px] lg:w-[687px]  h-[72px] lg:h-[58px] pt-[40px]  mt-[40px] lg:mt-[80px]  font lg:pt-[70px] lg:pb-[30px] font-integral text-[32px] lg:text-[48px] font-bold ml-[56px] lg:ml-[276px] leading-[38.4px] lg:leading-[57.6px] text-center">
        BROWSE BY DRESS STYLE
  </div>
  <div className="grid grid-cols-1  lg:grid-cols-4 ">
      <div className=" hidden lg:block w-[310px] lg:w-[407px] h-[190px] lg:h-[289px] mt-[60px] lg:mt-[70px] ml-[24px] lg:ml-[64px]  object-cover">
        <Image src={casual} alt="dress" w-full="true" className="rounded-2xl  hover:scale-110 transition-all duration-300"/>
      </div>
      <div className="block lg:hidden w-[310px] h-[190px] mt-[30px] ml-[24px] object-cover">
      <Image src={dress} alt="dress" className="rounded-2xl" width={310} height={190} />
    </div>

      <div className=" hidden lg:block w-[310px] lg:w-[684px] h-[190px] lg:h-[289px]  mt-[60px] lg:mt-[70px] ml-[24px] lg:ml-[200px]  object-cover">
        <Image src={formal} alt="dress" w-full="true" className="rounded-2xl  hover:scale-110 transition-all duration-300"/>
      </div>
      <div className="block lg:hidden w-[310px] h-[190px] mt-[30px] ml-[24px] object-cover  hover:scale-110 transition-all duration-300">
      <Image src={coat} alt="dress" className="rounded-2xl" width={310} height={190} />
    </div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
      <div className=" hidden lg:block w-[310px] lg:w-[684px] h-[190px] lg:h-[289px]  lg:mt-[40px] ml-[24px] lg:ml-[64px]  object-cover  hover:scale-110 transition-all duration-300">
        <Image src={party} alt="dress" w-full="true" className="rounded-2xl"/>
      </div>
      <div className="block lg:hidden w-[310px] h-[190px] mt-[30px] ml-[24px] object-cover  hover:scale-110 transition-all duration-300">
      <Image src={top} alt="dress" className="rounded-2xl" width={310} height={190} />
    </div>
      <div className="hidden lg:block w-[310px] lg:w-[407px] h-[190px] lg:h-[289px] lg:mt-[40px] ml-[24px] lg:ml-[480px]  object-cover  hover:scale-110 transition-all duration-300">
        <Image src={gym} alt="dress" w-full="true" className="rounded-2xl"/>
      </div>
      <div className="block lg:hidden w-[310px] h-[190px] mt-[30px] ml-[24px] object-cover">
      <Image src={wait} alt="dress" className="rounded-2xl" width={310} height={190} />
    </div>
  </div>


        </div>
    )
}