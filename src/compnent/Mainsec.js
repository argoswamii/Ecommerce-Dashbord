import React from "react";
import "./Mainsec.css";
import Menu from "./Menu";
import Footer from "./Footer";

const Mainsec = () => {
  return (
    <>
      <div className="fcontainer">
        <div className="afcontainer">
          <div style={{ display: "flex" }}>
            <h3>Confirmed</h3>
            {} <span style={{ margin: "20px", color: "#2F2F2F" }}>21</span>
          </div>

          <span>-</span>
        </div>
        <hr className="ndhr" />
        <Menu />
      </div>
      <Footer />
    </>
  );
};

export default Mainsec;
