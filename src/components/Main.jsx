import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import Navbar from "./Navbar"
const Main = () => {
  return (<>
    <Navbar />
    <main className="main">
      <MainLeft />
      <MainRight />
    </main>
  </>
  );
};

export default Main;
