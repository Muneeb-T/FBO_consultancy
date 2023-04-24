import React, { useEffect, useState } from 'react';
import Button from '../buttons/Button';
import './Navbar.css';
import { IoLogIn, IoSearchSharp } from 'react-icons/io5';
import NavLink from './nav-link/NavLink';
import { IoIosNotifications } from 'react-icons/io';
import { BiListUl } from 'react-icons/bi';
import { FaUserCircle, FaUserPlus } from 'react-icons/fa';
import { IoPower, IoSettingsSharp } from 'react-icons/io5';
import Login from '../../pages/login-page/Login';
import API from '../../api';
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';
import Paper from '../paper/Paper';
const navLinksData = [
  { id: 0, text: 'Home', isActive: true },
  { id: 1, text: 'Renewals', isActive: false },
  { id: 2, text: 'About us', isActive: false },
];
const Navbar = ({ activeId }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user') || null) || null,
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [openLogin, setOpenLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataBaseStorage, setDatabaseStorage] = useState({
    usedStorage: (0).toFixed(2),
    totalStorage: (0).toFixed(2),
  });

  const getDatabaseStorage = async () => {
    try {
      setLoading(true);
      const { data } = await API.get('/database/storage');
      const { success, storage, message } = data;
      if (!success) {
        throw { message: message || 'Something went wrong' };
      }
      setDatabaseStorage(storage);
    } catch (error) {
      console.log(error);
      const message =
        error.response?.data?.message ||
        error.message ||
        'Internal server error.';
      toast.error(message, {
        position: 'bottom-center',
        className: 'error-toast',
        autoClose: 100000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDatabaseStorage();
  }, []);

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

  const handleLogin = () => {
    setOpenLogin((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      const { data } = await API.patch('/auth/logout');
      const { success, message } = data;
      console.log(data);
      if (!success) {
        throw { message };
      }
      setUser(null);
      localStorage.removeItem('user');

      toast.success(message, {
        position: 'bottom-center',
        className: 'success-toast',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } catch (error) {
      console.log(error);
      const message =
        error.response?.data?.message ||
        error.message ||
        'Internal server error.';
      toast.error(message, {
        position: 'bottom-center',
        className: 'error-toast',
        autoClose: 100000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Loader
        bgOpacity={50}
        loading={loading}
      />
      <div className="navbar">
        <div className="logo">
          <h2>{process.env.REACT_APP_NAME || 'APP'}</h2>
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
              <span>{dataBaseStorage.usedStorage}</span>
              <span>/</span>
              <span>{dataBaseStorage.totalStorage} MB</span>
            </p>
          </div>
          <BiListUl />
          <IoIosNotifications />
        </div>
        <div className="user">
          {user ? (
            <div className="user-logged-in">
              <div className="user-button">
                <p className="username">{user.email.split('@')[0]}</p>
                <FaUserCircle className="user-icon" />
              </div>
              <Paper
                className="user-menu"
                backgroundColor="white"
                shadow>
                <ul className="menu-buttons">
                  <li>
                    <FaUserCircle className="menu-button-icon" />
                    <p>My Profile</p>
                  </li>
                  <li>
                    <IoSettingsSharp className="menu-button-icon" />
                    <p>Settings</p>
                  </li>
                  <li onClick={() => handleLogout()}>
                    <IoPower className="menu-button-icon" />
                    <p>Logout</p>
                  </li>
                </ul>
              </Paper>
            </div>
          ) : (
            <>
              <div className="login">
                <Button
                  type="button"
                  text="Login"
                  theme="green"
                  startIcon={<IoLogIn />}
                  onClick={handleLogin}
                />
              </div>
            </>
          )}
        </div>
      </div>
      {openLogin && (
        <Login
          setOpen={setOpenLogin}
          setUser={setUser}
        />
      )}
    </>
  );
};

export default Navbar;
