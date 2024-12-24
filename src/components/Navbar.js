import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>Hello</h1>
      </div>
      <div className="middle">
        <input type="text" className="search"></input>
      </div>
      <div className="right">
        <a href="#">Home</a>
        <a href="#">Library</a>
        <a href="#">Links</a>
        <a href="#">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
