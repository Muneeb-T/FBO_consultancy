import React from 'react';
import './NavLink.css';
import classNames from 'classnames';
const NavLink = ({ text, active }) => {
  return <p className={classNames('navlink', { active: active })}>{text}</p>;
};

export default NavLink;
