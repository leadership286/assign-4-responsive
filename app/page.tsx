import React from "react";
import Image from "next/image";
import shop from "@/public/shop.png"
import shopNow from "@/public/shop now.png"
import frame from "@/public/frame-3.png"
import frame2 from "@/public/frame-2.png"
import frame1 from "@/public/frame-1.png"
import star from "@/public/Star.png"
import crop from "@/public/couple-crop.png"

 export default function Home(){
  return(
    <div className="lg:bg-[url('/couple.png')] bg-center bg-cover w-[390px] h-[853px] lg:w-[1440px] lg:pt-[134px] lg:h-[663px] lg:mt-[30px] ">
     {/* Star Image on Left */}
     <div className="absolute right-[5%] top-[40%] w-[104px] h-[104px] hidden lg:flex">
          <Image src={star} alt="left star" />
        </div>
         {/* Star Image on Right */}
         <div className="absolute right-[40%] top-[75%] w-[56px] h-[56px] hidden lg:flex">
          <Image src={star} alt="right star" />
        </div>
    <div className="w-[315px] lg:w-[600px] h-[93px] lg:h-[140px]  ml-[16px] lg:ml-[100px]   text-black font-integralcf lg:font-integralcf text-[36px] lg:text-[64px] font-bold lg:font-[700px] leading-[34px] lg:leading-[64px] text-left lg:text-left">
    FIND CLOTHES THAT MATCHES YOUR STYLE
    </div>
    <p className="w-[358px] lg:w-[545px] h-[50px] lg:h-[33px] pl-[16px] lg:pl-[100px] mt-[60px] font-satoshi lg:font-satoshi text-[14px] lg:text-[16px] font-medium lg:font-semibold leading-[20px] lg:leading-[20px] text-[#00000099]">
    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
    </p>
 
    <div className="w-[210px]  h-[52px]  mt-[40px] ml-[100px] hidden lg:flex ">
      <Image
      src={shop}
      alt="shop now"
      />
    </div>
    <div className="w-[358px]  h-[52px]  mt-[30px] ml-[16px] lg:hidden flex ">
      <Image
      src={shopNow}
      alt="shop now"
      />
    </div>
    <div className=" w-[596px] h-[74px] mt-[40px] ml-[100px] hidden lg:flex" >
      <Image
      src={frame}
      alt="frame"
      />
    </div>

    <div className="lg:hidden flex w-[278px] h-[52px] mt-[50px] ml-[56px] justify space-between">
      <Image
      src={frame2}
      alt="frame"
      />
    </div>
    <div className="lg:hidden flex w-[103px] h-[48px] ml-[144px]">
      <Image
      src={frame1}
      alt="frame"
      />
    </div>

    <div className="lg:hidden flex w-[390px] h-[448px]">
      <Image
      src={crop}
      alt="couple"
      />
    </div>
    </div>
    
  )
 }