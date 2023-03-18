import React from 'react';
import Button from '../buttons/Button';
import './Navbar.css';
import { IoSearchSharp } from 'react-icons/io5';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>FBO</h1>
        <p>Food buero organaization</p>
      </div>
      <div className="nav-links"></div>
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
      <div className="options"></div>
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
