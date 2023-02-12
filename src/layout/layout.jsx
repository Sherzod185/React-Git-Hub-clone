import React from "react";
import Left from "../components/Left";
import { Outlet } from "react-router-dom";
import Profile from "../components/pages/Profile";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const [starLine, setStarLine] = React.useState(0)
  return (
    <>
      <Navbar />
      <div className="BLOCK">
        <Profile setStarLine={setStarLine} starLine={starLine} />
        <div className="BLOCK">
          <Left setStarLine={setStarLine} starLine={starLine} />
          <div className="AOUTLET">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
