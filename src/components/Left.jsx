import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import {MdInsertEmoticon} from "react-icons/md"
import { Link } from 'react-router-dom';
import {BsPeopleFill} from "react-icons/bs"
const Left = ({ setStarLine, starLine }) => {
  const [img, setImg] = React.useState([]);
  const [follower, setFollower] = React.useState([]);
  const [following, setFollowing] = useState([]);
  useEffect(() => {
    axios.get(`https://api.github.com/users/Sherzod185/repos`).then((data) => {
      setImg(data?.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Sherzod185/following`)
      .then((data) => {
        setFollowing(data?.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Sherzod185/followers`)
      .then((data) => {
        setFollower(data?.data);
      });
  }, []);

  return (
    <div className="left">
      <div className="image">
        <Link to="/">
          {" "}
          <img src={img[0]?.owner.avatar_url} alt="logo" />
        </Link>
        <div className="emoticonBox">
          <MdInsertEmoticon className="emoticon" />
        </div>
      </div>
      <div className="leftDetails">
        <h2 style={{ margin: "0px" }}>Sherzod</h2>
        <h2
          style={{
            margin: "0",
            marginBottom: "15px",
            fontSize: "18px",
            color: "rgb(87, 82, 99)",
          }}
        >
          {img[0]?.owner.login}
        </h2>
        <button>Edit profile</button>
        <div>
          <div className="followBlock">
            <BsPeopleFill className="people" />
            <Link onClick={() => setStarLine(4)} to="/layout/followers">
              {" "}
              {follower.length}followers
            </Link>
            <div>
              {" "}
              <Link onClick={() => setStarLine(5)} to="/layout/followings">
                {following.length} following
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left