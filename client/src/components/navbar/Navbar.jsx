import React from 'react';
import Button from '../buttons/Button';
import './Navbar.css';
import { IoSearchSharp } from 'react-icons/io5';
import NavLink from './nav-link/NavLink';
import { IoIosNotifications } from 'react-icons/io';
import { BiListUl } from 'react-icons/bi';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>FBO</h1>
        <p>Food buero organaization</p>
      </div>
      <div className="nav-links">
        <NavLink
          text="Home"
          active
        />
        <NavLink text="Reniewals" />
        <NavLink text="About us" />
      </div>
      <div className="search">
        <input
          type="text"
          className="field"
          placeholder="Search..."
        />
        <button className="search-icon">
          <IoSearchSharp />
        </button>
      </div>
      <div className="options">
        <div className="database">
          <p>Database</p>
          <p>
            <span>121.3</span>
            <span>/</span>
            <span>512 MB</span>
          </p>
        </div>

        <BiListUl />
        <IoIosNotifications />
      </div>
      <div className="user">
        <div className="login-signup">
          <Button
            type="button"
            text="Sign Up"
            theme="white"
          />
          <Button
            type="button"
            text="Login"
            theme="green"
          />
        </div>
        <div className="user-logged-in"></div>
      </div>
    </div>
  );
};

export default Navbar;
