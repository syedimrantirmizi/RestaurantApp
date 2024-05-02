import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ message, nav }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(nav);
      }}
      className="bg-Beer-main py-[14px] px-12 rounded-full text-white font-inter-Regular hover:bg-Beer-light transition-all duration-[0.4s] hover:scale-110 hover:px-11 w-fit"
    >
      {message}
    </button>
  );
};

export default Button;
