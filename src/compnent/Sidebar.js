import React from "react";
import "./Sidebar.css";
import logo from "./image/Marriott_International 1zag.svg";
import arrow from "./image/Vectorarrog.svg";
import worklogo from "./image/grid.png";
import stnlogo from "./image/Vectorse.svg";

const Sidebar = () => {
  return (
    <div className="side">
      <div className="zag">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="report" id="rs">
        <img className="logos" src={arrow} alt="arw" />
        <span>Report</span>
      </div>
      <div className="report">
        <img className="logos" src={worklogo} alt="worklogo" />
        <span>Workspaces</span>
      </div>
      <div className="report">
        <img className="logos" src={stnlogo} alt="stnlogo" />
        <span>Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
