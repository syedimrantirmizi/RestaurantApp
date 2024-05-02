import React from "react";
import Image from "../Image";
import Button from "../Button";
import Smallcard from "../Smallcard";

const MainSection = ({ Load }) => {
  return (
    <div className="w-full flex justify-around z-10 bg-white">
      <div className="w-[34%] p-1  flex flex-col justify-start">
        <p
          className={`bg-Antique-White text-Beer-main text-sm font-inter-Medium max-w-fit max-h-9 py-2 px-3 rounded-lg transition-all duration-[2s] ${
            Load
              ? " translate-x-0 opacity-100"
              : "-translate-x-[300px] opacity-0"
          }`}
        >
          WELCOME TO OUR RESTAURANT
        </p>
        <p
          className={`text-7xl pt-1 leading-snug font-uncutsans-Semibold text-Dark-Gunmetal transition-all duration-[2s] ${
            Load
              ? " translate-x-0 opacity-100"
              : "-translate-x-[200px] opacity-0"
          }`}
        >
          Delicious Foods For Every Occasion And Festival
        </p>
        <p
          className={`pt-16 text-md pr-32 font-inter-Medium text-slate-500 pb-8 transition-all duration-[2s] ${
            Load
              ? " translate-x-0 opacity-100"
              : "-translate-x-[300px] opacity-0"
          }`}
        >
          Delicious Foods For Every Occasion And Festival Delicious Foods For
          Every Occasion And Festival
        </p>
        <div
          className={`pl-1 transition-all duration-[2s] ${
            Load
              ? " translate-x-0 opacity-100"
              : "-translate-x-[200px] opacity-0"
          }`}
        >
          <Button message={"Order Now"} nav={"/products"} />
        </div>
      </div>
      <div>
        <Image
          src={"/food1.jpg"}
          w={800}
          alt={"food"}
          style={`transition-all duration-[1s] ${
            Load ? "opacity-100" : "opacity-0"
          }`}
        />
        <Smallcard
          style={`right-[400px] top-[500px] transition-all duration-[2s] ${
            Load
              ? " translate-x-0 opacity-100"
              : "translate-x-[500px] opacity-0"
          }`}
          image1={"/salad.jpg"}
          w={256}
        />
        <Smallcard
          style={`right-32 top-[350px] transition-all duration-[2s] ${
            Load
              ? " translate-x-0 opacity-100"
              : "translate-x-[1000px] opacity-0"
          }`}
          image1={"/chicken.jpg"}
          w={200}
          h={150}
        />
      </div>
    </div>
  );
};

export default MainSection;
