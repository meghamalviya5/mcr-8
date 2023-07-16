import meetup from "../../meetup.svg";
import React from "react";
import Search from "../Search/Search";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="nav-bar flex flex-space-between">
        <img src={meetup} className="logo-img" alt="logo" />
        <Search />
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
