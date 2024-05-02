import React from "react";
import { useNavigate } from "react-router-dom";
import Image from "../Image";

const Cartbutton = () => {
    const navigate = useNavigate()
  return (
    <button onClick={() => navigate("/cart")}>
      <Image src={"/shopping-cart.png"} w={32} alt={"Cart"} />
    </button>
  );
};

export default Cartbutton;
