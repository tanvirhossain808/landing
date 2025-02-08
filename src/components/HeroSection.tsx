import Image from "next/image";
import { CiTwitter } from "react-icons/ci";
import { FaArrowRight, FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { TbBrandYoutube } from "react-icons/tb";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 max-w-[1440px] mx-auto px-6 lg:px-[115px] mt-10">
      {/* Left Content */}
      <div className="max-w-[616px] text-center lg:text-left">
        <h1 className="font-bold text-[40px] lg:text-[60px] leading-[50px] lg:leading-[70px]">
          Experience Media Like Never Before
        </h1>
        <p className="max-w-[450px] text-[18px] lg:text-[22px] mt-4 mx-auto lg:mx-0">
          Enjoy award-winning stereo beats with wireless listening freedom and
          sleek, streamlined with premium padded and delivering first-rate
          playback.
        </p>
        <div className="mt-10">
          <button className="text-[20px] font-semibold border-none flex items-center gap-1 text-white px-4 py-2 rounded-lg bg-orange-500 hover:scale-105 transition-all duration-300 mx-auto lg:mx-0">
            Our products
            <FaArrowRight
              className="transition-transform duration-300 group-hover:translate-x-2"
              size={20}
            />
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex flex-col lg:flex-row items-center gap-7">
        <Image
          src={"/images/Headphone.png"}
          width={393}
          height={417}
          alt="headphone"
          className="w-[200px] lg:w-[393px] h-auto"
        />
        <div className="flex flex-row lg:flex-col gap-4 items-center">
          <div className="h-[1px] lg:h-[70px] bg-white w-full lg:w-[1px]"></div>
          <FaFacebookF size={20} color="white" className="cursor-pointer" />
          <LuInstagram size={20} color="white" className="cursor-pointer" />
          <CiTwitter size={20} color="white" className="cursor-pointer" />
          <TbBrandYoutube size={20} color="white" className="cursor-pointer" />
          <div className="bg-white h-[1px] lg:h-[70px] w-full lg:w-[1px]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
