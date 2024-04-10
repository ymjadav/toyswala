import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Detail from "./Detail";

function root() {
  return (
    <>
      <Nav />
      <Outlet />
      <Detail />
    </>
  );
}

export default root;
