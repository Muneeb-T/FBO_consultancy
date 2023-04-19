import React from 'react';
import './Link.css';
import { Link } from 'react-router-dom';
const LinkTo = ({ redirectTo, image, text }) => {
  return (
    <Link
      to={`${redirectTo}`}
      target="_blank"
      className='link-wrap'
      style={{ textDecoration: 'none' }}>
      <div className="link">
        <img
          className="image"
          src={image}
          alt="Link"
        />
      </div>
      <p className="text">{text}</p>
    </Link>
  );
};

export default LinkTo;
