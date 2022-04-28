import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="flex space-between">
            <NavLink className="NavLink" to="/">
              <img className="brand-logo" src="/logofinal.jpeg" alt="log" />
            </NavLink>
            <nav className="header-nav flex">
              <button className="my-trip-btn flex align-center">
                <img src="/traveler.png" alt="logo" />
                <div className="text-align">
                  <span className="bold"> My Trips</span>
                  <p>Manage your booking</p>
                </div>
              </button>
              <button className="login-btn">
                Login or Create Account{" "}
                <i className="fa-solid fa-angle-down"></i>
              </button>
              <button className="language-btn flex">
                <img src="/india.png" alt="india-logo" />
                <p>IN | ENG | INR </p>
                <div className="chevron-down">
                  <i className="fa-solid fa-angle-down"></i>
                </div>
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
