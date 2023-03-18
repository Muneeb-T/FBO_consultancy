import React from 'react';
import classNames from 'classnames';
import './Button.css';
const Button = ({ text, startIcon, endIcon, type }) => {
  return (
    <>
      <button
        className={classNames('button', {
          'green-text-button': type === 'green-text',
          'white-button': type === 'white',
          'green-button': type === 'green',
        })}>
        {startIcon}
        {text}
        {endIcon}
      </button>
    </>
  );
};

export default Button;
