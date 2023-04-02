import React from 'react';
import classNames from 'classnames';
import './Button.css';
const Button = ({
  text,
  disabled,
  startIcon,
  endIcon,
  theme,
  type,
  style,
  onClick,
}) => {
  return (
    <>
      <button
        type={type}
        style={{ ...style }}
        onClick={onClick}
        disabled={disabled}
        className={classNames('button', {
          'green-text-button': theme === 'green-text',
          'white-button': theme === 'white',
          'green-button': theme === 'green',
        })}>
        {startIcon}
        {text}
        {endIcon}
      </button>
    </>
  );
};

export default Button;
