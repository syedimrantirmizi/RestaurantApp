import React from "react";
import { useNavigate } from "react-router-dom";

const Navbutton = ({ message, Main, page}) => {
  const navigate = useNavigate();
  const notInFoc =
    "border-b-4 border-b-white py-8 w-[75px] text-gray-400 hover:text-black hover:border-b-Beer-main transition-all duration-500 rounded-b-sm";
  const InFoc = "border-b-4 py-8 w-[75px] border-b-Beer-main rounded-b-sm";

  return <button className={`${Main ? InFoc : notInFoc} select-none `} onClick={() => navigate(page)}>{message}</button>;
};

export default Navbutton;
