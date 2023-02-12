import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu">
      <div className="menuContainer">
        <h3>
          Sign in as <br />
          Sherzod185
        </h3>
        <div className="lineThere"></div>
        <div className="menuStatus">
          <input type="text" placeholder="🔍Set Status" />
        </div>

        <div className="lineThere"></div>
        <p>
          <Link to="/layout">You profile</Link>
        </p>
        <p>
          <Link to="/layout/reponsive">You repositories</Link>
        </p>
        <p>Your project</p>
        <p>Your start</p>
        <p>Your gists</p>
        <p>You sponsors</p>
        <div className="lineThere"></div>
        <p>Upgrade</p>
        <p>Try Enterprise </p>
        <p>Feature preview</p>
        <p>Help</p>
        <p>Settings</p>
        <div className="lineThere"></div>
        <p>Sign out</p>
      </div>
    </div>
  );
};

export default Menu;
