import React from "react";
import Left from "../components/Left";
import { Outlet } from "react-router-dom";
import Profile from "../components/pages/Profile";
import Navbar from "../components/Navbar";

const MainLayout = () => {

  return (
    <>
      <Navbar />
      <div className="BLOCK">
        <Profile  />
        <div className="BLOCK">
          <Left/>
          <div className="AOUTLET">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
