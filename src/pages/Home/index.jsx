import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Image from "../../components/Image";
import Button from "../../components/Button";
import Smallcard from "../../components/Smallcard";
import { useInView } from "react-intersection-observer";
import Aboutsection from "../../components/Aboutsection";
import Orange from "../../components/Orange";
import MainSection from "../../components/MainSection";

const Home = () => {
  const [Load, setLoad] = useState(false);
  console.log(useInView);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 0);
  }, []);

  return (
    <div className="pt-[100px]">
      <Navbar page={"/"} />
      <div className="pt-28 relative">
        <Orange
          Load={Load}
          style={
            "absolute -left-28 top-[755px] z-50 transition-all duration-[1s]"
          }
        />
        <Orange
          Load={Load}
          style={"absolute -right-36 top-0 transition-all duration-[1s]"}
        />
        <MainSection Load={Load} />
        <Aboutsection reference={ref} inView={inView} />
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
