import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const location = useLocation();
  return (
    <nav>
      <div className="nav-main">
        <Link to="/">
          <div className="nav-logo">
            <img src={require("../../images/logo.png")}alt="logo" />
          </div>
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ul className="nav-options-container">
            <li
              className={`nav-options ${
                location.pathname === "/Overview" ? "nav-options-active" : ""
              }`}
            >
              <Link to="/Overview">Overview</Link>
            </li>
            <li
              className={`nav-options ${
                location.pathname === "/Sales" ? "nav-options-active" : ""
              }`}
            >
              <Link to="/Sales">Sales</Link>
            </li>
            <li
              className={`nav-options ${
                location.pathname === "/Inventory" ? "nav-options-active" : ""
              }`}
            >
              <Link to="/Inventory">Inventory</Link>
            </li>
            <li
              className={`nav-options ${
                location.pathname === "/Invoicing" ? "nav-options-active" : ""
              }`}
            >
              <Link to="/Invoicing">Invoicing</Link>
            </li>
            <li
              className={`nav-options ${
                location.pathname === "/Suppliers" ? "nav-options-active" : ""
              }`}
            >
              <Link to="/Suppliers">Suppliers</Link>
            </li>
            <li
              className={`nav-options ${
                location.pathname === "/Patients" ? "nav-options-active" : ""
              }`}
            >
              <Link to="/Patients">Patients</Link>
            </li>
            <li
              className={`nav-options ${
                location.pathname === "/Insurance" ? "nav-options-active" : ""
              }`}
            >
              <Link to="/Insurance">Insurance</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-searchArea">
        <input
          type="text"
          className="input-field"
          name="Search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={require("../../images/loginIcon.png")}
          className="loginButton" alt="login"
        />
      </div>
    </nav>
  );
}
