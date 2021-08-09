import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";

export const Header = () => {
  let history = useHistory();

  return (
    <div>
      <input type="checkbox" id="check" />
      <nav>
        <div className="icon">Present Me</div>
        <div className="search">
          <input type="search" placeholder="Search here..." />
          <SearchIcon style={{ fontSize: 30 }} className="search_material" />
        </div>
        <ul>
          <li>
            <a
              href="#"
              onClick={() => {
                history.push("/");
              }}
            >
              home
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                history.push("/discover");
              }}
            >
              Discover
            </a>
          </li>
          <li>
            <a href="#footer">About Us</a>
          </li>
          <li>
            <a href="#footer">Contact Us</a>
          </li>
        </ul>
        <label htmlFor="check" className="bar">
          <MenuIcon style={{ color: "#fff" }} id="bars" />
          <CloseIcon style={{ color: "#fff" }} id="times" />
        </label>
      </nav>
    </div>
  );
};
