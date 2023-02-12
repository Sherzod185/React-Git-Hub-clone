import React from "react";
import Footer from "./Footer";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import start from "../img/stargazent.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
const Startings = () => {
  const [changes, setChanges] = useState("");
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Sherzod185/starred`)
      .then((data) => {
        setDatas(data?.data);
      });
  }, []);
  const searchs = (e) => {
    setChanges(e.target.value);
  };
  const filtersRes = datas.filter((data) =>
    data.full_name.toLowerCase().includes(changes.toLowerCase())
  );
  return (
    <div>
      <div className="repos">
        <div className="formBlock">
          <input
          style={{width:"460px"}}
            onChange={searchs}
            type="search"
            placeholder="Find a repository..."
          />
          <button>
            Type: All
            <IoMdArrowDropdown />
          </button>
          <button>
            Language
            <IoMdArrowDropdown />
          </button>
          <button>
            Sort by:Recently starred
            <IoMdArrowDropdown />
          </button>

        </div>
        <div className="repositories">
          <div className="repositoriesContainer">
            {filtersRes.length === 0 ? (
              <div className="loadings">
                <img
                  src="https://i.pinimg.com/originals/0b/21/9f/0b219f91b508342ff91c997e16afeca4.gif"
                  alt="loading"
                />
              </div>
            ) : (
              filtersRes?.map((el, i) => {
                return (
                  <div key={i} className="repositoriesBox">
                    <div className="repositoriesTop">
                      <a target="_" href={el.svn_url}>
                        {el.name}
                      </a>
                      <div>
                        {el.language === "HTML" ? (
                          <div>
                            <span className="html1"></span> {el.language}{" "}
                            <div className="days">Updated 2 moons ago</div>
                          </div>
                        ) : (
                          <div>
                            <span className="javaScript1"></span> {el.language}{" "}
                            <div className="days">Updated last week</div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="repositoriesBottom">
                      <p>public</p>
                    </div>
                    <div className="startBlock">
                      <img style={{width:"130px", marginLeft:"20px"}} src={start} alt="img" />
                      <div className="greenLine"></div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div className="boxxs"></div>
      <Footer />
    </div>
  );
};

export default Startings;
