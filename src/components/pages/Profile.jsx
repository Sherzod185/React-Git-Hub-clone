import React from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { TbBook, TbBook2 } from "react-icons/tb";
import { FiBox, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const Profile = ({ starLine, setStarLine }) => {
  const [count, setCount] = React.useState([]);
  const [starts, setStarts] = React.useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/Sherzod185/repos`).then((data) => {
      setCount(data?.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Sherzod185/starred`)
      .then((data) => {
        setStarts(data?.data);
      });
      if (window.location.pathname === "/layout/reponsive") {
        setStarLine(2)
      } else if(window.location.pathname === "/layout/startings"){
         setStarLine(3);
      }
  }, []);
  return (
    <div className="profile">
      <nav>
        <Link onClick={() => setStarLine(0)} className="graf" to="/layout">
          <div className="profileIcon">
            <TbBook />
            <h2>Overview</h2>
            {starLine === 0 ? <div className="a"></div> : ""}
          </div>
        </Link>
        <Link
          onClick={() => setStarLine(2)}
          className="graf"
          to="/layout/reponsive"
        >
          <div className="profileIcon">
            <TbBook2 />
            <h2>
              Repositories <span>{count.length}</span>
            </h2>
            {starLine === 2 ? <div className="a"></div> : ""}
          </div>
        </Link>
        <div className="profileIcon">
          <AiOutlineInbox />
          <h2>Projects</h2>
        </div>
        <div className="profileIcon">
          <FiBox />
          <h2>Packages</h2>
       
        </div>
        <Link
          onClick={() => setStarLine(3)}
          className="graf"
          to="/layout/startings"
        >
          <div className="profileIcon">
            <FiStar />
            <h2>
              Start <span>{starts.length}</span>
            </h2>
            {starLine === 3 ? <div className="a"></div> : ""}
          </div>
        </Link>
      </nav>
      <div className="lineFour"> </div>
      <div className="sectionCenter"></div>
    </div>
  );
};

export default Profile;
