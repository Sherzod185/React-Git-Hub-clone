import React from "react";
import img1 from "../img/logo1.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerFirst">
        <img src={img1} alt="logo" />
        <h3>GitHub Clone</h3>
      </div>
      <div className="footerSecond">
        <div className="footerSecondInside">
          <h3>Blog</h3>
          <h3>About</h3>
          <h3>Shop</h3>
          <h3>GitHub Clone</h3>
          <h3>Pricing</h3>
        </div>
        <div className="footerSecondInside">
          <h3>API</h3>
          <h3>Training</h3>
          <h3>Status</h3>
          <h3>Security</h3>
        </div>
        <div className="footerSecondInside">
          <h3>Terms</h3>
          <h3>Privacy</h3>
          <h3>Docs</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
