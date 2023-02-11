import React from "react";
import Footer from "./Footer";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import start from "../img/starts.jpg"
import iconSvg from "../img/icon.svg";
import { IoMdArrowDropdown } from "react-icons/io";
const Reponsive = () => {
   const [changes, setChanges] = useState("");
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get(`https://api.github.com/users/Sherzod185/repos`).then((data) => {
      setDatas(data?.data);
    });
  }, []);
  const searchs=(e)=>{
 setChanges(e.target.value);
  }
   const filtersRes = datas.filter((data) =>
     data.full_name.toLowerCase().includes(changes.toLowerCase())
   );
  return (
    <div>
      <div className="repos">
        <div className="formBlock">
          <input
            onChange={searchs}
            type="search"
            placeholder="Find a repository..."
          />
          <button>
            Type
            <IoMdArrowDropdown />
          </button>
          <button>
            Language
            <IoMdArrowDropdown />
          </button>
          <button>
            Sort
            <IoMdArrowDropdown />
          </button>

          <a target="_" href="https://github.com/new">
            <img src={iconSvg} alt="" />
            New
          </a>
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
                      <img src={start} alt="img" />
                      <div className="greenLine"></div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div className="boxxs">
      </div>
        <Footer />
    </div>
  );
};

export default Reponsive;
