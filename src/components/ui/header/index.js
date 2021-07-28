import React from "react";

import { NavLink } from "react-router-dom";
import "./styles.scss";

const header = ({ isOpen, clicked }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <nav className="nav">
          <div className="logo">
            <span className="brand-name">SAMASYS</span>
            <span>combat salary fraud</span>
          </div>

          <div className={`nav-links ${isOpen ? "show" : ""}`}>
            <ul>
              <li>
                <NavLink to="/" activeClassName="active" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/employees" activeClassName="active" exact>Employees</NavLink>
              </li>
            </ul>
          </div>

          <div className="hamburger_wrapper">
            <button
              type="button"
              aria-label="navigation button"
              className={`hamburger hamburger--spin ${
                isOpen ? "is-active" : ""
              }`}
              onClick={clicked}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default header;
