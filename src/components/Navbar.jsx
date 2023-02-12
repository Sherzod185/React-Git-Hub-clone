import React, { useRef, useState } from "react";
import img1 from "../img/logo1.svg";
import { FiBell, FiPlus } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const a = useRef();
  const [img, setImg] = React.useState([]);
  const [searchs, setSearchs] = useState("");
  useEffect(() => {
    axios.get(`https://api.github.com/users/Sherzod185/repos`).then((data) => {
      setImg(data?.data);
      setSearchs("");
    });
  }, []);
  const searching = (e) => {
    setSearchs(e.target.value);
  };

  const click = () => {
    a.current.style.width = "400px";
  };
  const clickclcik = () => {
    a.current.style.width = "260px";
  };

  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      {/* left */}
      <div className="navLeft">
        <Link to="/">
          <img src={img1} alt="logo" />
        </Link>

        <div>
          <input
            ref={a}
            onClick={click}
            value={searchs}
            onChange={searching}
            className="inputLeft"
            type="search"
            placeholder="Search or jump to ..."
          />

          <Link
            className="saerch"
            onClick={clickclcik}
            to={"https://github.com/" + searchs}
          >
            Search
          </Link>
        </div>
      </div>
      {/* center */}
      <div className="navCenter">
        <h2>Pull requests</h2>
        <h2>Issues</h2>
        <h2>Codespaces</h2>
        <h2>Marketplace</h2>
        <h2>Explore</h2>
      </div>
      {/* right */}
      <div className="navRight">
        <span></span>
        <a target="_" href="https://github.com/notifications">
          <FiBell />
        </a>

        <div className="navRightIcons">
          <a target="_" href="https://github.com/new">
            <FiPlus />
          </a>

          <IoMdArrowDropdown />
        </div>
        <div onClick={() => setShowMenu(!showMenu)} className="navRightIcon">
          <img src={img[0]?.owner.avatar_url} alt="logo" />
          <IoMdArrowDropdown />
        </div>
      </div>
      {showMenu && <Menu />}
    </nav>
  );
};

export default Navbar;
