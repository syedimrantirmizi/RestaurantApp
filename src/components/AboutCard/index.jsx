import React from "react";
import Image from "../Image";

const AboutCard = ({src, alt, h1, p1}) => {
  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <Image
        style={"p-11 w-40 rounded-full bg-Antique-White"}
        src={src}
        alt={alt}
        style2={""}
      />
      <p className="text-2xl font-inter-Medium text-Dark-Gunmetal pt-8">
        {h1}
      </p>
      <p className="text-center pt-5 px-10 font-inter-Medium text-slate-500">
        {p1}
      </p>
    </div>
  );
};

export default AboutCard;
