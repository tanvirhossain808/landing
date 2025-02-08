import Image from "next/image";

const Description = () => {
  return (
    <div className="px-6" id="description">
      <div className="max-w-[1440px] mx-auto px-6 py-12 bg-gray-900 mt-10 flex gap-4 items-center flex-col lg:flex-row">
        <div className="w-full lg:w-auto">
          <Image
            src="/images/discription.png"
            width={300}
            height={300}
            alt="description"
            className="min-w-[300px] mx-auto"
          />
        </div>
        <div className="w-full lg:w-auto">
          <div>
            <h2 className="font-bold text-[28px] sm:text-[32px] md:text-[38px]">
              <span className="text-green-600">About</span> Company
            </h2>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] opacity-65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[40px] items-center justify-between mt-6">
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-white font-semibold text-[40px] sm:text-[50px] lg:text-[60px]">
                2.7k+
              </span>
              <span className="text-[16px] sm:text-[18px] font-semibold opacity-70">
                users
              </span>
            </div>
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-white font-semibold text-[40px] sm:text-[50px] lg:text-[60px]">
                1.8k+
              </span>
              <span className="text-[16px] sm:text-[18px] font-semibold opacity-70">
                Subscribers
              </span>
            </div>
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-white font-semibold text-[40px] sm:text-[50px] lg:text-[60px]">
                12
              </span>
              <span className="text-[16px] sm:text-[18px] font-semibold opacity-70">
                Downloads
              </span>
            </div>
            <div className="flex flex-col gap-[2px] items-center">
              <span className="text-white font-semibold text-[40px] sm:text-[50px] lg:text-[60px]">
                4
              </span>
              <span className="text-[16px] sm:text-[18px] font-semibold opacity-70">
                Products
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
