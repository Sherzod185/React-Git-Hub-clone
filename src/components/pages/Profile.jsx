import React from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { TbBook, TbBook2 } from "react-icons/tb";
import { FiBox, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const Profile = () => {
  const [count, setCount] = React.useState([]);
  const sher = React.useRef();
  const beh = React.useRef();

  const rang2 = () => {
    return (
      (beh.current.style.borderBottom = "2.2px solid #BC6552"),
      (sher.current.style.borderBottom = "2.2px solid transparent")
    );
  };

 
  const rang1 = () => {
    return (
      (sher.current.style.borderBottom = "2.2px solid #BC6552"),
      (beh.current.style.borderBottom = "2.2px solid transparent")
    );
  };

  useEffect(() => {
    axios.get(`https://api.github.com/users/Sherzod185/repos`).then((data) => {
      setCount(data?.data);
    });
  }, []);
  return (
    <div className="profile">
      <nav>
        <div className="profileIcon">
          <div className="b">
            <Link onClick={rang1} className="graf" to="/layout">
              <TbBook />
              <h2>Overview</h2>
            </Link>
            <div ref={sher} className="a"></div>
          </div>
        </div>
        <div className="profileIcon">
          <Link onClick={rang2} className="graf" to="/layout/reponsive">
            <TbBook2 />
            <h2>
              Repositories <span>{count.length + 27}</span>
            </h2>
          </Link>
          <div ref={beh} className="a"></div>
        </div>
        <div className="profileIcon">
          <AiOutlineInbox />
          <h2>Projects</h2>
        </div>
        <div className="profileIcon">
          <FiBox />
          <h2>Packages</h2>
        </div>
        <div className="profileIcon">
          <FiStar />
          <h2>Start</h2>
        </div>
      </nav>
      <div className="lineFour"> </div>
      <div className="sectionCenter"></div>
    </div>
  );
};

export default Profile;
