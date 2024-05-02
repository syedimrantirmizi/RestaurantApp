import React from "react";
import Image from "../Image";

const Smallcard = ({ style, image1, w, h }) => {
  return (
    <div
      className={`p-3 bg-white flex flex-col gap-3 absolute shadow-gray-300 shadow-2xl max-w-[256px] rounded-xl ${style}`}
    >
      <div className="p-3">
        <Image src={image1} w={w} style={"rounded-lg "} />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-inter-Semibold text-lg">Salad Special</p>{" "}
        <div className="w-[18] h-[18]">
          <Image w={18} src={"/heart.png"} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image src={"/icons8-star-48.png"} w={28} />{" "}
        <p className=" font-inter-Semibold">5.0</p>
      </div>
    </div>
  );
};

export default Smallcard;
