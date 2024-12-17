import React from "react";
import Covalent from "../assets/Covalent.svg";
import buy from "../assets/Buy.svg";
import sell from "../assets/Sell.svg";
import rent from "../assets/Rent.svg";

const Services = () => {
  return (
    <section className="mb-10">
      <div className="flex justify-center items-center flex-col mt-28">
        <div className="opacity-30 absolute -bottom-[8.5rem]">
          <img src={Covalent} alt="" width={200} height={200} />
        </div>
        <div className="flex  flex-col justify-center items-center gap-8 sm:gap-16 relative">
          <div className="text-center text-xl md:text-3xl font-thin">
            <p>
              USA’s TOP REAL-ESTATE COMPANY <br /> FOR MORE THAN 30 YEARS
            </p>
          </div>
          <div className="flex justify-center items-center gap-10 sm:gap-12 xl:gap-16  flex-wrap mb-4">
            <div className="relative group cursor-pointer flex justify-center items-center overflow-hidden">
              <img
                src={buy}
                alt=""
                width={300}
                height={300}
                className="rounded-md object-cover"
              />
              <div className="absolute flex justify-center items-center w-full h-full bg-custom-light bg-opacity-15 opacity-0 pb-[70%] group-hover:pb-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-md ">
                <p className="text-3xl text-white">BUY</p>
              </div>
            </div>
            <div className="relative group cursor-pointer flex justify-center items-center overflow-hidden">
              <img
                src={sell}
                alt=""
                width={300}
                height={300}
                className="rounded-md object-cover"
              />
              <div className="absolute flex justify-center items-center w-full h-full bg-custom-light bg-opacity-15 opacity-0 pb-[70%] group-hover:pb-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-md ">
                <p className="text-3xl text-white">SELL</p>
              </div>
            </div>
            <div className="relative group cursor-pointer flex justify-center items-center overflow-hidden">
              <img
                src={rent}
                alt=""
                width={300}
                height={300}
                className="rounded-md object-cover"
              />
              <div className="absolute flex justify-center items-center w-full h-full bg-custom-light bg-opacity-15 opacity-0 pb-[70%] group-hover:pb-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-md ">
                <p className="text-3xl text-white">RENT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
