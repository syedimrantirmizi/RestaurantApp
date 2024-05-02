import React from "react";
import { Outlet } from "react-router-dom";

const Protectedroute = () => {
  // const a = true;
  // return a ? <Outlet /> : <Navigate to={"/"} />;
  return <Outlet />;
};

export default Protectedroute;
