import meetup from "../../meetup.svg";
import React from "react";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-bar flex flex-space-between">
        <img src={meetup} className="logo-img" alt="logo" />
        <Search />
      </nav>
    </div>
  );
};

export default Navbar;
