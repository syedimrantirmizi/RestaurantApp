import React from "react";
import AboutCard from "../AboutCard";
import Button from "../Button";

const Aboutsection = ({ reference, inView }) => {
  return (
    <div ref={reference}>
      <div
        className={`h-screen transition-all duration-[1s] pt-32 w-full px-32 ${
          inView ? "opacity-100 " : "opacity-0"
        }`}
      >
        {" "}
        <p className="text-7xl font-uncutsans-Bold text-center">
          About The Company
        </p>
        <div className="flex justify-around pt-32">
          <AboutCard
            src={"/band.png"}
            alt={"band"}
            h1={"More Than 10 year"}
            p1={
              "We have great pleasure in introducing our concern being the leaders In the fields of Spicy Food Products. We have been serving the end users and Consumer."
            }
          />
          <AboutCard
            src={"/spoon-and-fork-crossed.png"}
            alt={"Spoon and Fork"}
            h1={"Cutting-Edge Infrastructure"}
            p1={
              "Well equipped and had total infrastructure of most modern plant and machinery and autoCutting-Edge Infrastructure mated while In the process of making the following."
            }
          />
          <AboutCard
            src={"/fast-food.png"}
            alt={"band"}
            h1={"Discover Our Acclaimed Products"}
            p1={
              "All these products are widely acclaimed due to its highlighting features like fresh & healthy, low calorie, adulteration free, longer shelf life."
            }
          />
        </div>
        <div className="w-full flex justify-center pt-12">
          <Button message={"Read More"} nav={"/aboutus"} />
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
