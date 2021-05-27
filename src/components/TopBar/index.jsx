import React from "react";
import "./TopBar.css";
const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="web-name">Travel Blog</div>
      <div className="nav-menu">
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default TopBar;
