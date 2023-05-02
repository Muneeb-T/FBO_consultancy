import React from 'react';
import Button from '../../components/buttons/Button';
import Navbar from '../../components/navbar/Navbar';
import './NotFound.css';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import notFoundImage from '../../assets/Not found.png';
const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <div className='error-details'>
          <p className="error-code">404 - Page not found</p>
          <p className="error-text">
            The page you are looking for was moved, removed, renamed or might
            never existed
          </p>
          <Link
            to="/"
            style={{ textDecoration: 'none' }}>
            <Button
              type="button"
              text="GO TO HOMEPAGE"
              theme="green"
              startIcon={<AiFillHome />}
            />
          </Link>
        </div>
        <img
          src={notFoundImage}
          alt="Page not found"
        />
      </div>
    </>
  );
};

export default NotFound;
