import React from "react";
import Navbutton from "../Navbutton";
import Image from "../Image";
import Button from "../Button";
import Cartbutton from "../Cartbutton";

const Navbar = ({ page }) => {
  var a,
    b,
    c = false;
  switch (page) {
    case "/":
      a = true;
      break;
    case "/aboutus":
      b = true;
      break;
    case "/products":
      c = true;
      break;
    default:
      break;
  }
  return (
    <nav className="fixed h-[100px] bg-[#f7f7f7] w-full top-0 px-20 flex justify-between items-center select-none z-50">
      <div className="w-[250px] flex justify-start items-center gap-2 ">
        <div>
          <Image
            src={"/orange_travelpictdinner_1484336833.png_64.png"}
            w={64}
            alt={"Logo"}
          />
        </div>
        <p className="text-3xl font-inter-Semibold">FOOD</p>
      </div>
      <div className="w-[350px] text-md font-inter-Medium flex justify-between">
        <Navbutton message={"Home"} Main={a} page={"/"} />
        <Navbutton message={"About Us"} Main={b} page={"/aboutus"} />
        <Navbutton message={"Products"} Main={c} page={"/products"} />
      </div>
      <div className="w-[250px] flex justify-end items-center gap-5">
        <Cartbutton />
        <Button message={"Log In"} nav={"/login"} />
      </div>
    </nav>
  );
};

export default Navbar;
