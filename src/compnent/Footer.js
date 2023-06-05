import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="footer">
        <div>
          <h3 style={{ display: "inline" }}>issues</h3>
          {} <span>21</span>
        </div>
        <span className="add">+</span>
      </div>
    </div>
  );
};

export default Footer;
