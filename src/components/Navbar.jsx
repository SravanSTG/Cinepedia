import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo5.jpg";
import tmdb from "../images/tmdb.svg";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={Logo} alt=""></img>
      <h1 className="title">
        <Link to="/">Cinepedia</Link>
      </h1>
      <img className="attribution" src={tmdb} alt=""></img>
    </nav>
  );
};

export default Navbar;
