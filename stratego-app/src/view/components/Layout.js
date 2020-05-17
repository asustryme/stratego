import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../../assets/logo.png";

export const Layout = ({ children }) => {
  return (
    <div>
    <div className="ui fixed inverted menu">
    <div className="ui container">
      <a href="/" className="header item">
        <img className="logo" src={logo} alt="logo" />

      </a>
      
      <NavLink className="item" to="/">
          <i className="home icon"></i> Kezdőlap
        </NavLink>

      <a className="item" target="_blank" rel="noopener noreferrer" href="http://www.ketaklub.hu/letoltes/Stratego%20Aoriginal%20Piatnik.pdf">
          Játékszabály
        </a>

      {/*
        <NavLink className="item" to="/lobby">
          <i className="clock icon"></i> Várakozó
        </NavLink>
        <NavLink className="item" to="/prepare">
          <i className="seedling icon"></i> Előkészítés
        </NavLink>
        <NavLink className="item" to="/game">
          <i className="game icon"></i> Játék
      </NavLink> */}
    </div>
  </div>

    <div className="ui main text container">
      
      {children}
    </div>
    <div className="ui inverted vertical footer segment">
    <div className="ui center aligned container">
      <img src={logo} alt="logo" className="ui centered mini image" />
      <div className="ui horizontal inverted small divided link list">
        <div className="item">Steiner Dániel - JQG9LK</div>
      </div>
    </div>
  </div>
  </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};