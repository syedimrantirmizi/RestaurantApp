import React from "react";
import Image from "../Image";

const Orange = ({style,Load}) => {
  return (
    <div
      className={`${style} ${
        Load ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image src={"/orange.jpg"} w={256} alt={"orange"} />
    </div>
  );
};

export default Orange;
