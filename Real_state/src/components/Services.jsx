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
          <div className="flex justify-center items-center gap-10 sm:gap-16 flex-wrap mb-4">
            <div className="relative hover:opacity-95 transition-all duration-200 ease-in-out cursor-pointer">
              <img
                src={buy}
                alt=""
                width={300}
                height={300}
                className="rounded-md object-cover"
              />
              <p className="absolute inset-0 flex items-center justify-center text-white text-4xl tracking-wide font-thin">
                BUY
              </p>
            </div>
            <div className="relative hover:opacity-95 transition-all duration-200 ease-in-out cursor-pointer">
              <img
                src={sell}
                alt=""
                width={300}
                height={300}
                className="rounded-md object-cover"
              />
              <p className="absolute inset-0 flex items-center justify-center text-white text-4xl tracking-wide font-thin">
                SELL
              </p>
            </div>
            <div className="relative hover:opacity-95 transition-all duration-200 ease-in-out cursor-pointer">
              <img
                src={rent}
                alt=""
                width={300}
                height={300}
                className="rounded-md object-cover"
              />
              <p className="absolute inset-0 flex items-center justify-center text-white text-4xl tracking-wide font-thin">
                RENT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
