import React from 'react';
import './DarkGreenButton.css';
import cn from 'classnames'
const DarkGreenButton = ({ text }) => {
  return (
    <>
      <button className='button'>{text}</button>
    </>
  );
};

export default DarkGreenButton;
