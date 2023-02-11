import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import iconSvg from "../img/icon.svg";
import { useRef } from "react";
const MainLeft = () => {
  const [count, setCount] = useState(7);
  const [changes, setChanges] = useState("");
  const [res, setRes] = useState([]);
  const showBack=useRef()
  useEffect(() => {
    axios.get(`https://api.github.com/users/Sherzod185/repos`).then((data) => {
      setRes(data?.data);
    });
  }, []);
  const onSearch = (e) => {
    setChanges(e.target.value);
  };
  const filtersRes = res.filter((data) =>
    data.full_name.toLowerCase().includes(changes.toLowerCase())
  );

  const showMore = () => {
    if (count === 7) {
      return setCount(100);
    } else {
      return setCount(7);
    }
  };
  return (
    <div className="mainLeftContainer">
      <div className="mainLeft">
        <div className="recentRepo">
          <div className="recentRepos">
            <h2>Top Repositories</h2>
            <a target="_" href="https://github.com/new">
              <img src={iconSvg} alt="" />
              New
            </a>
          </div>
          <div className="inputBox">
            <input
              onChange={onSearch}
              type="search"
              placeholder="Find a repositories ..."
            />
          </div>
        </div>
        <div className="mainLeftLists">
          {!filtersRes.length ? (
            <div>
              <h2
                style={{
                  color: "#fffa",
                  fontFamily: "cursive",
                  marginTop: "0",
                }}
              >
                Natija topilmadi...
              </h2>
              <div
                style={{
                  width: "300px",
                  margin: "auto",
                  marginTop: "40px",
                  borderRadius: "14px",
                  overflow: "hidden",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src="https://evanwill.github.io/go-go-ghpages-b/images/octojekyll.png"
                  alt="page not found"
                />
              </div>
            </div>
          ) : (
            filtersRes.map((item, index) => {
              if (index < count) {
                return (
                  <a
                    target="_"
                    href={item.svn_url}
                    className="item"
                    key={index}
                  >
                    <img src={item.owner.avatar_url} alt="logo" />
                    <div>
                      <h2>
                        {item.full_name.length < 30
                          ? item.full_name
                          : item.full_name.split("").splice(0, 30).join("") +
                            "..."}
                      </h2>
                    </div>
                  </a>
                );
              }
            })
          )}
        </div>
        <div className="recentRepo">
          <p ref={showBack} onClick={() => showMore()}>
            {count === 7 && !(filtersRes.length===0)
              ? "Show more"
              : `${filtersRes.length === 0 ? `` : "Back"}`}
          </p>

          <div className="recentRepos">
            <h2>Recent activity</h2>
          </div>
          <div className="inputBoxTwo">
            When you take actions across GitHub, we’ll provide links to that
            activity here.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLeft;
