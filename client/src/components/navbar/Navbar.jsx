import React, { useEffect, useState } from 'react';
import Button from '../buttons/Button';
import './Navbar.css';
import { IoSearchSharp } from 'react-icons/io5';
import NavLink from './nav-link/NavLink';
import { IoIosNotifications } from 'react-icons/io';
import { BiListUl } from 'react-icons/bi';
import Login from '../../pages/login-page/Login';
const navLinksData = [
  { id: 0, text: 'Home', isActive: true },
  { id: 1, text: 'Renewals', isActive: false },
  { id: 2, text: 'About us', isActive: false },
];
const Navbar = ({ activeId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openLoginSignup, setOpenLoginSignup] = useState({
    open: false,
    page: '',
  });
  const handleSearchQuery = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.length) {
      console.log(searchQuery);
    }
  };

  const handleLoginSignup = ({ page }) => {
    setOpenLoginSignup((prev) => {
      return { open: !prev.open || prev.page !== page, page };
    });
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1>{process.env.REACT_APP_NAME || 'APP'}</h1>
          <p>{process.env.REACT_APP_FULL_FORM || 'App full form'}</p>
        </div>
        <div className="nav-links">
          {navLinksData.map((link) => (
            <NavLink
              key={link.id}
              text={link.text}
              active={link.id === activeId}
            />
          ))}
        </div>
        <div className="search">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="field"
              name="searchQuery"
              value={searchQuery}
              onInput={handleSearchQuery}
              placeholder="Search..."
            />
            <button
              className="search-icon"
              type="submit">
              <IoSearchSharp />
            </button>
          </form>
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
              onClick={() => handleLoginSignup({ page: 'signup' })}
            />
            <Button
              type="button"
              text="Login"
              theme="green"
              onClick={() => handleLoginSignup({ page: 'login' })}
            />
          </div>
          <div className="user-logged-in"></div>
        </div>
      </div>
      {openLoginSignup.open && (
        <Login
          page={openLoginSignup.page}
          setOpen={setOpenLoginSignup}
        />
      )}
    </>
  );
};

export default Navbar;
