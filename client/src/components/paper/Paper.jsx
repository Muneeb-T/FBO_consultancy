import React from 'react';
import './Paper.css';
import classNames from 'classnames';
const Paper = ({
  children,
  backgroundColor,
  shadow,
  style,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{ ...style }}
      className={classNames(`paper ${className}`, {
        'background-green': backgroundColor === 'green',
        'background-white': backgroundColor === 'white',
        shadow,
      })}>
      {children}
    </div>
  );
};

export default Paper;
