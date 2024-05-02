import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Authroute = () => {
  // const a = true;
  // return a ? <Outlet /> : <Navigate to={"/"} />;
  return <Outlet />;
};

export default Authroute;
