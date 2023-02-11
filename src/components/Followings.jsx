import React from "react";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Followings = () => {
  const [followings, setFollowings] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Sherzod185/following`)
      .then((data) => {
        setFollowings(data?.data);
      });
  }, []);
  return (
    <>
      <div className="followersBlock">
        {followings?.map((e) => (
          <div key={e.id} className="followersContainer">
            <div className="followersTop">
              {" "}
              <a href={e.html_url}>
                {" "}
                <img src={e.avatar_url} alt="avatar" />
              </a>
              <a target="_" href={e.html_url} className="fullNam">
                {e.login}
              </a>
            </div>
            <span className="unfollow">Unfollow</span>
          </div>
        ))}
      </div>
      <div className="line"></div>
      <Footer />
    </>
  );
};

export default Followings;
