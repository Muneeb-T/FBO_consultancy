import React from 'react';
import classNames from 'classnames';
import './Loader.css';
const Loader = ({ bgOpacity }) => {
  return (
    <div
      className={classNames('loader', {
        'background-opacity-0': bgOpacity === 0,
        'background-opacity-10': bgOpacity === 10,
        'background-opacity-25': bgOpacity === 25,
        'background-opacity-50': bgOpacity === 50,
        'background-opacity-75': bgOpacity === 75,
      })}>
      <div className="loader-wrapper">
        <span className="loader-object"></span>
      </div>
    </div>
  );
};

export default Loader;
