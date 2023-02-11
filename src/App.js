import React from "react";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Reponsive from "./components/Reponsive";
import MainLayout from "./layout/layout";
import Overview from "./components/Overview";
import Followers from "./components/Followers";
import Followings from "./components/Followings";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/layout" element={<MainLayout />}>
          <Route path="/layout" element={<Overview />} />
          <Route path="reponsive" element={<Reponsive />} />{" "}
          <Route path="followings" element={<Followings />} />
          <Route path="followers" element={<Followers />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <div
                style={{
                  width: "1100px",
                  margin: "auto",
                  marginTop: "40px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0.5px 0.5px 10px 0.5px #fff",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src="https://i.stack.imgur.com/Esppm.png"
                  alt="page not found"
                />
              </div>
              <Link className="notFountPage" style={{display:"block", textAlign:"center", marginTop:"50px"}} to="/">GO BACK GITHUB CLONE</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
