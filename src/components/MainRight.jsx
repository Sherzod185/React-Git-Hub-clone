import React from "react";
import { IoBulbOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const MainRight = () => {
  return (
    <div className="mainRight ">
      <div className="mainRightContainer">
        <div className="mainRightText">
          <h2>Following</h2>
          <h2>For you</h2>
        </div>
        <div className="linerTwo"></div>
        <div className="box">
          <h2>
            Welcome to the new feed! We’re updating the cards and ranking all
            the time, so check back regularly.
          </h2>
          <p>
            Follow me on <span>YouTube</span> <span>Twitter</span>{" "}
            <span>Instagram</span>
          </p>
          <button className="btn">
            <Link to="/layout" style={{ color: "#6093DC" }}>
              My GitHub Go
            </Link>
          </button>
        </div>
        <div className="boxCenter">
          <div className="boxCenterFirst">
            <IoBulbOutline />
            <p>
              On my channel there are videos with <span>React</span>{" "}
              <span>JavaScript</span> <span>HTML and Css</span>
              <span>Matereal UI</span>
            </p>
          </div>
          <div className="boxCenterFirst">
            {/* <MdRssFeed /> */}
            <p>Subscribe to the channel, to stay updated</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainRight;
