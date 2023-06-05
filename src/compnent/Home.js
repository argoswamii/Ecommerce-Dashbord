import React from "react";
import "./Home.css";
import Mainsec from "./Mainsec";
const Home = () => {
  return (
    <>
      <div className="header">
        <div className="main">
          <h2>Orders</h2>
          <span> + Add Chart</span>
        </div>
        <hr className="orderline" />
        <Mainsec />
      </div>
    </>
  );
};

export default Home;
