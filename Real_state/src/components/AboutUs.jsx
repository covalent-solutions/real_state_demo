import React from "react";
import aboutImg1 from "../assets/AboutUs_img1.png";
import aboutImg2 from "../assets/AboutUs_img2.png";
import covalent_logo from "../assets/covalent_logo.svg";

const AboutUs = () => {
  return (
    <section id="about" className="bg-custom-light mb-10">
      <div className="flex flex-wrap justify-around items-center p-10">
        {/* Left Content */}
        <div className="hidden min-[1180px]:block">
          <img
            src={aboutImg1}
            alt="About Image 1"
            className="w-[480px] max-w-full"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center max-w-[600px] w-full">
          {/* Right-Top Content */}
          <div>
            <img src={aboutImg2} alt="About Image 2" className="w-full" />
          </div>

          {/* Right-Middle Content */}
          <div className="opacity-30">
            <img
              src={covalent_logo}
              alt="Covalent Logo"
              className="w-[150px] max-w-full"
            />
          </div>

          {/* Right-Bottom Content */}
          <div className="flex flex-col justify-center items-center gap-2 md:gap-3">
            <p className="text-4xl text-slate-700 font-semibold uppercase">
              Get to know us
            </p>
            <p className="font-thin leading-normal break-words w-full text-center text-slate-600">
              At Covalent, we’ve been building trust and communities for over 30
              years. Established in 1990, we specialize in a wide range of real
              estate services, including residential and commercial
              developments. With a focus on innovation, sustainability, and
              personalized service, we’re committed to helping clients achieve
              their property goals. Let us turn your vision into reality!
            </p>
            <button className="py-2 px-4 outline-none border-2 border-slate-400 capitalize text-slate-600 text-xl text-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
