import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import rasm2 from "../img/img2.jpg";
import rasm from "../img/rasm.jpg";
import Footer from "./Footer";
import { FiStar } from "react-icons/fi";
import pen from "../img/pen.svg";

const Overview = () => {
  const [datas, setDatas] = useState([]);
  const [count, setCount] = useState(8);
  useEffect(() => {
    axios.get(`https://api.github.com/users/Sherzod185/repos`).then((data) => {
      setDatas(data?.data);
    });
  }, []);
  const showMore = () => {
    if (count === 8) {
      return setCount(100);
    } else {
      return setCount(8);
    }
  };
  return (
    <div>
      <div className="overview">
        <div className="devoleper">
          <div>
            <p className="sherzod185">Sherzod185/README.md</p>
            <img src={pen} alt="pen" />
          </div>
          <a href="https://git.io/typing-svg">
            <img
              src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=14F728&width=435&lines=I+am+a+frontend+developer.+++;I+have+completed+the+frontend+React+course."
              alt="Typing SVG"
            />
          </a>
        </div>
        <div className="repositories">
          <div className="repositoriesTitle">
            <h2>Popular repositories</h2>
          </div>
          <div className="repositoriesContainer">
            {datas.length === 0 ? (
              <div className="loadings">
                <img
                  src="https://i0.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1"
                  alt="loading"
                />
              </div>
            ) : (
              datas?.map((el, i) => {
                if (i < count) {
                  return (
                    <div key={i} className="repositoriesBox">
                      <div className="repositoriesTop">
                        <a target="_" href={el.svn_url}>
                          {el.name}
                        </a>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {el.language === "HTML" ? (
                            <div>
                              <span className="html1"></span> {el.language}
                            </div>
                          ) : (
                            <div>
                              <span className="javaScript1"></span>{" "}
                              {el.language}
                            </div>
                          )}
                          {el.stargazers_count === 0 ? (
                            ""
                          ) : (
                            <p
                              style={{
                                display: "flex",
                                margin: "0",
                                marginLeft: "8px",
                              }}
                              className="startgazen"
                            >
                              <FiStar />
                              {el.stargazers_count}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="repositoriesBottom">
                        <p>public</p>
                      </div>
                    </div>
                  );
                }
              })
            )}
            <p className="showMore" onClick={() => showMore()}>
              {count === 8 ? "Show more" : "Back"}
            </p>
            <div className="imgBlock">
              <img src={rasm} alt="img" /> <img src={rasm2} alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="boxxs">
        <Footer />
      </div>
    </div>
  );
};

export default Overview;
