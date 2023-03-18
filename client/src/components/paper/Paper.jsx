import React from 'react';
import './Paper.css';
import classNames from 'classnames';
const Paper = ({ children, backgroundColor, shadow, style }) => {
  return (
    <div
      style={{ ...style }}
      className={classNames('paper', {
        'background-green': backgroundColor === 'green',
        'background-white': backgroundColor === 'white',
        shadow,
      })}>
      {children}
    </div>
  );
};

export default Paper;
